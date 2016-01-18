window.addEventListener('load', function(){
  'use strict'

  var nowtime = document.querySelector("div#clockText");

  updateClock();
  function updateClock(){
    setTimeout(function(){
      nowtime.innerHTML = getDateTime("Y-m-d H:i:s");
      updateClock();
    }, 10);
  }
})
