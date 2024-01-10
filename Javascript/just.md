```js

OK Here are some new things 👇 🤪

---------------------------------------------

Q.1. In "playTrack" fucntion i use 'canplay' so why i use ?

The 'canplay' event is a part of the HTML5 <audio> element's events in JavaScript. It is fired when enough of the audio has been loaded to play without interruptions. In other words, the browser has loaded enough of the audio file to ensure smooth playback.

1. When you set the src attribute of an <audio> element with a new audio file, the browser starts loading that file.
2. The 'canplay' event is triggered when enough data has been loaded and the browser determines that it can play the audio without interruptions.

currentSong.addEventListener('canplay', () => {
  console.log('Audio is ready to play');
  currentSong.play();
});

This code waits for the 'canplay' event to be emitted before calling 'currentSong.play()'. This ensures that the audio playback is initiated only when there's enough data loaded to play the audio smoothly. It helps in avoiding potential interruptions or delays in playback.

---------------------------------------------

Q.2. In "playTrack" fucntion i use 'ended' so why i use ?

The 'ended' event is a standard event in the HTML5 <audio> element in JavaScript. It is triggered when the audio playback reaches the end of the audio file. This event is useful for scenarios where you want to perform some action or trigger the playback of the next track when the current one has finished playing.

currentSong.addEventListener('ended', () => {
  console.log('The audio has ended');
  // Perform actions when the audio playback is complete
});

'playTrack' function, the 'ended' event is used to detect when the currently playing track has completed, and it triggers the playback of the next track in the loop. This ensures that the playlist continues to play in a sequential loop.

---------------------------------------------

The readyState property of an HTML media element represents the current state of the media's loading process. The readyState value is an integer that indicates how much of the media is available or has been loaded. Here are the possible values:

0 (HAVE_NOTHING): No information is available about the media.
1 (HAVE_METADATA): Metadata (like duration and dimensions) is available, but not enough to start playback.
2 (HAVE_CURRENT_DATA): Data for the current playback position is available, but not enough to guarantee uninterrupted playback.
3 (HAVE_FUTURE_DATA): Enough data is available to start playing, but not necessarily enough to play through to the end without buffering.
4 (HAVE_ENOUGH_DATA): Enough data is available to play through the media to the end without interruption.

---------------------------------------------

Q.3. What is the difference between "canplaythrough" and "canplay" events ?

  👉both events related to the loading and playback of media elements (like <audio> or <video> elements) in HTML.

  🔸 canplay :- 
  The canplay event is triggered when enough data has been loaded to start playing the media element. It signifies that the browser estimates that there is enough data available to play the media from the current position without interruptions.

  The media may not have loaded entirely, but there's sufficient data to start playback without buffering or pauses.

  This event is typically fired earlier in the loading process compared to canplaythrough.

  mediaElement.addEventListener('canplay', function() {
  // Code to handle the 'canplay' event
  });

  🔸 canplaythrough:-

  The canplaythrough event is triggered when the browser estimates that enough data has been loaded to play through the media to the end without interruption. It indicates that the media is fully loaded or has loaded enough to play the entire content without buffering.

  This event is fired when the media is considered ready for smooth playback, and it's often used when you want to ensure that there's enough data for continuous playback.

  mediaElement.addEventListener('canplaythrough', function() {
  // Code to handle the 'canplaythrough' event
  });

  💥 summary:- 

  `Use the canplay event when you want to be notified that enough data is available to start playing, even if it's not fully loaded.
  Use the canplaythrough event when you want to ensure that the media is fully loaded or has enough data to play through the entire content without interruptions.`

-----------------------------------------------------

```