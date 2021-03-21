# DRONA

[![GitHub watchers](https://img.shields.io/github/watchers/C-Anirudh/Drona.svg?style=social&label=Watch&maxAge=2592000)](https://github.com/C-Anirudh/Drona/watchers/)
[![GitHub stars](https://img.shields.io/github/stars/C-Anirudh/Drona.svg?style=social&label=Star&maxAge=2592000)](https://github.com/C-Anirudh/Drona/stargazers/)
[![GitHub forks](https://img.shields.io/github/forks/C-Anirudh/Drona.svg?style=social&label=Fork&maxAge=2592000)](https://github.com/C-Anirudh/Drona/network/)

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/C-Anirudh/Drona/graphs/commit-activity)
[![GitHub license](https://img.shields.io/github/license/C-Anirudh/Drona.svg)](https://github.com/C-Anirudh/Drona/blob/master/LICENSE)

[![GitHub issues](https://img.shields.io/github/issues/C-Anirudh/Drona.svg)](https://GitHub.com/C-Anirudh/Drona/issues/)
[![GitHub pull-requests](https://img.shields.io/github/issues-pr/C-Anirudh/Drona.svg)](https://GitHub.com/C-Anirudh/Drona/pull/)
[![GitHub contributors](https://img.shields.io/github/contributors/C-Anirudh/Drona.svg)](https://GitHub.com/C-Anirudh/Drona/graphs/contributors/)

The onset of the COVID-19 pandemic has forced educators to take an online approach to education. There has been a boom in the use of online resources. Online classes along with other online resources are now a part of every student's life. One of the most important online resources available to students is educational videos. These can be found on YouTube and other sites or be recordings of a lecturer.

The following are the various issues/problems with online educational videos:
- Students tend to space out when the video is long and the concepts taught are tedious.
- There is no feedback loop to check what a student understands after he watches the video.
- The videos are mostly in English or Hindi and some of them don’t have closed captions. This poses a language barrier for people from parts of India who don’t speak either of the languages.
- Students have to manually take notes while listening to the video.

Drona (a browser extension) will be a solution to all these problems and be a great help to students. It will help them surmount these difficult times and forge ahead with their education.

## :minidisc: Installation Instructions

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
5. Start the Flask server
    
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

## :dizzy: Design

### High Level Design

![Drona_high_level_design_diagram](https://user-images.githubusercontent.com/40494926/104289433-23344380-54df-11eb-8a6c-3cca1f2fe499.png)


### Backend - Low Level Design

![Drona_low_level_diagram](https://user-images.githubusercontent.com/40494926/104289439-24fe0700-54df-11eb-9ea9-7a451c0c5ecf.png)

## :wrench: Tech Stack

* **Language:**  Python 3.7
* **Framework:** Flask 1.1.2
* **Extension:** HTML, CSS, JS
