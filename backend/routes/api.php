<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClubController;
use App\Http\Controllers\JugadorController;
use App\Http\Controllers\LigaController;

// GLOBAL: - without acess
Route::get('clubes', [ClubController::class, 'index']);
Route::get('clubes/{id}', [ClubController::class, 'show']);

Route::get('jugadores', [JugadorController::class, 'index']);
Route::get('jugadores/{jugador}', [JugadorController::class, 'show']);

Route::get('ligas', [LigaController::class, 'index']);
Route::get('ligas/{liga}', [LigaController::class, 'show']);

// PRIVATE: - ADMIN Access (X-User-Role)
Route::middleware([\App\Http\Middleware\AdminMiddleware::class])->group(function () {

    Route::post('clubes', [ClubController::class, 'store']);
    Route::put('clubes/{id}', [ClubController::class, 'update']);
    Route::delete('clubes/{id}', [ClubController::class, 'destroy']);

    Route::post('jugadores', [JugadorController::class, 'store']);
    Route::put('jugadores/{id}', [JugadorController::class, 'update']);
    Route::delete('jugadores/{id}', [JugadorController::class, 'destroy']);

    Route::post('ligas', [LigaController::class, 'store']);
    Route::put('ligas/{id}', [LigaController::class, 'update']);
    Route::delete('ligas/{id}', [LigaController::class, 'destroy']);
});