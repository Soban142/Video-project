var playBtn = document.querySelector('.playBtn')
var pauseBtn = document.querySelector('.pauseBtn')
var replayBtn = document.querySelector('.replayBtn')
var video = document.querySelector('.video')

playBtn.addEventListener('click', function () { 
    video.play()
    playBtn.classList.add('active')
    pauseBtn.classList.remove('active')
    
})

pauseBtn.addEventListener('click', function () {
    video.pause()
    pauseBtn.classList.add('active')
    playBtn.classList.remove('active')
})

replayBtn.addEventListener('click', function () {
    location.reload()
    // video.load();
})
