!function(){var e=document.querySelector("#vimeo-player"),t=new Vimeo.Player(e),r={duration:61.857,percent:.049,seconds:3.034},n=function(){localStorage.setItem("videoplayer-current-time",JSON.stringify(r));var e=localStorage.getItem("videoplayer-current-time"),t=JSON.parse(e);console.log(t)};t.on("play",n),t.setCurrentTime(30.456).then(n).catch((function(e){e.name}))}();
//# sourceMappingURL=02-video.4f6ab42a.js.map
