<?php

use App\Http\Controllers\AboutController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/index', function () {
    return view('index');
});

// yapilan ornkelerin hepsi burada indexAll Dikkat Et!
Route::get('/indexAll', function () {
    return view('indexAll');
});

Route::get('/clock', function () {
    return view('clock');
});
Route::get('/dom', function () {
    return view('dom');
});

Route::get('/index', [AboutController::class, 'index'])->name('index');
Route::get('/about', [AboutController::class, 'about'])->name('about');



// proje 1 kesinlikle bak yap dikkat et
Route::get('/proje1', function () {
    return view('proje1');
});

// proje 2 kesinlikle bak dikkat et
Route::get('/proje2', function(){
    return view('proje2');
});

Route::get('/proje3', function(){
    return view('proje3');
});