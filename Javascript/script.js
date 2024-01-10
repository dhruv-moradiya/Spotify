const seekbar = document.getElementById("seekbar");
const rightBottom_3 = document.getElementById("rightBottom_3");
const boxKAbox = document.getElementById("boxKAbox");
const btnArtist = document.getElementById("btnArtist");
const molu = document.getElementById("molu");
const playBarSongName = document.getElementById("playBarSongName");
const playSong_sArtist = document.getElementById("playSong-sArtist");
const playBarSongTime = document.getElementById("playBarSongTime");
const imagePlayBar = document.getElementById("imagePayBar");

let currentSong = new Audio();

function secondsToMinutesAndSeconds(seconds) {
  seconds = Math.max(0, seconds);

  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = Math.round(seconds % 60);
  let formattedMinutes = String(minutes).padStart(2, "0");
  let formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return formattedMinutes + ":" + formattedSeconds;
}

function time() {
  let currentTime = new Date();

  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  if (hours >= "05" && hours <= "11") {
    document.querySelector(".messageTime").innerHTML = "Good morning";
  } else if (hours >= "12" && hours <= "17") {
    document.querySelector(".messageTime").innerHTML = "Good afternoon";
  } else if (hours >= "18" && hours <= "22") {
    document.querySelector(".messageTime").innerHTML = "Good evening";
  } else {
    document.querySelector(".messageTime").innerHTML = "Good night";
  }

  let formattedTime = hours + ":" + minutes + ":" + seconds;
  // document.querySelector(".time").innerText = formattedTime;
}
time();
// setInterval(time, 1000);

/**
 * This is are all seekBar's functions
 */
// seekbar.addEventListener("mousemove", (e) => {
// Calculate the percentage of the mouse position relative to the seek bar width
//   let percentage = (e.offsetX / seekbar.getBoundingClientRect().width) * 100;
//   molu.style.width = percentage + "%";
// });

// seekbar.addEventListener("mouseleave", () => {
//   molu.style.width = "0%";
// });

seekbar.addEventListener("click", (e) => {
  let percentage = (e.offsetX / seekbar.getBoundingClientRect().width) * 100;
  document.querySelector(".chhotu").style.left = percentage + "%";

  currentSong.currentTime = (currentSong.duration * percentage) / 100;
});

// let arr = [];

// for (const song of allSong) {

//   if (song.artist === "RIIZE") {
//     arr.push(song);
//   }
// }

/**
 * This function is for creating playList in right side
 */
function generateBox() {
  boxKAbox.innerHTML = playList
    .map((info) => {
      return `
    <div class="box">
      <div class="playBtnBox" id="${info.id}"><i class="ri-play-fill"></i></div>
      <div class="image">
        <img src="${info.imagePlayList}" alt="">
        <h3>${info.name}</h3>
        <img src=${info.wave} alt="12" class="wave">
      </div>
      <div class="description">
        <h3>${info.name}</h3>
        <h4>${info.artist}</h4>
      </div>
    </div>
    `;
    })
    .join("");
}
generateBox();

/**
 * This function is for creating tracks in left side
 */
function generateTrackList() {
  document.querySelectorAll(".playBtnBox").forEach((playBtn, indexMain) => {
    let info = playList[indexMain];

    playBtn.addEventListener("click", () => {
      // playTrack(indexMain);
      rightBottom_3.innerHTML = "";
      for (const iterator in info.tracks) {
        rightBottom_3.innerHTML += `
        <div class="songsInfo">
          <div class="Songimage ${info.tracks[iterator].id}">
            <img src="${info.tracks[iterator].image}" alt="12">
          </div>
          <div class="songDetial">
            <p>${info.tracks[iterator].song_name}</p>
            <p>${info.tracks[iterator].artist}</p>
          </div>
          <div class="trackLike">
            <i class="ri-heart-3-line"></i>         
          </div>
          <div class="songPlayBtn" id="${info.tracks[iterator].id}" onclick="TrackListAndPlay(${info.tracks[iterator].id}, ${info.id})">
            <i class="ri-play-fill"></i>
          </div>
        </div>
      `;
      }
    });
  });
}

generateTrackList();

/**
 * This is play the track in sequence
 */
function playTrack(indexMain) {
  const tracks = playList[indexMain].tracks;

  let currentTrackIndex = 0;
  function playNextTrack() {
    const trackDetails = tracks[currentTrackIndex];
    displayInfoOnSeekBar(tracks[currentTrackIndex]);
    console.log("Now playing:", trackDetails);

    currentSong.src = trackDetails.track;

    currentSong.addEventListener("canplay", () => {
      console.log("Audio is ready to play");
      currentSong.play();
    });

    currentSong.addEventListener("ended", () => {
      console.log("Song has completed");
      currentTrackIndex = (currentTrackIndex + 1) % tracks.length;

      playNextTrack();
    });
  }
  playNextTrack();
}

/**
 * Click on the left side's play btn it is play the song and doing so many other things
 */
// function TrackListAndPlay(track, playListID) {
//   "use strict";
//   console.log("Current song's btn: ", track);
//   const trackID = track.id;
//   const kayPlaylist = playListID.id;
//   const trackIDBtn = document.getElementById(trackID);
//   const playbtnSeekBar = document.querySelector(".playbtnSeekBar");

//   // console.log("kayPlaylist: ", kayPlaylist);
//   // console.log("trackID: ", trackID);

//   playList.forEach((playlist) => {
//     if (playlist.id === kayPlaylist) {
//       playlist.tracks.forEach((songs, index) => {
//         if (songs.id === trackID) {
//           displayInfoOnSeekBar(songs);
//           currentSong.src = songs.track;
//           let previousSource = currentSong.src;

//           // console.log("currentSong.src: ", currentSong.src);

//           currentSong.addEventListener("canplaythrough", function () {
//             if (currentSong.paused) {
//               playSong();
//             } else {
//               pauseSong();
//             }

//             function hasDataChanged() {
//               return currentSong.src !== previousSource;
//             }

//             let pauseBtn = document.getElementById("say");
//             if (pauseBtn) {
//               let previousePause = pauseBtn.parentNode;

//               if (hasDataChanged()) {
//                 currentSong.pause();
//                 previousePause.innerHTML = `<i class="ri-play-fill"></i>`;
//               }
//             }
//           });
//           /*  Check if the audio is already loaded 👇
//             👉 common pattern used to handle scenarios where you want to make sure that your event listener for canplaythrough is executed even if the browser hasn't automatically fired the event.
//           */
//           if (currentSong.readyState >= 3) {
//             currentSong.dispatchEvent(new Event("canplaythrough"));
//           }
//         }
//       });
//     }
//   });

//   function playSong() {
//     currentSong.play();
//     trackIDBtn.innerHTML = `<i class="ri-pause-line" id="say"></i>`;
//     playbtnSeekBar.innerHTML = `<i class="ri-pause-line"></i>`;
//     updatePlayPauseButtons()
//   }

//   function pauseSong() {
//     currentSong.pause();
//     trackIDBtn.innerHTML = `<i class="ri-play-fill"></i>`;
//     playbtnSeekBar.innerHTML = `<i class="ri-play-fill"></i>`;
//     updatePlayPauseButtons()
//   }

//   function updatePlayPauseButtons() {
//     playbtnSeekBar.addEventListener("click", () => {
//       if (currentSong.paused) {
//         currentSong.play();
//         playbtnSeekBar.innerHTML = `<i class="ri-pause-line"></i>`;
//         trackIDBtn.innerHTML = `<i class="ri-pause-line" id="say"></i>`;
//       } else {
//         currentSong.pause();
//         playbtnSeekBar.innerHTML = `<i class="ri-play-fill"></i>`;
//         trackIDBtn.innerHTML = `<i class="ri-play-fill"></i>`;
//       }
//     });
//   }
// }

function TrackListAndPlay(track, playListID) {
  let activePlayList = playListID.id;
  let whichSongWantToPlay = track.id;

  let songButtonLeftSide = document.getElementById(whichSongWantToPlay);
  let songButtonSeekBar = document.querySelector(".playbtnSeekBar");

  playList.forEach((playlist, index) => {
    playlist.tracks.forEach((singleTrack, indexSingalTrack) => {
      if (
        activePlayList === playlist.id &&
        singleTrack.id === whichSongWantToPlay
      ) {
        if(currentSong.play){
          currentSong.pause()
          currentSong.src = ``
        }

        currentSong.src = singleTrack.track;

        currentSong.load();
        currentSong.addEventListener("canplaythrough", function () {
          if (currentSong.paused) {
            playSong();
          } else {
            pauseSong();
          }
        });

        displayInfoOnSeekBar(singleTrack);
      }
    });
  });

  function playSong() {
    songButtonLeftSide.innerHTML = `<i class="ri-pause-line"></i>`;
    songButtonSeekBar.innerHTML = `<i class="ri-pause-line"></i>`;
    currentSong.play();
    seekBarToggle();
  }

  function pauseSong() {
    songButtonLeftSide.innerHTML = `<i class="ri-play-fill"></i>`;
    songButtonSeekBar.innerHTML = `<i class="ri-play-fill"></i>`;
    currentSong.pause();
    seekBarToggle();
  }

  function seekBarToggle() {
    songButtonSeekBar.removeEventListener("click", seekBarClickHandler);
    songButtonSeekBar.addEventListener("click", seekBarClickHandler);
  }

  function seekBarClickHandler() {
    if (currentSong.paused) {
      songButtonLeftSide.innerHTML = `<i class="ri-pause-line"></i>`;
      songButtonSeekBar.innerHTML = `<i class="ri-pause-line"></i>`;
      currentSong.play();
      console.log("sPlay");
    } else {
      songButtonLeftSide.innerHTML = `<i class="ri-play-fill"></i>`;
      songButtonSeekBar.innerHTML = `<i class="ri-play-fill"></i>`;
      currentSong.pause();
      console.log("sPause");
    }
  }
}

function displayInfoOnSeekBar(songs) {
  playBarSongName.innerHTML = `${songs.song_name}`;
  playSong_sArtist.innerHTML = ` ${songs.artist}`;
  imagePlayBar.childNodes[1].src = `${songs.image}`;

  currentSong.addEventListener("timeupdate", () => {
    if (!isNaN(currentSong.duration) && isFinite(currentSong.duration)) {
      playBarSongTime.innerHTML = `${secondsToMinutesAndSeconds(
        currentSong.currentTime
      )}/${secondsToMinutesAndSeconds(currentSong.duration)}`;

      document.querySelector(".chhotu").style.left =
        (currentSong.currentTime / currentSong.duration) * 100 + "%";

      molu.style.width =
        (currentSong.currentTime / currentSong.duration) * 100 + "%";
    }
  });
}

/**
 * This function is for creating ArtistList in left side
 */
function createArtistList() {
  rightBottom_3.innerHTML = "";
  rightBottom_3.innerHTML += artistList
    .map((info) => {
      return `
      <div class="artistinfo" id="${info.id}">
        <div class="image">
          <img src="${info.image}" alt="">
        </div>
        <div class="artistNameAndWho">
          <p class="nameOfArtist">${info.name}</p>
          <p class="who">Artist</p>
        </div>
      </div>
      `;
    })
    .join("");
}
createArtistList();

function mobile() {
  const mobile = document.getElementById("mobile");
  const left = document.getElementById("left");
  const close = document.getElementById("close");

  mobile.addEventListener("click", () => {
    left.style.left = "0%";
  });
  close.addEventListener("click", () => {
    left.style.left = "-200%";
  });
}
mobile();
