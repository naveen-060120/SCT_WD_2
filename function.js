
        let [ms, s, m] = [0, 0, 0];
        let timer = null;

        function displayTime() {
          let msStr = ms < 10 ? "0" + ms : ms;
          let sStr = s < 10 ? "0" + s : s;
          let mStr = m < 10 ? "0" + m : m;
          document.getElementById('time').innerText = `${mStr}:${sStr}:${msStr}`;
        }

        function start() 
        {
          if (timer) return;
          timer = setInterval(() => 
          {
            ms++;
            if (ms === 100)
            { 
              ms = 0; s++; 
            }
            if (s === 60) 
            { 
              s = 0; m++; 
            }
            displayTime();
          }, 10);
        }

        function pause() 
        {
          clearInterval(timer);
          timer = null;
        }

        function reset() 
        {
          clearInterval(timer);
          [ms, s, m] = [0, 0, 0];
          displayTime();
          document.getElementById('laps').innerHTML = '';
          timer = null;
        }

        function lap() 
        {
          const lapTime = document.getElementById('time').innerText;
          const lapDiv = document.createElement('div');
          lapDiv.innerText = `Lap: ${lapTime}`;
          document.getElementById('laps').appendChild(lapDiv);
        }