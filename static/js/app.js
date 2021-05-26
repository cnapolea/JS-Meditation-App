// jshint esversion:10

(function () {

    // Buttons associeted with time selection
    let customTime;

    let timeBtn = document.getElementsByClassName('time-btn'),
        themeBtn = document.getElementsByClassName('theme-btn'),
        videoBtn = document.getElementsByClassName('video-btn'),
        customTimerBtn = document.querySelector('.custom-timer'),
        playIcon = document.querySelector('.play'),
        pauseIcon = document.querySelector('.pause');
    
    let backgroundVideo = document.querySelector('#bg-video');
    let audio = document.querySelector('#audio');

    console.log(backgroundVideo);

    function addEventListenerToElement(setUpObject, fn) {
        /* Adds event listener to html element or elements. It takes an object and (elementType [1 for single elements and 2 for an  array], event type [e.g.: 'click  ']) a callback function*/

        if (setUpObject.elementType === 2) {
            console.log(setUpObject.htmlElement);
            let newArray = [...setUpObject.htmlElement];

            newArray.forEach(button => {
                button.addEventListener(setUpObject.eventType, fn);
            });
        } else if (setUpObject.elementType === 1) {
            setUpObject.htmlElement.addEventListener(setUpObject.eventType, fn);
        }

    }


    addEventListenerToElement({
        htmlElement: customTimerBtn,
        elementType: 1,
        eventType: 'click'
    }, () => {
        customTime = window.prompt("Enter your custom time. Example: 03:00.", "05:00");
        console.log(customTime);
    });

    addEventListenerToElement({
        htmlElement: playIcon,
        elementType: 1,
        eventType: 'click'
    }, () => {
        playIcon.style.display = "none";
        pauseIcon.style.display = "block";
        backgroundVideo.play();
        backgroundVideo.loop = true;
        audio.play();
        audio.loop = true;

    });

    addEventListenerToElement({
        htmlElement: pauseIcon,
        elementType: 1,
        eventType: 'click'
    }, () => {
        pauseIcon.style.display = "none";
        playIcon.style.display = "block";
        backgroundVideo.pause();
        audio.pause();
    });



}());