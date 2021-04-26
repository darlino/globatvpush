<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BlogPosts;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Image;
class BlogPostsController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $post = new BlogPosts;
        return $post::all()->take(6);
    }

    public function retrieveAllposts(){
        $post = new BlogPosts;
        return $post::all();
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {


        //$filename = $request->file('image');
        //$filePath = date('His') . $filename;


        if($request->hasFile('image')){
            $validator = Validator::make($request->all(),[
                'title' => 'required',
                'description' => 'required',
                'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:4048',
            ]);

            if($validator->fails()){
                return response()->json([
                    "message" => " please fill all the inputs below and be sure that the images are in this format (jpeg,png,jpg,gif,svg) and the size does not exceed 4mo"
                ]);
            }

            $path = Storage::putFile('public', $request->file('image'));

            $articles = new BlogPosts;

            $articles->title = $request->title;
            $articles->description = $request->description;
            $articles->file_path = $path;
            $articles->save();

            $url = Storage::url($path);
            return response()->json([
                "status_code" => "200",
                "message" => "your image as beeen uploaded great"
            ]);
        }

        else{
            return "please upload an image";
        }



        // if($request->hasFile('image')){
        //     // $file = $request->file('image');
        //     // $filename = $file->getClientOriginalName();
        //     // $finalName = date('His') . $filename;

        //     // $request->file('image')->storeAs('img/', $finalName , 'public');

        //     // return response()->json(["message" => "succesfully upload the image"]);


        // }

        // else{
        //     return response()->json($request->hasFile('image'));
        // }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $id = $request->id;
        $post = new BlogPosts;
        return $post::where('id',$id)->get();
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
        $validator = Validator::make($request->all(),[
            'title' => 'required',
            'description' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:4048',
        ]);
        $articles =  BlogPosts::find($id);

        if($validator->fails()){
            
            return response()->json([
                "message" => " please fill all the inputs below and be sure that the images are in this format (jpeg,png,jpg,gif,svg) and the size does not exceed 4mo"
            ]);
        }

        $path = Storage::putFile('public', $request->file('image'));
        

        $articles->title = $request->title;
        $articles->description = $request->description;
        $articles->file_path = $path;
        $articles->save();
        
        $url = Storage::url($path);
        return response()->json([
            "status_code" => "200",
            "message" => "your image as beeen uploaded great"
        ]);
    }

    
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $articles = BlogPosts::find($id);
        $articles->delete();
        
        return response()->json([
            "the articles has been deleted"
        ]);
    }
}
