<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite('resources/css/clock.css')
</head>
<body>
  

    <div class="clock">
        <div class="numbers">
            <span style="--i:0;"><b>12</b></span>
            <span style="--i:1;"><b>3</b></span>
            <span style="--i:2;"><b>6</b></span>
            <span style="--i:3;"><b>9</b></span>

            <div class="circle" id="hr"><i></i></div>
            <div class="circle" id="mn"><i></i></div>
            <div class="circle" id="sc"><i></i></div>
        </div>
    </div>



  <script>
        let hr = document.querySelector('#hr');
        let mn = document.querySelector('#mn');
        let sc = document.querySelector('#sc');
        
        setInterval(() => {
            let day = new Date();
            let hh = day.getHours() * 30;
            let mm = day.getMinutes() * 6;
            let ss = day.getSeconds() * 6;
            
            hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
            mn.style.transform = `rotateZ(${mm}deg)`;
            sc.style.transform = `rotateZ(${ss}deg)`;
        }, 1000); // 1000 ms = 1 saniye

    </script>



    @vite('resources/js/clock.js')
</body>

</html>