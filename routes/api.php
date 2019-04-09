<?php

use Illuminate\Http\Request;

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

Route::post('login', 'AuthController@login');
Route::post('register', 'AuthController@register');
Route::get('events/{eventWithDeleted}', 'EventController@show');
Route::get('users/{user}', 'AuthController@user');
Route::get('events', 'EventController@showAll');


Route::middleware('auth:api')->group(function () {
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('me', 'AuthController@me');
    Route::patch('me', 'AuthController@patchUser');

    Route::post('events', 'EventController@create');
    Route::post('events/{event}/register', 'ParticipationController@create');


    Route::patch('events/{event}', 'EventController@update');
    Route::delete('events/{event}', 'EventController@cancel');
});
