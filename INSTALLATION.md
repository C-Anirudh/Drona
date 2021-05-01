# Installing Drona

- Prerequisites: Make sure that you have `Python 3`, `virtualenv`, and `pip` installed.     
- Clone the repository
   
    ```
        $ git clone https://github.com/C-Anirudh/Drona.git
        $ cd Drona
    ```

### Setting up Flask Server

- Create a python 3 virtualenv inside the `backend` folder, and activate the environment.
    ```bash
        $ cd backend
        $ virtualenv -p python3 venv
    ```

    To activate in Linux:
    ```bash
        $ source venv/bin/activate 
    ```

    To activate in Windows:
    ```Pu
        > venv\Scripts\activate.bat
    ```   
### For Linux

- Run the `setup.sh` bash script to install dependecies (will prompt for sudo password in the end to install `ffmpeg`)
    ```bash
        $ ./setup.sh 
    ```

- Start the Flask server
    ```bash
        $ flask run
    ```

### For Windows
- Install the project dependencies from `requirements.txt`
    ```
        $ pip install -r requirements.txt
    ```
- Install the python `pke` library
    ```
        $ pip install git+https://github.com/boudinfl/pke.git
    ```
- Install the spacy `en` model
    ```
        $ python -m spacy download en
    ```
- Run `setup.py` to download additional requirements
    ```bash
        $ python nltk_pack.py 
    ```
- Install `ffmpeg`
- Start the Flask server
    ```
        $ set FLASK_APP=app.py
        $ flask run
    ```

### Loading the extension in Chrome

6. Navigate to [chrome://extensions](chrome://extensions)
7. Toggle the `Developer mode` on the top right corner.
8. Click on `Load unpacked` on the top left corner and open the `/Drona/extension/` folder to load the extension in Chrome.
