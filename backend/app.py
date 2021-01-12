from flask import Flask
from flask import request
from flask_cors import CORS
from helper import getTranscript
from summarizer import create_summary

import json

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST'])
def index():
    request_json = request.get_json(silent=True)
    print(request_json)
    transcript = getTranscript(request_json)
    summary = create_summary(transcript)
    print(summary)
    return json.dumps(summary)
