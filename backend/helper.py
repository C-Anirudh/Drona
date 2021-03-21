import requests
import xml.etree.ElementTree as ET

def get_video_transcript(videoID):
    transcript = " "
    URL = 'http://video.google.com/timedtext?lang=en&v=' + videoID
    r = requests.get(url = URL) 
    # extracting data in json format 
    root = ET.fromstring(r.text)
    tree = ET.ElementTree(root)
    
    for child in root:
        transcript = transcript + " " + child.text

    return transcript