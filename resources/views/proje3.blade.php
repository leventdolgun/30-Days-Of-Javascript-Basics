<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        span {
            color: #fff;
            text-shadow: 2px 2px 2px black;
        }
    </style>
    @vite('resources/css/style.css')

   
</head>
<body>

    <label>
            <input value="120" type="range" min="0" max="255" id="red">
            <span></span>
        </label>
        
        <label>
            <input value="65" type="range" min="0" max="255" id="green">
            <span></span>
        </label>
        
        <label>
            <input value="200" type="range" min="0" max="255" id="blue">
            <span></span>
        </label>
        
        <label>
            <input value="1" type="range" min="0" max="1" step="0.01" id="alpha">
            <span></span>
        </label>


    @vite('resources/js/day29.js')
</body>
</html>