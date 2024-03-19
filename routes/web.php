<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Controller; 


Route::get('/', [Controller::class, 'inicio'])->name('inicio');
Route::get('/estado', [Controller::class, 'index'])->name('estado');