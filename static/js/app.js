// jshint esversion:10

(function () {

    // Buttons associeted with time selection
    let customTime;
    let isPlaying;

    // Getting the buttons from the DOM
    let timeBtn = document.getElementsByClassName('time-btn'),
        themeBtn = document.getElementsByClassName('theme-btn'),
        videoBtn = document.getElementsByClassName('video-btn'),
        customTimerBtn = document.getElementsByClassName('custom-timer'),
        playIcon = document.getElementsByClassName('play'),
        pauseIcon = document.getElementsByClassName('pause');

    // Video & audio objects 
    let backgroundVideo = document.getElementById('bg-video'),
        videoSource = document.querySelector('.video-source'),
        audio = document.getElementById('audio'),
        audioSource = document.querySelector('.audio-source');

    function addEventListenerToElement(elements, eventType, fn) {
        /* Adds event listener to html element or elements. It takes an object and event type [e.g.: 'click  ']) a callback function*/

        if (elements == null || arguments.length < 1) return;
        let newArray = [...elements];

        newArray.forEach(element => {
            element.addEventListener(eventType, fn);
        });
    }


    function playAndPause (validator) {
        if (validator) {
            backgroundVideo.play();
            audio.play();
        } else {
            backgroundVideo.pause();
            audio.pause();
        }
    }

    function reset () {
        isPlaying = false;
        backgroundVideo.load();
        pauseIcon[0].style.display = "none";
        playIcon[0].style.display = "block";
    }

    addEventListenerToElement(customTimerBtn, 'click', () => {
        customTime = window.prompt("Enter your custom time. Example: 03:00.", "05:00");
        console.log(customTime);
    });

    addEventListenerToElement(playIcon, 'click', (e) => {
        let btn = e.srcElement;
        btn.style.display = "none";
        pauseIcon[0].style.display = "block";
        isPlaying = true;
        playAndPause(isPlaying);

    });

    addEventListenerToElement(pauseIcon, 'click', (e) => {
        let btn = e.srcElement;
        btn.style.display = "none";
        playIcon[0].style.display = "block";
        isPlaying = false;
        playAndPause(isPlaying);
    });

    addEventListenerToElement(themeBtn, 'click', (e) => {
        let btn = e.srcElement;
        let currentPath = backgroundVideo.attributes.src.value;
        function isCurrent(currentPath, path) {
            // Checks if current theme is the same the theme client clicked on
            return currentPath === path;
        }

        function getMediaPath(type, fileName) {
            // returns a path to the video file location. Expects an mp4 video format.
            if (type === 'video') return `/static/video/${fileName}.mp4`;
            if (type === 'audio') return `/static/audio/${fileName}.mp3`;
        }

        switch (btn.innerHTML) {
        
            case 'Waves':
                if (isCurrent(currentPath, getMediaPath('video', 'waves'))) return;
                reset();
                videoSource.src = getMediaPath('video', 'waves');
                audioSource.src = getMediaPath('audio', 'waves');
                break;
            case 'Rain':
                if (isCurrent(currentPath, getMediaPath('video', 'rain'))) return;
                reset();
                videoSource.src = getMediaPath('video', 'rain');
                audioSource.src = getMediaPath('audio', 'rain');
                break;

            case 'Forest':
                if (isCurrent(currentPath, getMediaPath('video', 'forest'))) return;
                reset();
                videoSource.src = getMediaPath('video', 'forest');
                audioSource.src = getMediaPath('audio', 'forest');
                break;
        }




    });

}());