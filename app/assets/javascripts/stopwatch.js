window.addEventListener("load", function(){
  'use strict';

  var startTime;
  var timerId;
  var elapsedTime = 0;

  var refreshbtn = document.querySelector("button#refresh");
  var sendbtn = document.querySelector("input[name=commit]");
  var timerText = document.querySelector("div#timerText");
  var starttime = document.querySelector("input#activity_start_time");

  refresh();

  refreshbtn.addEventListener('click', function(){
    refresh();
  });
  sendbtn.addEventListener('click', function(){
    refresh();
  });

  function refresh(){
    resetTrigger();
    starttime.value = getDateTime("Y-m-d H:i:s");
    startTrigger();
  }
  function startTrigger(){
    startTime = Date.now();
    updateTimerText();
  }
  function stopTrigger(){
    elapsedTime += Date.now() - startTime;
    clearTimeout(timerId);
  }
  function resetTrigger(){
    timerText.innerHTML = '0'
    elapsedTime = 0;
  }
  function updateTimerText(){
    timerId = setTimeout(function(){
      var t = Date.now() - startTime + elapsedTime;
      timerText.innerHTML = (t / 1000).toFixed(2);
      updateTimerText();
    }, 10);
  }
})
