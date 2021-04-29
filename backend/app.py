from flask import Flask
from flask import request
from flask_cors import CORS
from transcript import get_video_transcript
from summarizer import create_summary
from mcq import create_mcq

import json

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST'])
def index():
    request_json = request.get_json(silent=True)
    print('[LOG] - Video ID :', request_json)
    transcript = get_video_transcript(request_json)
    print('[LOG] - Transcript - [app.py]\n', transcript)
    summary = create_summary(transcript)
    create_mcq(summary, transcript)
    print('[LOG] - Video Summary - [app.py]\n', summary)
    #print(mcqs)
    return json.dumps(summary)