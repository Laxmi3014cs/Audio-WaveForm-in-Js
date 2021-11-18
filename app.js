var audioTrack = WaveSurfer.create({
    container: ".audio",
    waveColor: "#eee",
    progressColor: "red",
    barWidth: 2,
  });

  audioTrack.load("../audio/track1.mp3");

const playBtn = document.querySelector(".play");
const stopBtn = document.querySelector(".stop");
const muteBtn = document.querySelector(".mute");
const volumeSlider = document.querySelector(".volumeslider");
const forwardbtn = document.querySelector(".forward");

playBtn.addEventListener("click", () => {
    audioTrack.playPause();
  
    if (audioTrack.isPlaying()) {
      playBtn.classList.add("playing");
    } else {
      playBtn.classList.remove("playing");
    }
  });

stopBtn.addEventListener("click", () => {
  audioTrack.stop();
  playBtn.classList.remove("playing");
});

volumeSlider.addEventListener("mouseup", () => {
    changeVolume(volumeSlider.value);
  });
  
  const changeVolume = (volume) => {
    if (volume == 0) {
      muteBtn.classList.add("muted");
    } else {
      muteBtn.classList.remove("muted");
    }
  
    audioTrack.setVolume(volume);
  };


  muteBtn.addEventListener("click", () => {
    if (muteBtn.classList.contains("muted")) {
      muteBtn.classList.remove("muted");
      audioTrack.setVolume(1);
      volumeSlider.value = 1;
    } else {
      audioTrack.setVolume(0);
      muteBtn.classList.add("muted");
      volumeSlider.value = 0;
    }
  });

  forwardbtn.addEventListener("click",()=>{
    audioTrack.skipForward(10);
  })