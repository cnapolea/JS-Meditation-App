!function(){let e,t=2,n=0,l=document.getElementsByClassName("time-btn"),s=document.getElementsByClassName("theme-btn"),c=document.getElementsByClassName("custom-timer"),o=document.getElementsByClassName("play"),i=document.getElementsByClassName("pause"),u=document.getElementsByClassName("reset"),r=document.getElementById("bg-video"),a=document.querySelector(".video-source"),m=document.getElementById("audio"),d=document.querySelector(".audio-source"),y=document.querySelector(".timer"),p=document.querySelector(".display-minutes"),b=document.querySelector(".display-seconds");function E(){clearInterval(e)}function f(){E(),e=setInterval(()=>{0===n&&(n=60,t>0&&t--),n--,0===Number(t)&&0===Number(n)&&N(),p.innerHTML=t<10?`0${t}`:`${t}`,b.innerHTML=n<10?`0${n}`:`${n}`},1e3)}function v(e,t,n){if(null==e||arguments.length<1)return;[...e].forEach(e=>{e.addEventListener(t,n)})}function N(){E(),r.load(),m.load(),t=0,n=0,o[0].style.display="block",y.style.display="none",p.innerHTML="00",b.innerHTML="00"}v(l,"click",e=>{N();let l=e.srcElement.innerHTML.split(":");t=Number(l[0]),n=Number(l[1])}),v(c,"click",()=>{let e=window.prompt("Enter your custom time. Example: 03:00.","05:00").split(":");t=Number(e[0]),n=Number(e[1])}),v(o,"click",e=>{!function(e){e.srcElement.style.display="none",y.style.display="block",r.play(),m.play()}(e),f()}),v(i,"click",e=>{!function(e){E(),o[0].style.display="block",y.style.display="none",r.pause(),m.pause()}()}),v(s,"click",e=>{let t=e.srcElement,n=r.attributes.src.value;function l(e,t){return"video"===e?`/static/video/${t}.mp4`:"audio"===e?`/static/audio/${t}.mp3`:void 0}function s(e){(function(e,t){return e===t})(n,l("video",e))||(N(),a.src=l("video",e),d.src=l("audio",e))}switch(t.innerHTML){case"Waves":s("waves");break;case"Rain":s("rain");break;case"Forest":s("forest")}}),v(u,"click",e=>{N()})}();

// // jshint esversion:10

// (function () {

//     // Buttons associeted with time selection

//     // This variable holds the setIntervalId that will be used to stop the loop;
//     let timeUpdater;

//     // Variables will hold values that will be updated
//     let targetMinutes = 2,
//         targetSeconds = 0;

//     // Getting the buttons from the DOM
//     let timeBtn = document.getElementsByClassName('time-btn'),
//         themeBtn = document.getElementsByClassName('theme-btn'),
//         customTimerBtn = document.getElementsByClassName('custom-timer'),
//         playIcon = document.getElementsByClassName('play'),
//         pauseIcon = document.getElementsByClassName('pause'),
//         resetBtn = document.getElementsByClassName('reset');

//     // Video & audio objects 
//     let backgroundVideo = document.getElementById('bg-video'),
//         videoSource = document.querySelector('.video-source'),
//         audio = document.getElementById('audio'),
//         audioSource = document.querySelector('.audio-source');

//     let timer = document.querySelector('.timer'),
//         displayMinutes = document.querySelector('.display-minutes'),
//         displaySeconds = document.querySelector('.display-seconds');


//     function timerStart() {

//         // callback function used in the startCounter function. Logic to update minutes and seconds every second.

//         if (targetSeconds === 0) {
//             targetSeconds = 60;
//             if (targetMinutes > 0) targetMinutes--;
//         }

//         targetSeconds--;
        
//         // We are checking if the timer is up to stop the countdown
//         if(Number(targetMinutes) === 0 && Number(targetSeconds) === 0 ) {
//             reset();
//         }

        
//         if(targetMinutes < 10) {
            
//             displayMinutes.innerHTML=`0${targetMinutes}`;
            
//         } else {displayMinutes.innerHTML=`${targetMinutes}`;}
        
//         if (targetSeconds < 10) {
//             displaySeconds.innerHTML=`0${targetSeconds}`;
//         } else { displaySeconds.innerHTML=`${targetSeconds}`; }
//     }
    
//     function pause() {
//         clearInterval(timeUpdater);
//     }
    
//     function startCounter() {
//         pause();
//         timeUpdater = setInterval(() => {
//             timerStart();
//         }, 1000);
        
        
//     }
    
//     function addEventListenerToElement(elements, eventType, fn) {
//         /* Adds event listener to html element or elements. It takes an object and event type [e.g.: 'click  ']) a callback function*/

//         if (elements == null || arguments.length < 1) return;
//         let newArray = [...elements];
//         newArray.forEach(element => {
//             element.addEventListener(eventType, fn);
//         });
//     }

//     function playMedia(event) {
//         let btn = event.srcElement;
//         btn.style.display = "none";
//         timer.style.display = "block";
//         backgroundVideo.play();
//         audio.play();
//     }

//     function pauseMedia(event) {
//         pause();
//         playIcon[0].style.display = "block";
//         timer.style.display = "none";
//         backgroundVideo.pause();
//         audio.pause();
//     }

//     function reset() {
//         pause();
    
//         backgroundVideo.load();
//         audio.load();

//         targetMinutes = 0;
//         targetSeconds = 0;

//         playIcon[0].style.display = "block";
//         timer.style.display = "none";
    
//         displayMinutes.innerHTML='00';
//         displaySeconds.innerHTML='00';
//     }

//     addEventListenerToElement(timeBtn, 'click', (e) => {
//         reset();
//         let targetTime =e.srcElement.innerHTML.split(':');
//         targetMinutes = Number(targetTime[0]);
//         targetSeconds = Number(targetTime[1]);
//     });

//     addEventListenerToElement(customTimerBtn, 'click', () => {
//         let targetTime = window.prompt("Enter your custom time. Example: 03:00.", "05:00").split(":");
//         targetMinutes = Number(targetTime[0]);
//         targetSeconds = Number(targetTime[1]);

//     });

//     addEventListenerToElement(playIcon, 'click', (e) => {
//         playMedia(e);
//         startCounter();
//     });

//     addEventListenerToElement(pauseIcon, 'click', (e) => {
//         pauseMedia();
//     });

//     addEventListenerToElement(themeBtn, 'click', (e) => {
//         let btn = e.srcElement;
//         let currentPath = backgroundVideo.attributes.src.value;

//         function isCurrent(currentPath, path) {
//             // Checks if current theme is the same the theme client clicked on
//             return currentPath === path;
//         }

//         function getMediaPath(type, fileName) {
//             // returns a path to the video file location. Expects an mp4 video format.
//             if (type === 'video') return `/static/video/${fileName}.mp4`;
//             if (type === 'audio') return `/static/audio/${fileName}.mp3`;
//         }

//         function setTheme(theme) {
//             if (isCurrent(currentPath, getMediaPath('video', theme))) return;
//             reset();
//             videoSource.src = getMediaPath('video', theme);
//             audioSource.src = getMediaPath('audio', theme);
//         }

//         switch (btn.innerHTML) {
//             case 'Waves':
//                 setTheme('waves');
//                 break;
//             case 'Rain':
//                 setTheme('rain');
//                 break;
//             case 'Forest':
//                 setTheme('forest');
//                 break;
//         }
//     });

//     addEventListenerToElement(resetBtn, 'click', (e) => {
//         reset();
//     });

// }());