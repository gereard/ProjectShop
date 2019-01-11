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

    public function finalitzarCompra(Request $request)
    {
        $obj =  $request->all();
        $idOrder = Orders::count() + 1;

        foreach($obj["products"] as $product){
            $product["stock"] = $product["stock"] - 1;
            if($product["stock"] < 0 ){
                $obj["errorMessage"] = "No hi ha stock de ". $product["name"];
                return $obj;
            }
        }

        foreach($obj["products"] as $product){
            $producte = Producte::find($product["id"]);
            $producte->stock = $producte->stock  -1;
            $producte->save();
        }

        foreach($obj["products"] as $product){
            $order = new Orders();
            $order->idOrder = $idOrder;
            $order->idClient = $obj["idClient"];
            $order->codiPostal = $obj["codiPostal"];
            $order->direccio = $obj["direccio"];
            $order->ciutat = $obj["ciutat"];
            $order->idProducte = $product["id"];
            $order->price = $product["priceDiscount"];
            $order->save();
        }

        $obj["errorMessage"] = "";

        return $obj;
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
