<?php

namespace App\Http\Controllers\Controller;

use App\Models\Contacte;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ContactController extends Controller
{


    public function index()
    {
        $messages = Contacte::orderBy('id','desc')->get();
        return $messages;
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $contacte = new Contacte();
        $contacte->name = $request->name;
        $contacte->email = $request->email;
        $contacte->telefon = $request->telefon;
        $contacte->subject = $request->subject;
        $contacte->message = $request->message;

        $contacte->save();
        return $contacte;
    }

    public function getMessage($id)
    {

        $contacte = Contacte::find($id);
        $contacte->viewed = 1;
        $contacte->save();
        return $contacte;
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

