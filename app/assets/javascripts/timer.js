window.addEventListener("load", function(){
  'use strict';

  var startTime;
  var timerId;
  var elapsedTime = 0;

  var btn = document.querySelector("input[name=commit]");
  var timerText = document.querySelector("div#timerText");
  var starttime = document.querySelector("input#activity_start_time");
  var endtime   = document.querySelector("input#activity_end_time");
  starttime.value = getDateTimeUTC("Y-m-d H:i:s");

  refresh();
  btn.addEventListener('click', function(){
    refresh();
  });

  function refresh(){
    resetTrigger();
    startTrigger();
  }
  function startTrigger(){
    startTime = Date.now();
    updateTimer();
  }
  function stopTrigger(){
    elapsedTime += Date.now() - startTime;
    clearTimeout(timerId);
  }
  function resetTrigger(){
    timerText.innerHTML = '0'
    elapsedTime = 0;
  }
  function updateTimer(){
    timerId = setTimeout(function(){
      var t = Date.now() - startTime + elapsedTime;
      timerText.innerHTML = (t / 1000).toFixed(2);
      endtime.value = getDateTimeUTC("Y-m-d H:i:s");
      updateTimer();
    }, 10);
  }
})