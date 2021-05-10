#!/bin/bash
pip3 install -r requirements.txt
pip3 install git+https://github.com/boudinfl/pke.git
python3 -m spacy download en
python3 nltk_pack.py
apt-get install ffmpeg -y
export FLASK_APP=app.py