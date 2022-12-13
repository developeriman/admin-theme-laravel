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
    public function likee()
    {
        return view('frontend.likee');
    }
    public function mcanvas()
    {
        return view('frontend.mcanvas');
    }
    public function appnext()
    {
        return view('frontend.appnext');
    }
    public function gupshup()
    {
        return view('frontend.gupshup');
    }
    public function sizmek()
    {
        return view('frontend.sizmek');
    }
    public function espncricinfo()
    {
        return view('frontend.espncricinfo');
    }
    public function influencermarketing()
    {
        return view('frontend.influencermarketing');
    }
    public function yahoo()
    {
        return view('frontend.yahoo');
    }
    public function miq()
    {
        return view('frontend.miq');
    }
}
