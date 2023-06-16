console.log("Wlecome To Spotfy");
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let MasterPlay = document.getElementById('mainpaly');
let progras = document.getElementById('Bar')
let gift = document.getElementById('gift')


MasterPlay.addEventListener('click',()=>
{
    if(audioElement.paused || audioElement.currentTime<=0){
audioElement.play();
MasterPlay.classList.remove('fa-play-circle');
MasterPlay.classList.add('fa-pause-circle');
gift.style.opacity = 1;
}
else
{
audioElement.pause();
MasterPlay.classList.remove('fa-pause-circle');
MasterPlay.classList.add('fa-play-circle');
gift.style.opacity = 0;
}
})
audioElement.addEventListener('timeupdate',()=>
{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    console.log(progress)
    Bar.value=progress;
})
Bar.addEventListener('change',()=>
{
    audioElement.currentTime=progras.value*audioElement.duration/100;
})