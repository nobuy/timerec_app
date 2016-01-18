window.addEventListener("load", function(){
  'use strict';

  var startTime;
  var timerId;
  var elapsedTime = 0;
  var btnStatus = 0;

  var timerText   = document.querySelector("div#timerText");
  var btn = document.querySelector("button#startstop");
  var startTime = document.querySelector("input#activity_start_time");
  var endTime   = document.querySelector("input#activity_end_time");

  btn.addEventListener('click', function(){
    if (btnStatus==1)
    {
      btn.innerText = "start";
      endTime.value = getDateTime("Y-m-d H:i:s");
      stopTrigger();
    }
    else
    {
      resetTrigger();
      startTime.value = getDateTime("Y-m-d H:i:s");
      btn.innerText = "stop";
      startTrigger();
    }
  });

  function startTrigger(){
    startTime = Date.now();
    btnStatus = 1;
    updateTimerText();
  }
  function stopTrigger(){
    elapsedTime += Date.now() - startTime;
    clearTimeout(timerId);
    btnStatus = 2;
  }
  function resetTrigger(){
    timerText.innerHTML = '0'
    elapsedTime = 0;
    btnStatus = 0;
  }
  function updateTimerText(){
    timerId = setTimeout(function(){
      var t = Date.now() - startTime + elapsedTime;
      timerText.innerHTML = (t / 1000).toFixed(2);
      updateTimerText();
    }, 10);
  }
})
