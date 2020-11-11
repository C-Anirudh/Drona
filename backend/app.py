from flask import Flask
from flask import request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST'])
def index():
    request_json = request.get_json(silent=True)
    print(request_json)
    return json.dumps('Video URL received')
