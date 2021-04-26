<?php

use App\Http\Controllers\AdminLoginController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogPostsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::get("/articles" , [ArticleController::class , 'index']);

Route::get("/articles/{id}" , [ArticleController::class , 'oneArticle']);
Route::post("/login" , [AuthController::class, 'login']);
Route::get("/home_blog_post", [BlogPostsController::class, "index"]);
Route::get('/blog_post', [BlogPostsController::class, "retrieveAllposts"]);
Route::get('/blog_post/{id}', [BlogPostsController::class, "show"]);

Route::post('/admin_login',[AdminLoginController::class , "login"]);
Route::post('/blog_post', [BlogPostsController::class, "store"]);
Route::post('/blog_post/{id}', [BlogPostsController::class , "update"]);
Route::delete('/blog_post/{id}', [BlogPostsController::class , "destroy"]);