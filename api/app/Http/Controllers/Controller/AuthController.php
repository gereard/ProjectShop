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
            return response()->json($validator->errors());
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



}
