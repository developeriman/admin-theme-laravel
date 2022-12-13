<?php


use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\Frontend\PagesController;
use App\Http\Controllers\Theme\DashboardController;

Route::get('/cache-clear',function(){
    Artisan::call('config:cache');
    Artisan::call('cache:clear');
    return 'Cache is cleared';
});

Route::get('/pass',[LoginController::class,'pass'])->name('pass');

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

Route::get('/', [PagesController::class, 'home'])->name('frontend.home');
Route::get('/pokkt', [PagesController::class, 'pokkt'])->name('frontend.pokkt');
Route::get('/imo', [PagesController::class, 'imo'])->name('frontend.imo');
Route::get('/likee', [PagesController::class, 'likee'])->name('frontend.likee');
Route::get('/mcanvas', [PagesController::class, 'mcanvas'])->name('frontend.mcanvas');
Route::get('/appnext', [PagesController::class, 'appnext'])->name('frontend.appnext');
Route::get('/gupshup', [PagesController::class, 'gupshup'])->name('frontend.gupshup');
Route::get('/sizmek', [PagesController::class, 'sizmek'])->name('frontend.sizmek');
Route::get('/espncricinfo', [PagesController::class, 'espncricinfo'])->name('frontend.espncricinfo');
Route::get('/influencermarketing', [PagesController::class, 'influencermarketing'])->name('frontend.influencermarketing');
Route::get('/yahoo', [PagesController::class, 'yahoo'])->name('frontend.yahoo');
Route::get('/miq', [PagesController::class, 'miq'])->name('frontend.miq');
