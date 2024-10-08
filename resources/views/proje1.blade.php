<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Proje 1</title>
@vite('resources/css/app.css')
@vite('resources/css/style.css')
</head> 
<body>
    
{{-- <button id="btn" >Gizle/goster</button> --}}
{{-- <button id="btn" data-prototurk="prototurk.com" data-show="Show" data-hide="hide" >
    Gizle
</button> --}}
<button class="btn" data-target="#content" data-prototurk="prototurk.com" data-show="Show" data-hide="hide"></button>
<div id="content">
    bu alan gizli mi gorunur mu ? 
</div>


<hr>

<button class="btn" data-target="#content2"  data-show="Goster" data-hide="Gizle"></button>
<div id="content2">
    bu alan gizli mi gorunur mu ?
</div>


@vite('resources/js/day27.js')
@vite('resources/js/day28.js')
</body>
</html>