# Installing Drona

0. Prerequisites: Make sure that you have `Python 3`, `virtualenv`, and `pip` installed.     
1. Clone the repository
   
    ```
        $ git clone https://github.com/C-Anirudh/Drona.git
        $ cd Drona
    ```

### Setting up Flask Server

2. Create a python 3 virtualenv inside the `backend` folder, and activate the environment.
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
3. Install the project dependencies from `requirements.txt`
    ```
        $ pip install -r requirements.txt
    ```
4. Run `setup.py` to download additional requirements
    ```bash
        $ python setup.py 
    ```
5. Install `ffmpeg`
    ```bash
        $ sudo apt install ffmpeg 
    ```
6. Start the Flask server
    
    For Linux:
    ```
        $ export FLASK_APP=app.py
        $ flask run
    ```

    For Windows:
    ```
        $ set FLASK_APP=app.py
        $ flask run
    ```

### Loading the extension in Chrome

6. Navigate to [chrome://extensions](chrome://extensions)
7. Toggle the `Developer mode` on the top right corner.
8. Click on `Load unpacked` on the top left corner and open the `/Drona/extension/` folder to load the extension in Chrome.
