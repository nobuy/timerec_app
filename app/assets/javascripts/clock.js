window.addEventListener('load', function(){
  'use strict'

  var nowtime = document.querySelector("input#activity_end_time");

  updateClock();
  function updateClock(){
    setTimeout(function(){
      nowtime.value = getDateTime("Y-m-d H:i:s");
      updateClock();
    }, 10);
  }
})
