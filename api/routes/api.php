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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return "hola";
});


Route::get('categories', 'Controller\CategoriaController@index');
Route::get('categoria/{name}', 'Controller\CategoriaController@show');
Route::get('productes/{categoria}/{subcategoria}', 'Controller\ProducteController@index');
Route::get('producte/{name}', 'Controller\ProducteController@show');
Route::post('productes', 'Controller\ProducteController@cartProducts');


