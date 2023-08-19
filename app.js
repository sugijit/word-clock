document.addEventListener("DOMContentLoaded", function () {
  updateTime();
  setInterval(updateTime, 1000);

  function updateTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const hour1 = Math.floor(hours / 10);
    const hour2 = hours % 10;
    const min1 = Math.floor(minutes / 10);
    const min2 = minutes % 10;

    //tsag
    switch (hour1) {
      case 1:
        document.getElementById("9").classList.remove("on");
        document.getElementById("20").classList.remove("on");
        document.getElementById("10").classList.add("on");
        break;
      case 2:
        document.getElementById("9").classList.remove("on");
        document.getElementById("10").classList.remove("on");
        document.getElementById("20").classList.add("on");
        break;
    }
    switch (hour2) {
      case 1:
        document.getElementById("9").classList.remove("on");
        if (hour1 === 0) {
          document.getElementById("1").classList.add("on");
        } else {
          document.getElementById("negen").classList.add("on");
        }
        break;
      case 2:
        document.getElementById("1").classList.remove("on");
        document.getElementById("negen").classList.remove("on");
        document.getElementById("2").classList.add("on");
        break;
      case 3:
        document.getElementById("2").classList.remove("on");
        document.getElementById("3").classList.add("on");
        break;
      case 4:
        document.getElementById("3").classList.remove("on");
        document.getElementById("4").classList.add("on");
        break;
      case 5:
        document.getElementById("4").classList.remove("on");
        document.getElementById("5").classList.add("on");
        break;
      case 6:
        document.getElementById("5").classList.remove("on");
        document.getElementById("6").classList.add("on");
        break;
      case 7:
        document.getElementById("6").classList.remove("on");
        document.getElementById("7").classList.add("on");
        break;
      case 8:
        document.getElementById("7").classList.remove("on");
        document.getElementById("8").classList.add("on");
        break;
      case 9:
        document.getElementById("8").classList.remove("on");
        document.getElementById("9").classList.add("on");
        break;
    }
    if (hour1 === 0 && hour2 === 0) {
      document.getElementById("horin").classList.remove("on");
      document.getElementById("gurvan").classList.remove("on");
      document.getElementById("9").classList.remove("on");
      document.getElementById("0").classList.add("on");
    } else {
      document.getElementById("0").classList.remove("on");
    }

    //minut
    switch (min1) {
      case 1:
        document.getElementById("tavin").classList.remove("on");
        document.getElementById("yusun").classList.remove("on");
        document.getElementById("arvan").classList.add("on");
        break;
      case 2:
        document.getElementById("arvan").classList.remove("on");
        document.getElementById("yusun").classList.remove("on");
        document.getElementById("horin").classList.add("on");
        break;
      case 3:
        document.getElementById("horin").classList.remove("on");
        document.getElementById("yusun").classList.remove("on");
        document.getElementById("guchin").classList.add("on");
        break;
      case 4:
        document.getElementById("guchin").classList.remove("on");
        document.getElementById("yusun").classList.remove("on");
        document.getElementById("duchin").classList.add("on");
        break;
      case 5:
        document.getElementById("duchin").classList.remove("on");
        document.getElementById("yusun").classList.remove("on");
        document.getElementById("tavin").classList.add("on");
        break;
    }
    switch (min2) {
      case 1:
        document.getElementById("yusun").classList.remove("on");
        if (min1 === 0) {
          document.getElementById("neg").classList.add("on");
        } else {
          document.getElementById("negenn").classList.add("on");
        }
        break;
      case 2:
        document.getElementById("negenn").classList.remove("on");
        document.getElementById("neg").classList.remove("on");
        document.getElementById("hoyor").classList.add("on");
        break;
      case 3:
        document.getElementById("hoyor").classList.remove("on");
        document.getElementById("gurvan").classList.add("on");
        break;
      case 4:
        document.getElementById("gurvan").classList.remove("on");
        document.getElementById("durvun").classList.add("on");
        break;
      case 5:
        document.getElementById("durvun").classList.remove("on");
        document.getElementById("tavan").classList.add("on");
        break;
      case 6:
        document.getElementById("tavan").classList.remove("on");
        document.getElementById("zurgaan").classList.add("on");
        break;
      case 7:
        document.getElementById("zurgaan").classList.remove("on");
        document.getElementById("doloon").classList.add("on");
        break;
      case 8:
        document.getElementById("doloon").classList.remove("on");
        document.getElementById("naiman").classList.add("on");
        break;
      case 9:
        document.getElementById("naiman").classList.remove("on");
        document.getElementById("yusun").classList.add("on");
        break;
    }
    if (min1 === 0 && min2 === 0) {
      document.getElementById("tavin").classList.remove("on");
      document.getElementById("yusun").classList.remove("on");
      document.getElementById("teg").classList.add("on");
    } else {
      document.getElementById("teg").classList.remove("on");
    }
  }
});

const soundSpans1 = document.querySelectorAll(".sheep1");
const soundSpans2 = document.querySelectorAll(".sheep2");
const audioElement1 = document.getElementById("audioElement1");
const audioElement2 = document.getElementById("audioElement2");

soundSpans1.forEach((span) => {
  span.addEventListener("click", () => {
    audioElement1.play();
  });
});

soundSpans2.forEach((span) => {
  span.addEventListener("click", () => {
    audioElement2.play();
  });
});

// test
const songs = [
  { title: "TATAR ft Michelle - Jargaltai khos", source: "jargaltai-khos.mp3" },
  { title: "Jagaa(TATAR) - Zugeer", source: "zugeer.mp3" },
  {
    title: "Ulaanbaatariin Nulims - TATAR ft Young Mo'G, Ginjin",
    source: "tears-of-ub.mp3",
  },
];

const audioPlayer = document.getElementById("audio-player");
const songList = document.getElementById("song-list");
const playPauseButton = document.getElementById("play-pause-button");
const togglePlaylistButton = document.getElementById("toggle-playlist");
const playlistContainer = document.getElementById("playlist-container");

let currentSongIndex = -1;

function togglePlaylistVisibility() {
  playlistContainer.classList.toggle("hidden");
}

togglePlaylistButton.addEventListener("click", togglePlaylistVisibility);

function togglePlayPause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseButton.textContent = "Pause";
  } else {
    audioPlayer.pause();
    playPauseButton.textContent = "Play";
  }
}
playPauseButton.addEventListener("click", togglePlayPause);

function loadSong(index) {
  currentSongIndex = index;
  audioPlayer.src = songs[index].source;
  audioPlayer.play();
  playPauseButton.textContent = "Pause";
}

function populatePlaylist() {
  for (let i = 0; i < songs.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = songs[i].title;
    listItem.addEventListener("click", () => loadSong(i));
    songList.appendChild(listItem);
  }
}

populatePlaylist();
