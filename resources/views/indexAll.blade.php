<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>30 days of Javasript </title>
    @vite('resources/css/app.css')
    <style>
        .active {
            margin: 1px;
            padding: 2px;
            border: 2px;
            border-radius: 5px 5px 5px 5px;
            background-color: #cb1111;
        }
    </style>
    <style>
        .completed {
            text-decoration: line-through;
        }

        h1 {
            background: yellow !important;
            text-decoration: underline;
        }

        body.mobile {
            background: red;
            color: #fff;
        }

        #preview {
            width: 600px;
            height: 600px;
            border: 1px solid red;
        }

        /* @media(max-width: 480px){
            body{
                background: red;
                color: #fff;
            }
        } */
    </style>
    {{-- <script>
        console.log('buradaki benim ilk js code'); 
    </script> --}}
    {{-- <style>
        /* .error {
            border: 2px solid, red;
        } */
        /* .scroll-content,
    .scroll-content2{
        scroll-behavior: smooth;
    } */
        /* button[type=submit][disabled]{
        font-size: 50px;
    } */
    </style> --}}


</head>

<body>
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

    <a href="{{route('about')}}">Hakkimizda</a>
    <a href="http://prototurk.com">prototurk</a>


    <ul id="todos">
        <li>
            Todo 1
            <button class="delete-btn">Sil</button>
        </li>
        <li>
            Todo 2
            <button class="delete-btn">Sil</button>
        </li>
        <li>
            Todo 3
            <button class="delete-btn">Sil</button>
        </li>
    </ul>

    <div class="test1">
        test1
        <div class="test2">
            test2
            <div class="test3">
                test3
            </div>
        </div>
    </div>

    <h1>Bu Bir Baslik</h1>

    <input type="text" name="name" id="" placeholder="adin ne">
    <br>
    <textarea name="about" placeholder="hakkinda bir seyler yaz" cols="30" rows="10"></textarea>
    <br>
    <button data-type="bold" class="action-btn">Kalin Yap</button>
    <button data-type="italic" class="action-btn">Altini Ciz</button>
    <button data-type="uppercase" class="action-btn">Buyuk harf Yap</button>
    <hr>
    <br>
    <div id="preview"></div>

    {{-- <input type="number" value="2"> --}}
    {{-- <input type="number" id="numberInput" value="2" min="0" max="10" step="2" /> --}}

    <input class="test color" type="color"> <br>
    <input class="test time" type="time" " max=" 17:00" step="900"><br>
    <input class="test date" type="date" " max=" 2019-12-25" step="7"><br>
    <input class="test " type="month"" max=" 2019-12" step="12"><br>
    <input type="file" class="file"><br>
    <input class="test" type="number" max="50" step="5"><br>
    <input class="test" type="range"" value=" 1" max="10" min="-4">



    <hr>
    <button id="decrement">azalt</button>
    <button id="increment">arttir</button>
    <button id="picker-btn">ac</button>

    <br>
    <script>
        const textarea = document.querySelector('textarea')
const actionButtons = document.querySelectorAll('.action-btn')

actionButtons.forEach(button => {
    button.addEventListener('click', e => {
       let selectedText = textarea.value.substring(
        textarea.selectionStart,
        textarea.selectionEnd
       )

       switch(e.target.dataset.type){
            case 'bold':
                selectedText = `<b>${selectedText}</b>`
                break
            case 'italic':
                 selectedText = `<i>${selectedText}</i>`
                break
            case 'uppercase':
                 selectedText = selectedText.toLocaleUpperCase('TR')
                break
       }

        textarea.setRangeText(
            selectedText,
            textarea.selectionStart,
            textarea.selectionEnd,
            'select'
            //"start"
            //'end'  
        );
        textarea.focus();
        preview.innerHTML = textarea.value;
        //console.log(e.target.dataset.type);
    });
});

textarea.addEventListener('keyup', e => {
    preview.innerHTML = e.target.value;
})







<div class="m-7">
    <form method="" action="{{route('about')}}" id="form1" novalidate>
        {{-- @csrf --}}
        <input type="text" value="test" name="username" class="border-2 border-red-800 rounded-md" placeholder="Ad"
            maxlength="10" required><br>
        <input type="email" name="email" class="border-2 border-green-600 rounded-md" placeholder="E-mail" minlength="3"
            required><br>
        <input pattern="[0-9]+" type="password" name="password" class="border-2 border-indigo-500 rounded-md"
            placeholder="Password" minlength="6" required><br>
        <input type="number" min="18" max="30" step="2" placeholder="Yas" required><br>
        <textarea name="about" cols="30" rows="10" minlength="50" placeholder="Lütfen hakkında bir şeyler girin"
            required></textarea><br>


        {{-- <button type="submit" class="border-2 border-red-600">Gonder</button> --}}
        {{-- <input type="submit" class="border-2 border-red-600"> --}}
        <button type="submit" class="border-2 border-red-600">Submit</button>
        {{-- <button id="submit-btn" type="button" class="border-2 border-red-600">Gonder</button> --}}
        <button id="reset-btn" type="button" class="border-2 border-red-600">Sifirla</button>
    </form>
</div>

<hr>
<br>
<button id="test">test button</button>
<hr>
<br>

<div class="tab">
    <nav>
        <button>Tab 1</button>
        <button>Tab 2</button>
        <button>Tab 3</button>
    </nav>
    <div class="contents">
        <section>content 1</section>
        <section>content 2</section>
        <section>content 3</section>
    </div>
</div>

{{-- <div class="m-7">
    <form method="" action="" id="formTest" novalidate>
        @csrf
        <input type="text" name="username" class="border-2 border-red-800 rounded-md" placeholder="ad"><br>
        <input type="email" name="email" class="border-2 border-green-600 rounded-md" placeholder="email"><br>
        <input type="password" name="passowrd" class="border-2 border-indigo-500 rounded-md" placeholder="password"><br>
        <textarea name="about" id="" cols="30" rows="10" placeholder="lutfen Hakkinda birseyler girin"></textarea><br>
        <button type="submit" class="border-2 border-red-600">Gonder</button>
    </form>
</div> --}}


<script

// const inputNumber = document.querySelector('input[type="number"]');
//     const incrementBtn = document.getElementById('increment');
//     const decrementBtn = document.getElementById('decrement');
    
//     incrementBtn.addEventListener('click', e => {
//     inputNumber.stepUp();
//     });
    
//     decrementBtn.addEventListener('click', e => {
//     inputNumber.stepDown();
//     });
</script>

// const pickerBtn = document.getElementById('picker-btn')
// const timeInput = document.querySelector('.time')
// const dateInput = document.querySelector(".date");
// const fileInput = document.querySelector(".file");
// const colorInput = document.querySelector(".color");


pickerBtn.addEventListener('click', e => {
//timeInput.showPicker()
//dateInput.showPicker()
// fileInput.showPicker()
colorInput.showPicker()
})
    </script>

    <script>
        //console.log('buradaki benim kodlarim dikkat et')
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
    {{-- @vite('resources/js/day25.js') --}}
    {{-- @vite('resources/js/day26.js') --}}


</body>

</html>