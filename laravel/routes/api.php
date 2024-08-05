<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Public routes
Route::apiResource('users', UserController::class);

// Login and logout routes
Route::post('login', [UserController::class, 'login'])->name('login');
Route::post('logout', [UserController::class, 'logout'])->name('logout');

// Publicly accessible blogs routes
Route::get('blogs', [BlogController::class, 'index'])->name('blogs.index');
Route::get('blogs/{blog}', [BlogController::class, 'show'])->name('blogs.show');

// Authenticated routes
Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('blogs', BlogController::class)->except(['index', 'show']);
});
