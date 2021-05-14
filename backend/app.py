from flask import Flask
from flask import request
from flask_cors import CORS
from transcript import get_video_transcript
from summarizer import create_summary
from mcq import create_mcq

import json
import time
import os

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST'])
def index():
    start = time.time()

    request_json = request.get_json(silent=True)
    print('[LOG] - Video ID :', request_json)

    transcript = get_video_transcript(request_json)
    print('[LOG] - Transcript - [app.py]\n', transcript)
    
    summary = create_summary(transcript)
    print('[LOG] - Video Summary - [app.py]\n', summary)

    MCQs = create_mcq(summary, transcript)
    print('[LOG] - MCQs - [app.py]\n', MCQs)
    
    end = time.time()
    print('[LOG] - Elapsed time from rq to rs - [app.py]\n', end-start)

    os.system('rm *.wav')
    
    return json.dumps({"summary": summary, "mcqs": MCQs})