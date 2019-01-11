<?php

namespace App\Http\Controllers\Controller;

use App\Models\Orders;
use App\Models\Producte;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class OrderController extends Controller
{
    public function indexUser($idUser)
    {
        $orders = Orders::where('idClient','=',$idUser)->groupBy('idOrder')->get();
        return $orders;
    }

    public function getAll()
    {
        $orders = Orders::groupBy('idOrder')->get();
        return $orders;
    }

    public function getOrder($idOrder)
    {
        $orders = Orders::where('idOrder','=',$idOrder)->get();

        foreach($orders as $order){
            $producte = Producte::where('id','=',$order->idProducte)->first();
            $order->producte = $producte->name;
        }

        return $orders;
    }
}
