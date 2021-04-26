<?php

namespace App\Http\Controllers;
use App\Models\Admin;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function getName(Request $request){
        $admin = new Admin;
        $table = $admin::where('email', $request->email)->first();
        return $table;
        
    }
}
