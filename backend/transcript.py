from __future__ import unicode_literals
import requests
import time
import datetime

# Import for handling XML
import xml.etree.ElementTree as ET

# Import for audio extraction
import youtube_dl

# Imports for speech to text using Microsoft Azure services
import azure.cognitiveservices.speech as speechsdk

def extract_audio(videoID):
    ydl_opts = {
        'format': 'bestaudio/best',
        'outtmpl': videoID+'.%(ext)s',
        'postprocessors': [{
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'wav',
            'preferredquality': '192',
        }],
    }
    with youtube_dl.YoutubeDL(ydl_opts) as ydl:
        ydl.download(['http://www.youtube.com/watch?v=' + videoID])

'''
# Imports for speech to text using IBM Watson
from ibm_watson import SpeechToTextV1
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
from ibm_watson import ApiException

def stt_ibm_watson(videoID):
    apikey = ''
    url = ''

    audioFile = videoID + '.wav'
    print('[LOG] - Audio file name: ', audioFile)

    # Setup Service
    authenticator = IAMAuthenticator(apikey)
    stt = SpeechToTextV1(authenticator=authenticator)
    stt.set_service_url(url)
    
    # Perform conversion
    try:
        with open(audioFile, 'rb') as f:
            res = stt.recognize(audio=f, content_type='audio/wav', model='en-US_NarrowbandModel', continuous=True).get_result()
    except ApiException as ex:
        print("Method failed with status code " + str(ex.code) + ": " + ex.message)

    print(res)
    return(res)
'''

def stt_azure(videoID):
    audioFile = videoID + '.wav'
    print('[LOG] - Audio file name: ', audioFile)

    speech_key, service_region = "", ""
    speech_config = speechsdk.SpeechConfig(subscription=speech_key, region=service_region)

    audio_input = speechsdk.audio.AudioConfig(filename=audioFile)

    speech_config.speech_recognition_language="en-US"
    speech_config.request_word_level_timestamps()
    speech_config.enable_dictation()
    speech_config.output_format = speechsdk.OutputFormat(1)

    speech_recognizer = speechsdk.SpeechRecognizer(speech_config=speech_config, audio_config=audio_input)

    all_results = []

    def handle_final_result(evt):
        all_results.append(evt.result.text) 
    
    done = False

    def stop_cb(evt):
        print('CLOSING on {}'.format(evt))
        speech_recognizer.stop_continuous_recognition()
        nonlocal done
        done= True

    speech_recognizer.recognized.connect(handle_final_result) 

    speech_recognizer.recognizing.connect(lambda evt: print('RECOGNIZING: {}'.format(evt)))
    speech_recognizer.recognized.connect(lambda evt: print('RECOGNIZED: {}'.format(evt)))
    speech_recognizer.session_started.connect(lambda evt: print('SESSION STARTED: {}'.format(evt)))
    speech_recognizer.session_stopped.connect(lambda evt: print('SESSION STOPPED {}'.format(evt)))
    speech_recognizer.canceled.connect(lambda evt: print('CANCELED {}'.format(evt)))

    speech_recognizer.session_stopped.connect(stop_cb)
    speech_recognizer.canceled.connect(stop_cb)

    speech_recognizer.start_continuous_recognition()

    while not done:
        time.sleep(.5)

    return(all_results)

def get_video_transcript(videoID):
    transcript = ''
    URL = 'http://video.google.com/timedtext?lang=en&v=' + videoID
    r = requests.get(url = URL) 
    print('[LOG] - Response from Google Transcript API - [transcript.py]\n', r)

    '''
    This checks if transcript was returned by the Google transcript API. If no 
    transcript was returned, we move to manual speech to text conversion using
    ffmpeg and Microsoft Azure speech to text services.
    '''
    if r.text != '':
        root = ET.fromstring(r.text)
        print(root)

        for child in root:
            transcript = transcript + ". " + child.text
    else:
        extract_audio(videoID)
        result = stt_azure(videoID)
        for sent in result:
            transcript = transcript + sent + " "
        print('[LOG] - Video Transcript - [transcript.py]\n', transcript)
    return transcript