console.log("Welcome to Spotify");
//  Initalize the variables
let songIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar')
let gif=document.getElementById('gif')
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName: "Salam-e-Ishq", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "kaise-muje", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName: "baarish", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName: "sawan-aaya-hai", filePath: "songs/4.mp3", coverPath:"covers/2.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/2.mp3", coverPath:"covers/2.jpg"},
]

songItems.forEach((element,i)=>{
    //  console.log(element,i);
     element.getElementsByTagName("img")[0].src=songs[i].coverPath;
     element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
// audioElement.play();

//  Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
 
//    update Seekbar
      progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
     
      myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play'); 
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        masterSongName.innerText=songs[songIndex].songName;
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

})
