<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>30 days of Javasript </title>
    @vite('resources/css/app.css')
   <style>
    .active{
        margin: 1px;
        padding: 2px;
        border: 2px;
        border-radius: 5px 5px 5px 5px;
        background-color: #cb1111;
    }
   </style>
</head>

<body>
   <div class="m-7">
    <form method="" action="{{route('about')}}" id="form1" novalidate>
    {{-- @csrf --}}
    <input type="text" value="test" name="username" class="border-2 border-red-800 rounded-md" placeholder="Ad" maxlength="10" required><br>
    <input type="email" name="email" class="border-2 border-green-600 rounded-md" placeholder="E-mail" minlength="3" required><br>
    <input pattern="[0-9]+" type="password" name="password" class="border-2 border-indigo-500 rounded-md" placeholder="Password" minlength="6" required><br>
    <input type="number" min="18" max="30" step="2" placeholder="Yas" required><br>
    <textarea name="about" cols="30" rows="10" minlength="50" placeholder="Lütfen hakkında bir şeyler girin" required></textarea><br>
    
    
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
    {{-- @vite('resources/js/day27.js') --}}
@vite('resources/js/day28.js')


</body>

</html>