<?php

namespace App\Http\Controllers;
use App\Models\Admin;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
class AdminLoginController extends Controller
{
    public function login(Request $request){
        $validator = Validator::make($request->all(),[
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if ($validator->fails()){
            return response()->json(['status_code' =>400, 'message' => 'Bad request' ]);
        }

        $credentials = request(['email','password']);

        if(!Auth::attempt($credentials)){
            return response()->json([
                'status_code' => 500,
                'message' => 'Wrong credentials'
            ]);
        }

        $admin = Admin::where('email', $request->email)->first();
        $tokenResult = $admin->createToken('authToken')->plainTextToken;
 
        return response()->json([
            'status_code' =>'200',
            'token' => $tokenResult
        ]);
    }


















}
