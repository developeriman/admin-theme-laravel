<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function home()
    {
        return view('frontend.index');
    }
    public function pokkt()
    {
        return view('frontend.pokkt');
    }
    public function imo()
    {
        return view('frontend.imo');
    }
}
