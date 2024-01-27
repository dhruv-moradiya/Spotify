const allSong = [
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
    image: "/songPhotos/정국 Jungkook 'Standing Next to You' MV.jpg",
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
    track:
      "/Songs/TXT - Chasing That Feeling (English Ver.) (Digital Only).mp3",
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
  {
    id: "DO_1",
    song_name: "I Do",
    artist: "D.O [EXO]",
    track: "/Songs/I Do.mp3",
    image: "/songPhotos/I'm Gonna Love You.jpg",
  },
  {
    id: "DO_2",
    song_name: "I'm Gonna Love You",
    artist: "D.O [EXO]",
    track: "/Songs/I'm Gonna Love You.mp3",
    image: "/songPhotos/I'm Gonna Love You.jpg",
  },
  {
    id: "DO_3",
    song_name: "Rose [English ver.]",
    artist: "D.O [EXO]",
    track: "Songs/D.O. (EXO) - Rose [English ver.].mp3",
    image: "/songPhotos/Rose2 D.O.jpg",
  },
  {
    id: "DO_4",
    song_name: "Rose",
    artist: "D.O [EXO]",
    track: "Songs/D.O. (EXO) - Rose.mp3",
    image: "/songPhotos/Rose2 D.O.jpg",
  },
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
  {
    id: "King_1",
    song_name: "Afat",
    artist: "King",
    track: "/Songs/Aafat.mp3",
    image: "/songPhotos/king.jpg",
  },
  {
    id: "King_2",
    song_name: "Good Trip",
    artist: "King",
    track: "/Songs/Good Trip.mp3",
    image: "/songPhotos/king.jpg",
  },
  {
    id: "King_3",
    song_name: "Sarkaare",
    artist: "King",
    track: "/Songs/Sarkaare.mp3",
    image: "/songPhotos/king.jpg",
  },
  {
    id: "King_4",
    song_name: "Tu Jaana Na Piya",
    artist: "King",
    track: "/Songs/Tu Jaana Na Piya.mp3",
    image: "/songPhotos/king.jpg",
  },
  {
    id: "King_5",
    song_name: "Runaway",
    artist: "King",
    track: "/Songs/Runaway (feat. Julia Michaels).mp3",
    image: "/songPhotos/king.jpg",
  },
  {
    id: "BTS_1",
    song_name: "Butter",
    artist: "BTS",
    track: "/Songs/Butter.mp3",
    image: "/songPhotos/buttor.jpg",
  },
  {
    id: "BTS_2",
    song_name: "Dynamite",
    artist: "BTS",
    track: "/Songs/dynamite.mp3",
    image: "/songPhotos/dynamite bts.jpg",
  },
  {
    id: "BTS_3",
    song_name: "My Universe",
    artist: "BTS, Coldplay",
    track: "/Songs/My Universe.mp3",
    image: "/songPhotos/my uni.jpg",
  },
  {
    id: "BND_1",
    song_name: "But i like you (돌아버리겠다)",
    artist: "BOYNEXTDORE",
    track: "/Songs/But i like you (돌아버리겠다).mp3",
    image: "/songPhotos/boynexrdoor.jpg",
  },
  {
    id: "BND_2",
    song_name: "One and Only",
    artist: "BOYNEXTDORE",
    track: "/Songs/One and Only.mp3",
    image: "/songPhotos/boynexrdoor.jpg",
  },
  {
    id: "BND_3",
    song_name: "Serenade",
    artist: "BOYNEXTDORE",
    track: "/Songs/Serenade.mp3",
    image: "/songPhotos/boynexrdoor.jpg",
  },
  {
    id: "MK_1",
    song_name: "Happy Today",
    artist: "Moko koza",
    track: "/Songs/Happy Today.mp3",
    image: "/songPhotos/happy today.jpg",
  },
  {
    id: "AFNE",
    song_name: "Anthem For The North East",
    artist: "Khasi Bloodz....",
    track: "/Songs/Anthem For The North East.mp3",
    image: "/songPhotos/aotne.jpeg",
  },
  {
    id: "NEC",
    song_name: "Northeast Cypher",
    artist: "Moko kozaBorkung Hrangkhawl....",
    track: "/Songs/Northeast Cypher.mp3",
    image: "/songPhotos/nes.jpg",
  },

  {
    id: "NE-Flute",
    song_name: "North Eastern Flute",
    artist: " Lakhinandan Lahon",
    track: "/Songs/North Eastern Flute.mp3",
    image: "/songPhotos/North-Eastern-Flute-Instrumental.jpg",
  },
  {
    id: "NECHOPPER",
    song_name: "North East Chopper",
    artist: "DON KAM, Moko Koza, Banjop, Khati",
    track: "/Songs/North East Chopper.mp3",
    image: "/songPhotos/necopper.jpg",
  },
];

const playList = [
  {
    id: "palyList_1",
    name: "Daily Mix 1",
    imagePlayList:
      "https://www.freestyle666.com/uploads/allimg/230822/225RK933-0.jpg",
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
        image: "/songPhotos/정국 Jungkook 'Standing Next to You' MV.jpg",
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
        track:
          "/Songs/TXT - Chasing That Feeling (English Ver.) (Digital Only).mp3",
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
        image:
          "https://www.freestyle666.com/uploads/allimg/230822/225RK933-0.jpg",
      },
      {
        id: "DO_1",
        song_name: "I Do",
        artist: "D.O [EXO]",
        track: "/Songs/I Do.mp3",
        image: "/songPhotos/I'm Gonna Love You.jpg",
      },
      {
        id: "DO_2",
        song_name: "I'm Gonna Love You",
        artist: "D.O [EXO]",
        track: "/Songs/I'm Gonna Love You.mp3",
        image: "/songPhotos/I'm Gonna Love You.jpg",
      },
      {
        id: "DO_3",
        song_name: "Rose [English ver.]",
        artist: "D.O [EXO]",
        track: "/Songs/D.O. (EXO) - Rose [English ver.].mp3",
        image: "/songPhotos/Rose2 D.O.jpg",
      },
      {
        id: "DO_4",
        song_name: "Rose",
        artist: "D.O [EXO]",
        track: "/Songs/D.O. (EXO) - Rose.mp3",
        image: "/songPhotos/Rose2 D.O.jpg",
      },
    ],
  },
  {
    id: "palyList_2",
    name: "Daily Mix 2",
    imagePlayList: "/songPhotos/darshan.jpg",
    wave: "/SVG/wave-haikei__1_-removebg-preview.png",
    artist: "Achint, Kumar Sanu, Darshan Raval, King....",
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
      {
        id: "King_1",
        song_name: "Afat",
        artist: "King",
        track: "/Songs/Aafat.mp3",
        image: "/songPhotos/king.jpg",
      },
      {
        id: "King_2",
        song_name: "Good Trip",
        artist: "King",
        track: "/Songs/Good Trip.mp3",
        image: "/songPhotos/king.jpg",
      },
      {
        id: "King_3",
        song_name: "Sarkaare",
        artist: "King",
        track: "/Songs/Sarkaare.mp3",
        image: "/songPhotos/king.jpg",
      },
      {
        id: "King_4",
        song_name: "Tu Jaana Na Piya",
        artist: "King",
        track: "/Songs/Tu Jaana Na Piya.mp3",
        image: "/songPhotos/king.jpg",
      },
      {
        id: "King_5",
        song_name: "Runaway",
        artist: "King",
        track: "/Songs/Runaway (feat. Julia Michaels).mp3",
        image: "/songPhotos/king.jpg",
      },
    ],
  },
  {
    id: "palyList_3",
    name: "Daily Mix 3",
    imagePlayList: "/songPhotos/but i like you.jpg",
    wave: "/SVG/1.png",
    artist: "BTS, BOYNEXTDOOR....",
    tracks: [
      {
        id: "BTS_1",
        song_name: "Butter",
        artist: "BTS",
        track: "/Songs/Butter.mp3",
        image: "/songPhotos/buttor.jpg",
      },
      {
        id: "BTS_2",
        song_name: "Dynamite",
        artist: "BTS",
        track: "/Songs/dynamite.mp3",
        image: "/songPhotos/dynamite bts.jpg",
      },
      {
        id: "BTS_3",
        song_name: "My Universe",
        artist: "BTS, Coldplay",
        track: "/Songs/My Universe.mp3",
        image: "/songPhotos/my uni.jpg",
      },
      {
        id: "BND_1",
        song_name: "But i like you (돌아버리겠다)",
        artist: "BOYNEXTDORE",
        track: "/Songs/But i like you (돌아버리겠다).mp3",
        image: "/songPhotos/boynexrdoor.jpg",
      },
      {
        id: "BND_2",
        song_name: "One and Only",
        artist: "BOYNEXTDORE",
        track: "/Songs/One and Only.mp3",
        image: "/songPhotos/boynexrdoor.jpg",
      },
      {
        id: "BND_3",
        song_name: "Serenade",
        artist: "BOYNEXTDORE",
        track: "/Songs/Serenade.mp3",
        image: "/songPhotos/boynexrdoor.jpg",
      },
    ],
  },
  {
    id: "palyList_4",
    name: "Happy Today",
    imagePlayList: "/songPhotos/happy today.jpg",
    wave: "/SVG/2.png",
    artist: "North East",
    tracks: [
      {
        id: "MK",
        song_name: "Happy Today",
        artist: "Moko koza",
        track: "/Songs/Happy Today.mp3",
        image: "/songPhotos/happy today.jpg",
      },
      {
        id: "AFNE",
        song_name: "Anthem For The North East",
        artist: "Khasi Bloodz....",
        track: "/Songs/Anthem For The North East.mp3",
        image: "/songPhotos/aotne.jpeg",
      },
      {
        id: "NEC",
        song_name: "Northeast Cypher",
        artist: "Moko kozaBorkung Hrangkhawl....",
        track: "/Songs/Northeast Cypher.mp3",
        image: "/songPhotos/nes.jpg",
      },

      {
        id: "NE_Flute",
        song_name: "North Eastern Flute",
        artist: " Lakhinandan Lahon",
        track: "/Songs/North Eastern Flute.mp3",
        image: "/songPhotos/North-Eastern-Flute-Instrumental.jpg",
      },
      {
        id: "NECHOPPER",
        song_name: "North East Chopper",
        artist: "DON KAM, Moko Koza, Banjop, Khati",
        track: "/Songs/North East Chopper.mp3",
        image: "/songPhotos/necopper.jpg",
      },
    ],
  },
];

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
    id: "King",
    name: "King",
    image: "/songPhotos/king.jpg",
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
];

const songLyrics = [
  {
    id: "MK",
    lyrics: `
Yeah, i just wanna take this time right now to say that i'm happy for all the things in my life. Thank God, for all the blessings. Yeah, why you gotta be so sad. Cheer up a little bit. You know, we got a reason to smile. Coz you know, I'm happy today </br></br>
(Hook)</br></br>
Coz I'm happy today, I'm happy today</br></br>
And i don't give a what, what you think about me</br>
Say i don't give a what, what you say about me</br>
Coz I'm happy today, I'm happy today</br>
And i don't give a what, what you think about me</br>
Say i don't give a what, what you say about me</br></br>

(Verse 1)</br></br>
Feeling like a Jet-ski, cruising on the skyline</br>
I'm just going on and on, something like a timeline</br>
Look up in the sky, It's a bird! It's a plane!</br>
Nah! It's me, I'm just doing my thang</br>
I got no reason to be down today</br>
All my homies chilling I'll be on my way</br>
Cheers to the life that we living right now</br>
We only live once, why you gotta make a frown</br>
Take no stress, get a break from depression</br>
While you suffocating you just missing out that every breath is a blessing</br>
Why you gotta worry bout a lesson</br>
We don't have to act the same way, yeah we different</br>
Coz today is my day Ima live my own way</br>
Ain't nobody gon tell me i ain't doing okay</br>
I've been holding it up, up scars on my face</br>
Coz I've mustered up my guts to say, that I'm Happy Today</br></br>
(Hook)</br></br>
Coz I'm happy today, I'm happy today</br>
And i don't give a what, what you think about me</br>
Say i don't give a what, what you say about me</br>
Coz I'm happy today, I'm happy today</br>
And i don't give a what, what you think about me</br>
Say i don't give a what, what you say about me</br></br>
(Verse 2)</br></br>
Thie puotei kevi hau nu vor se la liete</br>
Uko pete keze puo di unei khie</br>
Vi rei suo rei uko pete kemhie phre bazo</br>
Süla kepacü mo di huoniehuo khrieliecie</br>
Themia sü u kelhou nu kenei ba moro mia ze kepekro di bazorei U riibei zotuo</br>
Puo thuo mhanyi ba zorei tsopfhü di lhou zotuo</br>
Kehourapuo tuo zorei puo nou rüülie kenjü zo</br>
Süla uko pete vor phichü, nhicu, khriesako</br>
U cha kejü kechako mu keteko mu kepeko</br>
Vor keze puo lie di kenei se lie di</br>
Nie thejau bu huoniehuo va pezieliecie</br>
Themia kelhouzha sü bavü mhie di pulielho</br>
Kijü hau nu tsur kemhiei kijü ze di kekhowatuo</br>
Süla puotei kevi hako ngulie zhü teiki</br>
Teisozha kevi hako zelie di ba phi tsoliecie</br></br>
(Hook)</br></br>
Coz I'm happy today, I'm happy today</br>
And i don't give a what, what you think about me</br>
Say i don't give a what, what you say about me</br>
Coz I'm happy today, I'm happy today</br>
And i don't give a what, what you think about me</br>
Say i don't give a what, what you say about me</br>
    `,
  },
  {
    id: "DO_3",
    lyrics: `
I see you driving your car</br>
Down to school</br>
Your lips are so fine</br>
And you're looking so cool</br>
I know you've noticed me too</br>
And if I'll be honest with you now</br>
Maybe I'm thinking maybe</br></br>
If you need a lover</br>
Let me know and let me in</br>
I could treat you better</br>
Steal you roses every day</br>
I might not have a fancy car</br>
But I fancy you</br>
So gimme a chance</br>
If you need a lover baby</br></br>
They look at me</br>
When I'm looking at you</br>
I don't give a damn</br>
Cause it's all I can do</br>
Please don't go breaking my heart</br>
Tell me you're aching for me now</br>
Baby baby</br></br>
If you need a lover</br>
Let me know and let me in</br>
I could treat you better</br>
Steal you roses every day</br>
I might not have a fancy car</br>
But I fancy you</br>
So gimme a chance</br>
If you need a lover baby</br></br>
Any flowers ain't your pain</br>
I got so much love to give you babe</br>
As long as you feel the same way</br>
You know we can do</br>
Whatever you want</br>
You just need to either</br>
Let me come inside</br>
Or leave me standing in the rain</br></br>
If you need a lover</br>
Let me know and let me in</br>
I could treat you better</br>
Steal you roses every day</br>
I might not have a fancy car</br>
But I fancy you</br>
So gimme a chance</br>
If you need a lover baby</br>
    `
  },
  {
    id: "DO_4",
    lyrics: `
[Verse 1]</br>
먼지 없는 파란 하늘 위로 (Ah, yeah, yeah, yeah)</br>
바람 따라가는 구름처럼 (Ah, yeah, yeah, yeah)</br>
멀리 가지 말아요</br>
그대로 머물러줘</br>
My baby, 내 맘에 매일 (Ah, yeah, yeah, yeah)</br></br>
[Chorus]</br></br>
봄날 같은 그댄 예뻐요 oh-oh-oh 좋아요</br>
어떡하면 내게 올까요 oh-oh-oh 이러는</br>
내 모습이 쑥스럽고 (Ooh-ooh-ooh-ooh)</br>
간지러워도 어쩔 수 없죠</br>
그댈 사랑해요 baby</br></br>
[Verse 2]</br></br>
눈뜨면 생각나는 사람이 (Ah, yeah, yeah, yeah)</br>
그대란 걸 그대는 알까요 (Ah, yeah, yeah, yeah)</br>
모른 체하지 마요</br>
다 알고 있잖아요</br>
Oh maybe, baby (Ah, yeah, yeah, yeah)</br></br>
[Chorus]</br></br>
매일 봐도 그댄 예뻐요 oh-oh-oh 좋아요</br>
어떡하면 내게 올까요 oh-oh-oh 이러는</br>
내 모습이 쑥스럽고 (Ooh-ooh-ooh-ooh)</br>
간지러워도 어쩔 수 없죠</br>
내 사랑이 돼요 baby</br></br>
[Bridge]</br></br>
동네 꽃집을 찾아</br>
그대에게 주고 싶은 꽃</br>
아무리 고민해도</br>
아는 꽃이 장미밖에 없어</br>
용기 내 한가득 품에 담아</br>
그대에게 가고 있어요 (Ah, yeah, yeah, yeah)</br></br>
[Chorus]</br></br>
장미 보다 그댄 예뻐요 oh-oh-oh 사실은</br>
말로 표현을 잘 못해요 oh-oh-oh 이러는</br>
내 모습이 쑥스럽고 (Ooh-ooh-ooh-ooh)</br>
간지러워도 어쩔 수 없죠</br>
오늘부터 우린 lover</br>
    `
  },
  {
    id: "BND_2",
    lyrics: `
[Intro: Jaehyun]</br>
BOYNEXTDOOR, ayy</br>
Representing KOZ, word up</br></br>
[Verse 1: Taesan, Woonhak, Jaehyun]</br></br>
어느 옷을 고를까나? Let me choose one</br>
블랙은 so simple 깔 맞춤은 조금 튀어, mm</br>
돌고 돌아 처음 입은 걸로 pick</br>
향수 칙하고 이 한번 확인, it's perfect, yeah</br>
I'ma fresh so clean 너무 말끔해</br>
문밖을 나서니까 바로 바뀌어 face</br>
사진 찍힐 땐 스무스하게 딴청 해</br>
<h4>Hello world, this is BOYNEXTDOOR</h4></br></br>
[Pre-Chorus: Riwoo, Leehan, Sungho]</br></br>
집에 일찍 들어갈 맘은 없어</br>
24/7 멋진 날이야</br>
날 가만 내버려 두지 마</br>
I'll be your ideal type</br>
딴 데 가기 전에 넘어와</br></br>
[Chorus: Taesan, Woonhak, Riwoo]</br></br>
Listen, I'm the one and only</br>
One and only</br>
나머지는 없지 별 볼일</br>
Ke-ke-ke-ke-keep ballin'</br>
Listen, I'm the one and only</br></br>
[Post-Chorus: Jaehyun, Sungho]</br></br>
Uh-uh, naturally snatched</br>
Uh-uh, 어디갔어 lady</br>
Listen, I'm the one, yeah</br></br>
[Verse 2: Leehan, Jaehyun]</br></br>
Yeah, walking down main street</br>
쇼윈도에 비친 내 모습</br>
Better than any other brand</br>
부티나는 발걸음</br>
버킷햇 써도 시선 느껴져</br>
선글라스 껴도 넌 못 지워 내 컬러</br>
난 방금 출시됐으니 자랑질 좀 해야지</br>
Limited edition, I told you that I'm only one</br></br>
[Pre-Chorus: Woonhak, Riwoo, Leehan]</br></br>
집에 일찍 들어갈 맘은 없어</br>
24/7 멋진 날이야</br>
Oh, 가만있기 어려워 나</br>
I'm not just a sterеotype</br>
딴 데 가기 전에 넘어와</br></br>
[Chorus: Woonhak, Taesan, Riwoo, Jaehyun]</br></br>
Listen, I'm the onе and only</br>
One and only</br>
나머지는 없지 별 볼일</br>
Ke-ke-ke-ke-keep ballin'</br>
Listen, I'm the one and only</br>
    `
  },
  {
    id: "Achint_5",
    lyrics: `
    Dil hai chota sa magar</br>
Khwaab iske hain bade</br>
Hona chahe ye Muaa asmaani</br>
Farsh pe khade khade</br></br>
Khali Khotey sikke hain</br>
Jeb main rahe bhare</br>
par mile jo sadak pe gire haaan</br>
Note honge woh khare</br></br>
Thodi se dil kashi</br>
zyada fantasy Haaye..</br></br>
Thodi se dil kashi</br>
zyada fantasy</br>
zyada fantasy</br>
ufff umma uff umma uff umma uff</br></br>
Khud ko dhoka de kabhi</br>
Dil ye khud se hi lade</br>
Hona chahe ye Muaa asmaani</br>
Farsh pe khadeee khade</br>
Thodi se dil kashi</br>
zyada fantasy Haaye..</br></br>
Thodi se dil kashi</br>
zyada fantasy</br>
zyada fantasy</br>
ufff umma uff umma uff umma uff</br></br>
Dil hai chota sa magar</br>
Khwaab iske hain bade</br>
Hona chahe ye Muaa asmaani</br>
Farsh pe khade khade</br></br>
Farsh pe khade khade</br>
Farsh pe khadeeee khadeeee</br>
Farsh pe khadeeeee khadeeee</br>
Farsh pe khadeeeeee khaaaade (Slow)</br>

    `
  },
];

