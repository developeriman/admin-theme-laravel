<?php


use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Theme\DashboardController;

Route::get('/cache-clear',function(){
    Artisan::call('config:cache');
    Artisan::call('cache:clear');
    return 'Cache is cleared';
});

Route::get('/pass',[LoginController::class,'pass'])->name('pass');

Route::get('/', function () {
    return view('welcome');
});

Route::group(['prefix' => 'admin'],function(){

    Route::get('/home',[HomeController::class,'index']);
      //----- Admin Auth -----
      Route::get('/login',[LoginController::class,'adminLoginIndex'])->name('admin.login.form');
      Route::post('/login',[LoginController::class,'adminLogin'])->name('adminLogin');

   Route::group([
      'middleware' => ['admin_auth']
  ],function(){
   Route::get('dashboard',[DashboardController::class,'dashboard']);
   // Route::get('/logout',[LoginController::class,'adminLogout']);

});
});


Route::prefix('theme')->group(function(){
    Route::get('dashboard', [DashboardController::class, 'dashboard'])->name('theme.dashboard');
});
