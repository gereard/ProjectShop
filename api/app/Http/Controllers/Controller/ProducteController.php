<?php

namespace App\Http\Controllers\Controller;

use App\Models\Categoria;
use App\Models\Producte;
use App\Models\Subcategoria;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProducteController extends Controller
{


    public function index($categoria, $subcategoria)
    {
        return Producte::join('categoria', 'product.idCategory', '=', 'categoria.id')
            ->join('subcategoria', 'product.idSubcategoria', '=', 'subcategoria.id')
            ->where('categoria.name','=',$categoria)->where('subcategoria.name','=',$subcategoria)->get(['product.*']);
    }

    public function indexHome()
    {
        return Producte::take(4)->get();

    }

    public function finalStock()
    {
        return Producte::where('stock','<',15)->take(10)->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($name)
    {

        return Producte::where('name','=',$name)->get();
    }

    public function cartProducts(Request $request)
    {

        $idProducts =  $request->all();

        $countProducts = [];

        $index = 0;
        foreach($idProducts as $key => $value) {
            $countProducts[$value][$key] = $key;
        }


        $products = Producte::whereIn('id',$idProducts)->get();


        foreach($products as $product){
            if(!empty($countProducts[$product->id])){
                $product->count = count(($countProducts[$product->id]));
            }
        }

        return $products;
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {


    }
}
