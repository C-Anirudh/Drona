from flask import Flask
from flask import request
from flask_cors import CORS
from helper import get_video_transcript
from summarizer import create_summary

import json

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST'])
def index():
    request_json = request.get_json(silent=True)
    print('ID of the YouTube video: ', request_json)
    transcript = get_video_transcript(request_json)
    summary = create_summary(transcript)
    print('Summary of video: \n', summary)
    return json.dumps(summary)
