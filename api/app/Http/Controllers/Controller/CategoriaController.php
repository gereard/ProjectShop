<?php

namespace App\Http\Controllers\Controller;

use App\Models\Categoria;
use App\Models\Subcategoria;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoriaController extends Controller
{


    public function index()
    {
        $categories = Categoria::with('subcategories')->get();
        return $categories;
    }

    public function subIndex()
    {
        $subcategories = Subcategoria::get();
        return $subcategories;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $categoria = new Categoria();
        $categoria->name = $request->name;
        $categoria->description = $request->description;

        $categoria->save();

        return $categoria;
    }

    public function createSub(Request $request)
    {
        $subCategoria = new Subcategoria();
        $subCategoria->name = $request->name;
        $subCategoria->description = $request->description;
        $subCategoria->idCategoria = $request->idCategoria;
        $subCategoria->save();

        return $subCategoria;
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
        return Categoria::where('name','=',$name)->with('subcategories')->get();
    }


    public function showSub($name)
    {
        return Subcategoria::where('name','=',$name)->get();
    }
    public function getCategoria($id)
    {
        return Categoria::whereId($id)->get();
    }

    public function getSubcategoria($id)
    {
        return Subcategoria::whereId($id)->get();
    }

    public function saveCategory(Request $request){
        if($request->id){
           return $this->update($request, $request->id);
        }else{
           return $this->create($request);
        }
    }

    public function saveSubcategory(Request $request){
        if($request->id){
            return $this->updateSub($request, $request->id);
        }else{
            return $this->createSub($request);
        }
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
        $categoria = Categoria::find($id);
        $categoria->name = $request->name;
        $categoria->description = $request->description;
        $categoria->save();
        return $categoria;
    }

    public function updateSub(Request $request, $id)
    {
        $subcategoria = Subcategoria::find($id);
        $subcategoria->name = $request->name;
        $subcategoria->description = $request->description;
        $subcategoria->idCategoria = $request->idCategoria;
        $subcategoria->save();
        return $subcategoria;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $categoria =  Categoria::find($id);
        $categoria->delete();
        return $this->index();
    }

    public function destroySubcategoria($id)
    {
        $subcategoria =  Subcategoria::find($id);
        $subcategoria->delete();
        return $this->subIndex();
    }
}
