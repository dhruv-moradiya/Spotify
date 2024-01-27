const seekbar = document.getElementById("seekbar");
const rightBottom_3 = document.getElementById("rightBottom_3");
const boxKAbox = document.getElementById("boxKAbox");
const btnArtist = document.getElementById("btnArtist");
const molu = document.getElementById("molu");
const playBarSongName = document.getElementById("playBarSongName");
const playSong_sArtist = document.getElementById("playSong-sArtist");
const playBarSongTime = document.getElementById("playBarSongTime");
const imagePlayBar = document.getElementById("imagePayBar");
const songLikeSeekbar = document.querySelector(".songLikeSeekbar");
const playbtnSeekBar = document.querySelector(".playbtnSeekBar");

let currentSong = new Audio();

let songLiked = JSON.parse(localStorage.getItem("songLike")) || [];

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

function generateBox() {
  boxKAbox.innerHTML = playList
    .map((info) => {
      return `
    <div class="box">
      <div class="playBtnBox" id="${info.id}" onclick="generateTrackList()"><i class="ri-play-fill"></i></div>
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

function generateTrackList() {
  document.querySelectorAll(".playBtnBox").forEach((playBtn, indexMain) => {
    let info = playList[indexMain];

    playBtn.addEventListener("click", () => {
      // playTrack(indexMain);
      rightBottom_3.innerHTML = "";
      for (const iterator in info.tracks) {
        const songName = info.tracks[iterator].song_name;

        rightBottom_3.innerHTML += `
          <div class="songsInfo">
            <div class="Songimage">
              <img src="${info.tracks[iterator].image}" alt="12">
            </div>
            <div class="songDetial">
              <p class="songName">${songName}</p>
              <p class="songArtists">${info.tracks[iterator].artist}</p>
            </div>
            <div class="trackLike ${info.tracks[iterator].id
          }" onclick="likedSongs(this.classList)">
              ${songLiked.find((x) => x.id === info.tracks[iterator].id)
            ? `<i class="ri-heart-fill" style="color: green;"></i>`
            : `<i class="ri-heart-3-line"></i>`
          }          
            </div>
            <div class="songPlayBtn" id="${info.tracks[iterator].id
          }" onclick="TrackListAndPlay(${info.tracks[iterator].id}, ${info.id
          })">
          
              <i class="ri-play-fill"></i>
            </div>
          </div> 
        `;
      }
    });
  });
}

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

function gaberateTracksOfArtist() { }

function TrackListAndPlay(trackBtn, playListID) {
  "use strict";
  console.log("Current song's btn: ", trackBtn);
  const trackID = trackBtn.id;
  const kayPlaylist = playListID.id;
  const trackIDBtn = document.getElementById(trackID);

  playList.forEach((playlist) => {
    if (playlist.id === kayPlaylist) {
      playlist.tracks.forEach((song, index) => {
        if (song.id === trackID) {
          displayInfoOnSeekBar(song);
          currentSong.src = song.track;
          let previousSource = currentSong.src;
          let previousSongBtn = song.id;

          currentSong.addEventListener("canplaythrough", function () {
            if (currentSong.paused) {
              playSong();
            } else {
              pauseSong();
            }

            function hasDataChanged() {
              return currentSong.src !== previousSource;
            }

            if (previousSongBtn) {
              if (hasDataChanged()) {
                currentSong.pause();
                // console.log("previousSongBtn:", previousSongBtn);
                document.getElementById(
                  previousSongBtn
                ).innerHTML = `<i class="ri-play-fill"></i>`;
              }
            }
          });

          currentSong.addEventListener("ended", function () {
            trackIDBtn.innerHTML = `<i class="ri-play-fill"></i>`;
            playbtnSeekBar.innerHTML = `<i class="ri-play-fill"></i>`;
            currentSong.pause();
          });

          if (currentSong.readyState >= 3) {
            currentSong.dispatchEvent(new Event("canplaythrough"));
          }
        }
      });
    }
  });

  function playSong() {
    currentSong.play();
    trackIDBtn.innerHTML = `<i class="ri-pause-line"></i>`;
    playbtnSeekBar.innerHTML = `<i class="ri-pause-line"></i>`;
    tooltip("playbtnSeekBar", "Pause Song", "play");
    updateLyrics()
  }

  function pauseSong() {
    currentSong.pause();
    trackIDBtn.innerHTML = `<i class="ri-play-fill"></i>`;
    playbtnSeekBar.innerHTML = `<i class="ri-play-fill"></i>`;
    tooltip("playbtnSeekBar", "Play Song", "play");
  }
}

function playNext_PreviousSong(direction) {
  let previousSource = currentSong.src;
  let currentSongSource = currentSong.src
    .split("5500")[1]
    .replace(/20%|%20|20|%/g, " ");

  playList.forEach((item, playListIndex) => {
    item.tracks.forEach((song, songIndex) => {
      const adjacentTrackIndex =
        direction === "next"
          ? (songIndex + 1) % item.tracks.length
          : (songIndex - 1 + item.tracks.length) % item.tracks.length;

      if (song.track === currentSongSource) {
        let previousSongId = song.id;

        currentSong.pause();

        currentSong.src = item.tracks[adjacentTrackIndex].track;

        displayInfoOnSeekBar(item.tracks[adjacentTrackIndex]);

        console.log("currentSong: ", currentSong.src);

        let hasDataChanged = currentSong.src !== previousSource;

        if (previousSongId) {
          if (hasDataChanged) {
            currentSong.pause();
            console.log("previousSongBtn:", previousSongId);
            document.getElementById(
              previousSongId
            ).innerHTML = `<i class="ri-play-fill"></i>`;
          }
        }

        currentSong.addEventListener("canplaythrough", () => {
          currentSong.play();
        });

        let adjacentSongBtn;
        for (const song of item.tracks) {
          if (song.track === item.tracks[adjacentTrackIndex].track) {
            adjacentSongBtn = document.getElementById(song.id);
            adjacentSongBtn.innerHTML = `<i class="ri-pause-line"></i>`;
            playbtnSeekBar.innerHTML = `<i class="ri-pause-line"></i>`;
          }
        }
      }
    });
  });
}

function clickSeekBarBtn(className) {
  if (currentSong.pause) {
    console.log(currentSong);
  }
  let currentSongSource = currentSong.src
    .split("5500")[1]
    .replace(/20%|%20|20|%/g, " ");
  console.log("className: ", className);

  playList.forEach((playlist, index) => {
    playlist.tracks.forEach((song, index) => {
      if (song.track === currentSongSource) {
        let currentSongLeftBtn = document.getElementById(song.id);
        if (currentSong.paused) {
          currentSong.play();
          document.querySelector(
            `.${className}`
          ).innerHTML = `<i class="ri-pause-line"></i>`;
          currentSongLeftBtn.innerHTML = `<i class="ri-pause-line"></i>`;
          tooltip("playbtnSeekBar", "Pause Song", "play");
        } else {
          currentSong.pause();
          document.querySelector(
            `.${className}`
          ).innerHTML = `<i class="ri-play-fill"></i>`;
          currentSongLeftBtn.innerHTML = `<i class="ri-play-fill"></i>`;
          tooltip("playbtnSeekBar", "Play Song", "play");
        }
      }
    });
  });
}

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

function displayInfoOnSeekBar(songs) {
  playBarSongName.innerHTML = `${songs.song_name}`;
  playSong_sArtist.innerHTML = ` ${songs.artist}`;
  imagePlayBar.childNodes[1].src = `${songs.image}`;
  songLikeSeekbar.innerHTML = `${songLiked.find((x) => x.id === songs.id)
    ? `${'<i class="ri-heart-fill" style="color: green;"></i>'}`
    : `${'<i class="ri-heart-3-line"></i>'}`
    }`;

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

//-----------------------------------------
// Like and Dislike functionally [Start]
//-----------------------------------------

function updateLikedSongs(song, classHeart, isClickFromSeekbar) {
  let search = songLiked.find((x) => x.id === classHeart[1]);

  if (!search) {
    const d = new Date();
    const months = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const year = d.getFullYear();
    const month = months[d.getMonth()];
    const day = d.getDate();

    const date = `${year}-${month}-${day}`;
    const newObj = { ...song, time: date };

    songLiked.push(newObj);
    document.querySelector(
      `.${classHeart[1]}`
    ).innerHTML = `<i class="ri-heart-fill" style="color: green;"></i>`;
  } else {
    const index = songLiked.findIndex((element) => element.id === song.id);
    songLiked.splice(index, 1);
    document.querySelector(
      `.${classHeart[1]}`
    ).innerHTML = `<i class="ri-heart-3-line"></i>`;
  }

  if (isClickFromSeekbar) {
    songLikeSeekbar.innerHTML = document.querySelector(
      `.${classHeart[1]}`
    ).innerHTML;
  } else {
    songLikeSeekbar.innerHTML = document.querySelector(
      `.${classHeart[1]}`
    ).innerHTML;
  }

  localStorage.setItem("songLike", JSON.stringify(songLiked));
}

function likedSongs(classHeart) {
  playList.forEach((playlist, index) => {
    playlist.tracks.forEach((song) => {
      if (song.id === classHeart[1]) {
        updateLikedSongs(song, classHeart, false);
      }
    });
  });

  // songLikeListCreation();
}

songLikeSeekbar.addEventListener("click", () => {
  let nameOfTheSong = currentSong.src
    .split("5500")[1]
    .replace(/20%|%20|20|%/g, " ");

  playList.forEach((playlist) => {
    playlist.tracks.forEach((song) => {
      if (song.track === nameOfTheSong) {
        updateLikedSongs(song, { 1: song.id }, true);
      }
    });
  });
});

//-----------------------------------------
// Like and Dislike functionally [End]
//-----------------------------------------

//😏😏

//-----------------------------------------
// Create liked song list creation [Start]
//-----------------------------------------

async function createTableRow(song, index) {
  return new Promise((resolve) => {
    let songTime = new Audio();
    songTime.src = song.track;

    const getDuration = new Promise((durationResolve) => {
      songTime.addEventListener("loadedmetadata", () => {
        durationResolve(songTime.duration);
      });
    });

    getDuration.then((duration) => {
      resolve(`
        <div class="row" id="${song.id}-like" onclick="likedSongPlay('${song.id
        }-like')">
          <div class="rowIndex">${index + 1}</div>
          <div>${song.song_name}</div>
          <div>${song.artist}</div>
          <div class="heart ${song.id
        }" onclick="likedSongs(this.classList)"><i class="ri-heart-fill" style="color: green;"></i></div>
          <div>${secondsToMinutesAndSeconds(duration)}</div>
          <div>${song.time}</div>
        </div>
      `);
    });
  });
}

async function songLikeListCreation() {
  createArtistList();
  boxKAbox.innerHTML = "";

  let mainTable = document.createElement("div");
  mainTable.classList.add("mainTable");

  let containerElement = document.createElement("div");
  containerElement.classList.add("rowClass");

  mainTable.appendChild(createTableHeader());
  mainTable.appendChild(containerElement);

  const rowHTMLs = await Promise.all(
    songLiked.map((song, index) => createTableRow(song, index))
  );

  containerElement.innerHTML = rowHTMLs.join("");

  containerElement.querySelectorAll(".row").forEach((row, index) => {
    row.addEventListener("mouseover", () => {
      row.querySelector(".rowIndex").innerHTML = `<i class="ri-play-fill"></i>`;
    });
    row.addEventListener("mouseleave", () => {
      row.querySelector(".rowIndex").innerHTML = `${index + 1}`;
    });
  });

  if (songLiked.length <= 0) {
    boxKAbox.innerHTML = `<h2 style="margin: auto;">You didn't like any song....</h2>`;
  } else {
    boxKAbox.appendChild(mainTable);
  }
}

function createTableHeader() {
  let headTable = document.createElement("div");
  headTable.classList.add("headTable");

  let headings = ["#", "Title", "Artist", "Heart", "Duration", "Date"];

  headings.forEach((headingText) => {
    let heading = document.createElement("div");
    heading.textContent = headingText;
    headTable.appendChild(heading);
  });

  return headTable;
}

//-----------------------------------------
// Create liked song list creation [End]
//-----------------------------------------

function likedSongPlay(id) {
  let rowID = id.split("-")[0];
  console.log(rowID);
  playList.forEach((playlist, index) => {
    playlist.tracks.forEach((song, index) => {
      if (song.id === rowID) {
        displayInfoOnSeekBar(song);
        rowIndexChange(id);
        currentSong.src = song.track;
        currentSong.play();

        playbtnSeekBar.innerHTML = `<i class="ri-pause-line"></i>`;
        if (document.querySelector(`#${rowID}`)) {
          document.querySelector(
            `#${rowID}`
          ).innerHTML = `<i class="ri-pause-line"></i>`;
          console.log("work");
        }
      }
    });
  });
}

function rowIndexChange(id) {
  let row = document.getElementById(id);
  let rowPlayBtn = row.querySelector(".rowIndex");
  let previousPlaybtnHTML = rowPlayBtn.innerHTML;

  let videoElement = document.createElement("video");
  videoElement.width = 30;
  videoElement.height = 30;

  let source = document.createElement("source");
  source.src = "/video/0bdca10c8855750e0820b92421e6c153.mp4";
  source.type = "video/mp4";

  videoElement.appendChild(source);
  videoElement.muted = true;

  videoElement.addEventListener("loadedmetadata", function () {
    videoElement.play();
  });

  rowPlayBtn.innerHTML = "";

  rowPlayBtn.appendChild(videoElement);

  console.log(previousPlaybtnHTML);
}

function updateVolume() {
  const volumeControl = document.getElementById("volumeControl");
  currentSong.volume = volumeControl.value;
}

//-----------------------------------------------
//Hover
//-----------------------------------------------

function tooltip(className, text, forWhichOne) {
  let tooltip = document.createElement("div");

  tooltip.classList.add("showOnHover");
  tooltip.classList.add(`${forWhichOne}`);
  tooltip.style.display = "none";
  tooltip.innerHTML = text;

  console.log(document.querySelector(".playbtnSeekBar").innerHTML);

  document.querySelector(`.${className}`).appendChild(tooltip);

  document.querySelector(`.${className}`).addEventListener("mouseover", () => {
    tooltip.style.display = "block";
    console.log("object2");
  });

  document.querySelector(`.${className}`).addEventListener("mouseleave", () => {
    tooltip.style.display = "none";
  });
}

tooltip("backbtn", "Previous Song", "back");
tooltip("playbtnSeekBar", "Play Song", "play");
tooltip("forwardBtn", "Next Song", "next");
tooltip("repeatBtn", "Repeat Song", "repeat");
tooltip("wowOp", "Song's Lyrics", "__lyrics");

//-----------------------------------------------
//Hover [End]
//-----------------------------------------------

document.querySelector(".closeLyrics").addEventListener("click", () => {
  let box = document.getElementById("lyricsBox");
  box.style.display = "none";
});
document.getElementById("lyricsOpen").addEventListener("click", () => {
  // stopPropagation()
  let box = document.getElementById("lyricsBox");
  box.style.display = "block";
  box.style.transform = "translateY(-110%)";
  box.style.opacity = "1";
  console.log(box);
});

function updateLyrics() {
  let currentSongSource = currentSong.src.split("5500")[1].replace(/20%|%20|20|%/g, " ");

  let lyricsContainer = document.querySelector(".lyrics");
  let foundLyrics = false;

  playList.forEach((playlist, index) => {
    playlist.tracks.forEach((song, index) => {
      if (song.track === currentSongSource) {
        songLyrics.forEach((items) => {
          if (song.id === items.id) {
            lyricsContainer.innerHTML = items.lyrics;
            foundLyrics = true;
          }
        });
      }
    });
  });

  if (!foundLyrics) {
    lyricsContainer.innerHTML = "Sorry 🥺 we don't have lyrics for this song, but we try our best 😤 to add lyrics as fast as possible, so just 😁😁 and 🎶🎶.";
  }
}

function showOF() {
  let div = document.createElement("div")
  div.classList.add("showOF")
  div.innerHTML = `oh! Sis/Bro my creator is so so hearty philanthropist 😍😍 so he/she not charge anything for listening songs so it
  means no premium i know for you to believe this thing is a bit....
  but yaah it's free so just 🎶🎶 and 🕺💃🥰🥰.`
  document.querySelector(".mainDiv").appendChild(div)
  setTimeout(() => {
    document.querySelector(".mainDiv").removeChild(div)
  }, 5000)
}
