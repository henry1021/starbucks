// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
  // id=player from html and ID is An6LvWQuj_8
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', //영상의 ID이다.
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: 'An6LvWQuj_8' //반복재생할 영상ID
    },
    events: {
      onReady: function (event) {
        event.target.mute() //음소거
      }
    }
  });
}