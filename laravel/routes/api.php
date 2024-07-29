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

Route::apiResource('users', UserController::class);

// Corrected login route
Route::post('login', [UserController::class, 'login'])->name('login');
Route::post('logout', [UserController::class, 'logout'])->name('logout');

Route::middleware('auth:sanctum')->group(function () {
    Route::resource('blogs', BlogController::class);
    // Route::apiResource('users', UserController::class);
    // Route::get('/user', function (Request $request) {
    //     return $request->user();
    // });
});