#!/bin/bash
pip install -r requirements.txt
pip install git+https://github.com/boudinfl/pke.git
python -m spacy download en
python nltk_pack.py
sudo apt install ffmpeg -y
export FLASK_APP=app.py