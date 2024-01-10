const allSong = [
  {
    id: "TXT_1",
    song_name: "Magic",
    artist: "TXT",
    track: "/Songs/TXT - Magic.mp3",
    image: ""
  },
  {
    id: "TXT_2",
    song_name: "Chasing Taht Feeling",
    artist: "TXT",
    track: "/Songs/TXT - Chasing That Feeling.mp3"
  },
  {
    id: "TXT_3",
    song_name: "Chasing Taht Feeling [English ver.]",
    artist: "TXT",
    track: "/Songs/TXT - Chasing That Feeling (English Ver.) (Digital Only).mp3"
  },
  {
    id: "Kumar_1",
    song_name: "Choodake Daman",
    artist: "Kumar Sanu",
    track: "/Songs/Kumar Sanu - Chaaha Toh Bahut.mp3"
  },
  {
    id: "Kumar_2",
    song_name: "Chaaha Toh Bahut",
    artist: "Kumar Sanu",
    track: "/Songs/Kumar Sanu - Choodake Daman.mp3"
  },
  {
    id: "Riize_1",
    song_name: "Siren!",
    artist: "RIIZE",
    track: "/Songs/RIIZE - Siren.mp3"
  },
  {
    id: "Riize_2",
    song_name: "Memories",
    artist: "RIIZE",
    track: "/Songs/RIIZE - Memories-1.mp3"
  },
  {
    id: "Riize_3",
    song_name: "Look at me SEALOOK",
    artist: "RIIZE",
    track: "/Songs/RIIZE - Look at me SEALOOK.mp3"
  },
  {
    id: "Riize_4",
    song_name: "HAPPY! HAPPY! HAPPY!",
    artist: "RIIZE",
    track: "/Songs/RIIZE - HAPPY! HAPPY! HAPPY!.mp3"
  },
    {
    id: "Riize_5",
    song_name: "Get a Guitar",
    artist: "RIIZE",
    track: "/Songs/RIIZE - Get A Guitar.mp3"
  },
  {
    id: "Achint_1",
    song_name: "Yeh Ek Zindagi",
    artist: "Achint",
    track: "/Songs/Achint - Yeh Ek Zindagi.mp3"
  },
  {
    id: "Achint_2",
    song_name: "Suno Jaanejan",
    artist: "Achint",
    track: "/Songs/Achint - Suno Jaanejaan.mp3"
  },
  {
    id: "Achint_3",
    song_name: "Love You So Much (I Want to Kill You)",
    artist: "Achint",
    track: "/Songs/Achint - Love You So Much (I Want to Kill You).mp3"
  },
  {
    id: "Achint_4",
    song_name: "Hills of Malabar",
    artist: "Achint",
    track: "/Songs/Achint - Hills of Malabar.mp3"
  },
  {
    id: "Achint_5",
    song_name: "Farsh Pe Khade",
    artist: "Achint",
    track: "/Songs/Achint - Farsh Pe Khade.mp3"
  },
  {
    id: "Achint_6",
    song_name: "Bye Bye Adios",
    artist: "Achint",
    track: "/Songs/Achint - Bye Bye Adios.mp3"
  },
  {
    id: "D_O_1",
    song_name: "Rose [English ver.]",
    artist: "D.O",
    track: "/Songs/D.O. (EXO) - Rose [English ver.].mp3"
  },
  {
    id: "D_O_2",
    song_name: "Somebody",
    artist: "D.O",
    track: "/Songs/D.O. (EXO) - Somebody.mp3"
  },
  {
    id: "JK_1",
    song_name: "Standing Next to You",
    artist: "JUNGKOOK BTS",
    track: "/Songs/JUNGKOOK BTS  Standing Next to You.mp3"
  },
  {
    id: "JK_2",
    song_name: "Hate You",
    artist: "JUNGKOOK BTS",
    track: "/Songs/JUNGKOOK BTS Hate You.mp3"
  },
];

const playList = [
  {
    id: "palyList_1",
    name: "Daily Mix 1",
    imagePlayList: "https://www.freestyle666.com/uploads/allimg/230822/225RK933-0.jpg",
    wave: "/SVG/blob-scene-haikei-removebg-preview.png",
    artist: "RIZZE, TXT, D.O, JUNGKOOK....",
    tracks: [
      {
        id: "JK_1",
        song_name: "Standing Next to You",
        artist: "JUNGKOOK BTS",
        track: "/Songs/JUNGKOOK BTS  Standing Next to You.mp3",
        image: "/songPhotos/Jungkook Golden.jpg",
      },
      {
        id: "JK_2",
        song_name: "Hate You",
        artist: "JUNGKOOK BTS",
        track: "/Songs/JUNGKOOK BTS Hate You.mp3",
        image: "/songPhotos/정국 Jungkook 'Standing Next to You' MV.jpg"
      },
      {
        id: "TXT_1",
        song_name: "Magic",
        artist: "TXT",
        track: "/Songs/TXT - Magic.mp3",
        image: "/songPhotos/TXT-magic.jpg",
      },
      {
        id: "TXT_2",
        song_name: "Chasing Taht Feeling",
        artist: "TXT",
        track: "/Songs/TXT - Chasing That Feeling.mp3",
        image: "/songPhotos/TXT-Chasing That Feeling.jpg",
      },
      {
        id: "TXT_3",
        song_name: "Chasing Taht Feeling [English ver.]",
        artist: "TXT",
        track: "/Songs/TXT - Chasing That Feeling (English Ver.) (Digital Only).mp3",
        image: "/songPhotos/TXT-Chasing That Feeling.jpg",
      },
      {
        id: "Riize_1",
        song_name: "Siren!",
        artist: "RIIZE",
        track: "/Songs/RIIZE - Siren.mp3",
        image: "/songPhotos/Siren RIIZE.jpg",
      },
      {
        id: "Riize_2",
        song_name: "Memories",
        artist: "RIIZE",
        track: "/Songs/RIIZE - Memories-1.mp3",
        image: "/songPhotos/RIIZE.jpg",
      },
      {
        id: "Riize_3",
        song_name: "Look at me SEALOOK",
        artist: "RIIZE",
        track: "/Songs/RIIZE - Look at me SEALOOK.mp3",
        image: "/songPhotos/SEALOOK riize.jpg",
      },
      {
        id: "Riize_4",
        song_name: "HAPPY! HAPPY! HAPPY!",
        artist: "RIIZE",
        track: "/Songs/RIIZE - HAPPY! HAPPY! HAPPY!.mp3",
        image: "/songPhotos/Happy riize.jpg",
      },
        {
        id: "Riize_5",
        song_name: "Get a Guitar",
        artist: "RIIZE",
        track: "/Songs/RIIZE - Get A Guitar.mp3",
        image: "https://www.freestyle666.com/uploads/allimg/230822/225RK933-0.jpg",
      },
    ]
  },
  {
    id: "palyList_2",
    name: "Daily Mix 2",
    imagePlayList: "/songPhotos/darshan.jpg",
    wave: "/SVG/wave-haikei__1_-removebg-preview.png",
    artist: "Achint, Kumar Sanu, Darshan Raval....",
    tracks: [
      {
        id: "Kumar_1",
        song_name: "Chaaha Toh Bahut",
        artist: "Kumar Sanu",
        track: "/Songs/Kumar Sanu - Chaaha Toh Bahut.mp3",
        image: "/songPhotos/kumar-sanu.jpg",
      },
      {
        id: "Kumar_2",
        song_name: "Is Tarah Aashiqui Ka",
        artist: "Kumar Sanu, Bela",
        track: "/Songs/Kumar Sanu - Is Tarah Aashiqui Ka.mp3",
        image: "/songPhotos/Singer Kumar Sanu-1.jpg",
      },
      {
        id: "Achint_1",
        song_name: "Yeh Ek Zindagi",
        artist: "Achint",
        track: "/Songs/Achint - Yeh Ek Zindagi.mp3",
        image: "/songPhotos/Achint.jpg",
      },
      {
        id: "Achint_2",
        song_name: "Suno Jaanejan",
        artist: "Achint",
        track: "/Songs/Achint - Suno Jaanejaan.mp3",
        image: "/songPhotos/Achint.jpg",
      },
      {
        id: "Achint_3",
        song_name: "Love You So Much (I Want to Kill You)",
        artist: "Achint",
        track: "/Songs/Achint - Love You So Much (I Want to Kill You).mp3",
        image: "/songPhotos/Achint.jpg",
      },
      {
        id: "Achint_4",
        song_name: "Hills of Malabar",
        artist: "Achint",
        track: "/Songs/Achint - Hills of Malabar.mp3",
        image: "/songPhotos/Achint.jpg",
      },
      {
        id: "Achint_5",
        song_name: "Farsh Pe Khade",
        artist: "Achint",
        track: "/Songs/Achint - Farsh Pe Khade.mp3",
        image: "/songPhotos/Achint.jpg",
      },
      {
        id: "Achint_6",
        song_name: "Bye Bye Adios",
        artist: "Achint",
        track: "/Songs/Achint - Bye Bye Adios.mp3",
        image: "/songPhotos/Achint.jpg",
      },
    ]
  }
]

const artistList = [
  {
    id: "Achint",
    name: "Achint",
    image: "/songPhotos/Achint.jpg",
  },
  {
    id: "Kumar Sanu",
    name: "Kumar Sanu",
    image: "/songPhotos/Singer Kumar Sanu-1.jpg",
  },
  {
    id: "D.O",
    name: "D.O [EXO]",
    image: "/songPhotos/Rose2 D.O.jpg",
  },
  {
    id: "RIZZE",
    name: "RIZZE",
    image: "https://www.freestyle666.com/uploads/allimg/230822/225RK933-0.jpg",
  },
  {
    id: "Jungkook",
    name: "Jungkook [BTS]",
    image: "/songPhotos/Jungkook Golden.jpg",
  },
  {
    id: "TXT",
    name: "TXT",
    image: "/songPhotos/TXT.jpg",
  },
]