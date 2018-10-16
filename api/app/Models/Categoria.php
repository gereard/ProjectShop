<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{

    protected $table = 'categoria';
    public $timestamps = false;


    public function subcategories()
    {
        return $this->hasMany('App\Models\Subcategoria', 'idCategoria');
    }



}
