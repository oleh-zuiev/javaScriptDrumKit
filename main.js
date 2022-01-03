'use strict'
window.addEventListener('keydown', function (e) {
    // console.log(e);
    // console.log(e.key);
    // console.log(typeof(e.code));
    // console.log(e.code);
    const audio = document.querySelector(`audio[data-key='${e.code}']`);
    if (!audio) return;
    // console.log(audio);
    audio.currentTime = 0;
    audio.play();
});
window.addEventListener('click', function (e) {
    console.dir(e.target);
    // console.log(e.key);
    // console.log(typeof(e.code));
    // console.log(e.code);
    // const audio = document.querySelector(`audio[data-key='${e.code}']`);
    // if (!audio) return;
    // // console.log(audio);
    // audio.currentTime = 0;
    // audio.play();
});
