<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>30 day javascript</title>
    @vite('resources/css/app.css')

    <style>
        .error{ border: 2px solid, red; }
    </style>
</head>

<body>

    {{-- <button id="btn2" onclick="clickHandle(this)" class="p-1 m-2 bg-red-600 rounded-md">Butona Tikla! 2 </button>
    --}}
    {{-- <h1 class="title-1">baslik 1</h1>
    <h1 class="title-1">baslik 2</h1>
    <h1 class="test1 test2" id="title">baslik 3</h1>
    <h1 class="title-2">baslik 4</h1>

    <div class="title-1">bu bir divdir</div> --}}
    {{-- <h1>test</h1> --}}

    <form id="form" onsubmit="return false">
        <input type="color" name="" id="color-picker">
        <input type="text" name="" id="name" placeholder="Adinizi yaziniz" class="m-3 rounded-lg">
        <select id="gender" multiple>
            <option value="">Sec</option>
            <option value="erkek">Erkek</option>
            <option value="kadin">Kadin</option>
        </select>
        <label class="p-2 m-1 bg-orange-400 rounded-lg p-">
            <input type="checkbox" id="save-rules">kurallari kabul ediyoru
        </label>
        <div class="m-3">
            <label class="p-2 m-1 bg-orange-400 rounded-lg p-">
                <input type="radio" name="stack" value="lamp">LAMP
            </label>
            <label class="p-2 m-1 bg-orange-400 rounded-lg p-">
                <input type="radio" name="stack" value="wamp">WAMP
            </label>
        </div>

        <button id="save-btn" class="m-1">Kaydet</button>
    </form>

    <hr>

    <button id="btn" onclick="clickHandle(this)" ">buraya dokunma birinci </button>
    <button id=" btn2" onclick="clickHandle(this)" class="p-2 m-2 bg-red-800 rounded-sm">buraya dokunma ikinci</button>
    <img id='img' src="https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/55d8e3dbc0410d64c1dc3ea5915e015a7950cf2a/French/images/banners/day_1_23.png"
        width="500px">


{{-- <div class="flex flex-col gr">
        <button class="justify-center p-4 m-1 bg-red-900 rounded-lg item-center hover:bg-blue-500 md:text-center"
            onclick="alert('Welcome to 30 Days Javascript')">Click
            Me</button>
    
        <button class="p-4 m-1 bg-red-900 rounded-lg hover:bg-blue-500 md:text-center"
            onclick="alert('Burada Javascript Dosyalari Yer aliyor')">Click
            Me</button>
    </div> --}}
    
    
    {{-- <h1 style="background-color:yellow; color:red;" id="test" class="adana">title</h1> --}}
    
    {{-- 2. yol --}}
    {{-- <ul>
        <li>
            item 1
            <button class="delete-btn">sil</button>
        </li>
        <li>
            item 2
            <button class="delete-btn">sil</button>
        </li>
        <li>
            item 3
            <button class="delete-btn">sil</button>
        </li>
        <li>
            item 4
            <button class="delete-btn">sil</button>
        </li>
    </ul> --}}
    
    {{-- 1. yol --}}
    {{-- <ul>
        <li class="delete-btn">
            item 1
    
        </li>
        <li class="delete-btn">
            item 2
    
        </li>
        <li class="delete-btn">
            item 3
    
        </li>
        <li class="delete-btn">
            item 4
    
        </li>
    </ul> --}}
    
    
    
    
    {{-- <div class="test" style="padding: 20px; "> --}}
        {{-- <div>eleman 1</div>
        <div style="padding: 10px;">Eleman 2</div>
        <div>Eleman 3</div>
    </div>
    
    
    <div>div etiketi</div>
    <h1 class="title">baslik</h1>
    <p>paragraf</p>
    <small>small etiketi</small> --}}
    
    
    
    <hr>
    
    {{-- <div class="scroll-content" style="height: 70px; overflow:auto">
        test <br>
        test <br>
        test <br>
        test <br>
        test <br>
        test <br>
        test <br>
        test <br>
    </div>
    
    <button id="scroll-down"> Asagi kaydir</button> --}}
    <hr>
    
    {{-- <div class="scroll-content2" style="width:200px; display: flex; white-space: nowrap; overflow: auto">
        <div style="width:100px; flex-shrink: 0">test</div>
        <div style="width:100px; flex-shrink: 0">test</div>
        <div style="width:100px; flex-shrink: 0">test</div>
        <div style="width:100px; flex-shrink: 0">test</div>
        <div style="width:100px; flex-shrink: 0">test</div>
        <div style="width:100px; flex-shrink: 0">test</div>
    </div> --}}
    
    {{-- <button id="scroll-left" class="bg-red-900 text-gray-50">Sola Kaydir</button>
    <button id="scroll-right" class="bg-red-900 text-gray-50">Saga Kaydir</button>
    
    <hr class="p-2 m-2">
    
    <div id="adana" style="background-color: red">Adana</div>
    
    
    <a href="http://prototurk.com">prototurk</a>
    <a href="http://youtube.com/prototurk.com" title="prototurk youtube kanali">prototurk youtube kanali</a>
    
    <hr>
    
    <button type="button">button</button>
    <button type="submit">submit button</button>
    <button type="reset">reset button</button>
    <button disabled type="submit">disabled submit button</button>
    
    <hr> --}}
    
    {{-- <input type="text" placeholder="ad giriniz">
    <button>toggle</button>
    --}}


    <script>
        // function clickHandle(e){
     //  console.log(e.id)
     //  console.log(e.getAttribute('id')) 
     //  console.log('Butona mi tikladin gardas sen !')}
    </script>

    {{-- @vite('resources/js/app.js') --}}
    {{-- @vite('resources/js/helloword.js') --}}
    {{-- @vite('resources/js/data_type.js') --}}
    {{-- @vite('resources/js/date.js') --}}
    {{-- @vite('resources/js/day4.js') --}}
    {{-- @vite('resources/js/day5.js') --}}
    {{-- @vite('resources/js/day6.js') --}}
    {{-- @vite('resources/js/day7.js') --}}
    {{-- @vite('resources/js/day8.js') --}}
    {{-- @vite('resources/js/day9.js') --}}
    {{-- @vite ('resources/js/redus.js-') --}}
    {{-- @vite('resources/js/day10.js') --}}
    {{-- @vite('resources/js/day11.js') --}}
    {{-- @vite('resources/js/day12.js') --}}
    {{-- @vite('resources/js/day13.js') --}}
    {{-- @vite('resources/js/day14.js') --}}
    {{-- @vite('resources/js/day15.js') --}}
    {{-- @vite('resources/js/day16.js') --}}
    {{-- @vite('resources/js/day17.js') --}}
    {{-- @vite('resources/js/day18.js') --}}
    {{-- @vite('resources/js/day19.js') --}}
    {{-- @vite('resources/js/day20.js') --}}
    {{-- @vite('resources/js/day21.js') --}}
    {{-- @vite('resources/js/day22.js') --}}
    {{-- @vite('resources/js/day23.js') --}}
    {{-- @vite('resources/js/day24.js') --}}


    {{-- @vite('resources/js/day21.js') --}}
    {{-- @vite('resources/js/day22.js') --}}
    {{-- @vite('resources/js/day23.js') --}}
    {{-- @vite('resources/js/day24.js') --}}
    
</body>

</html>