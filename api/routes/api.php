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


Route::post('signup', 'Controller\AuthController@signup');

Route::get('users/logout', 'Controller\AuthController@logout');
Route::post('users/authenticate', 'Controller\AuthController@login');
Route::post('users/rolebytoken', 'Controller\AuthController@guardRole');
Route::post('users/signup', 'Controller\AuthController@signup');
Route::post('users/edit', 'Controller\AuthController@editUser');
Route::get('categories', 'Controller\CategoriaController@index');
Route::get('subcategories', 'Controller\CategoriaController@subIndex');
Route::get('categoria/{name}', 'Controller\CategoriaController@show');
Route::get('categoriaById/{id}', 'Controller\CategoriaController@getCategoria');
Route::get('subcategoriaById/{id}', 'Controller\CategoriaController@getSubcategoria');
Route::get('subcategories/{name}', 'Controller\CategoriaController@showSub');
Route::get('productes/{categoria}/{subcategoria}', 'Controller\ProducteController@index');
Route::get('productes/home', 'Controller\ProducteController@indexHome');
Route::get('productes/stock', 'Controller\ProducteController@finalStock');
Route::get('producte/{name}', 'Controller\ProducteController@show');
Route::post('productes', 'Controller\ProducteController@cartProducts');
Route::post('categories/save', 'Controller\CategoriaController@saveCategory');
Route::post('subcategories/save', 'Controller\CategoriaController@saveSubcategory');
Route::get('categories/delete/{id}', 'Controller\CategoriaController@destroy');
Route::get('subcategories/delete/{id}', 'Controller\CategoriaController@destroySubcategoria');





