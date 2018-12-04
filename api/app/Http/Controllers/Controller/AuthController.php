<?php

namespace App\Http\Controllers\Controller;

use App\Models\Categoria;
use App\Models\Subcategoria;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Hash;
use Validator;
use JWTFactory;
use JWTAuth;
use Response;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{


    public function guardRole(Request $request)
    {
        $user = JWTAuth::toUser($request->get('token'));
        $user->admin = false;

        if($user->role == 1){
            $user->admin = true;
        }
        return $user;
    }

    public function signup(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255|unique:users',
            'name' => 'required',
            'password'=> 'required'
        ]);


        if ($validator->fails()) {
            abort(401);
        }


        User::create([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'password' => bcrypt($request->get('password')),
            'role' => 2,
        ]);

        $user = User::first();
        $token = JWTAuth::fromUser($user);

        return Response::json(compact('token'));

    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password'=> 'required'
        ]);
        if ($validator->fails()) {
            abort(401);
        }
        $credentials = $request->only('email', 'password');
        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
        return response()->json(compact('token'));
    }


    public function editUser(Request $request)
    {


        $user = $request->all()["usuari"];


        $validator = Validator::make($user, [
            'name' => 'required',
            'pais' => 'required',
            'cp' => 'required',
            'ciutat' => 'required',
            'direccio' => 'required',
        ]);


        if ($validator->fails()) {
            return abort(401);
        }


        $checkEmail = User::where('email','=',$user["email"])->get();

        if(count($checkEmail) > 0){
            if( $checkEmail[0]->email != $user["email"]){
                return abort(401);
            }
        }

        $savedUser = User::find($user["id"]);
        $savedUser->name = $user["name"];
        $savedUser->email = $user["email"];
        $savedUser->pais = $user["pais"];
        $savedUser->cp = $user["cp"];
        $savedUser->ciutat = $user["ciutat"];

        if(isset($user["password"])){
            if(strlen($user["password"]) < 6){
                return abort(401);
            }
            $savedUser->password =  bcrypt($user["password"]);
        }
        $savedUser->save();
        return User::find($user["id"]);
    }


}
