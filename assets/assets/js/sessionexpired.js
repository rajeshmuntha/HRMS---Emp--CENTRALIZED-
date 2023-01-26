/**
 * 
 */
 $(function () {
            $("body").on('click keypress', function () {
                ResetThisSession();
            });
        });

  var timeInSecondsAfterSessionOut =300; // 5 minutes change this to change session time out (in seconds).
        var secondTick = 0;
        function ResetThisSession() {
            secondTick = 0;
        }
        function StartThisSessionTimer() {
            secondTick++;
            var timeLeft = ((timeInSecondsAfterSessionOut - secondTick) / 60).toFixed(0); // in minutes
        timeLeft = timeInSecondsAfterSessionOut - secondTick; // override, we have 30 secs only 
            $("#spanTimeLeft").html(timeLeft);
            if (secondTick > timeInSecondsAfterSessionOut) {
                clearTimeout(tick);
                window.location = "page-timeout.html";
                return;
            }
            tick = setTimeout("StartThisSessionTimer()", 1000);
        }
        StartThisSessionTimer();