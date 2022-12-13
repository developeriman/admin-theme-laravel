@extends('frontend.layouts.main')
@section('content')
<head>
    <link rel="stylesheet" href="{{ asset('frontend/css/style-mcanvas.css') }}">
</head>
<nav class="mc-nav">
    <img src="{{asset('frontend/img/mcanvas-images/mcanvas-logo.png')}}">
</nav>
<div class="section-1">
    <img src="{{asset('frontend/img/mcanvas-images/welcome-img-mcanvas.png')}}">
</div>
<div class="section-2">
    <div class="s2-left-container">
        <h1>The creative</h1>
        <p>ideating and designing a good creative for mobile is a time-consuming and costly affair. we understand
            that brand marketers are often overwhelmed with demanding workloads, and ultimately end up creating
            simple, non-engaging standard banner ads.
            <br><br>leverage mCanvas’ in-house expert creative team who has skillfully and seamlessly delivered over
            1000 campaigns to consumers across India. our unique ads for mobile use 50+ powerful smartphone sensors
            and features to create a significant impact on your brand metrics.
        </p>
    </div>
    <div class="s2-right-img-container">
        <img src="{{asset('frontend/img/mcanvas-images/section2-img.png')}}">
    </div>
</div>
<div class="section-3-container">
    <div class="section-3">
        <h1>Choose from over 50+ mobile-friendly sensors and features</h1>
        <p class="s3-vid-title">tilt</p>
        <button class="btn-smile"><img src="{{asset('frontend/img/mcanvas-images/section-3/smile.png')}}"></button>
        <button class="btn-charge"><img src="{{asset('frontend/img/mcanvas-images/section-3/charge.png')}}"></button>
        <button class="btn-game"><img src="{{asset('frontend/img/mcanvas-images/section-3/game.png')}}"></button>
        <button class="btn-quiz"><img src="{{asset('frontend/img/mcanvas-images/section-3/quiz.png')}}"></button>
        <button class="btn-scratch"><img src="{{asset('frontend/img/mcanvas-images/section-3/scratch.png')}}"></button>
        <button class="btn-vr"><img src="{{asset('frontend/img/mcanvas-images/section-3/vr.png')}}"></button>
        <button class="btn-sound"><img src="{{asset('frontend/img/mcanvas-images/section-3/sound.png')}}"></button>
        <button class="btn-speech_round"><img src="{{asset('frontend/img/mcanvas-images/section-3/speech_round.png')}}"></button>
        <button class="btn-step"><img src="{{asset('frontend/img/mcanvas-images/section-3/step.png')}}"></button>
        <button class="btn-tilt"><img src="{{asset('frontend/img/mcanvas-images/section-3/tilt.png')}}"></button>

        <img class="s3-phone" src="{{asset('frontend/img/mcanvas-images/phone-img.png')}}">
        <video id="dynamic-video" class="videoplayer" autoplay="" webkit-playsinline="" playsinline="" muted=""
            loop="" src="{{asset('frontend/img/mcanvas-images/section-3/Tilt.mp4')}}">

        </video>

    </div>
</div>
<div class="section-4">
    <h1>Targeting Capabilities</h1>
    <div class="s4-left-right-container">
        <div class="s4-left">
            <div class="s4-left-content">
                <h4>Battery</h4>
                <img src="{{asset('frontend/img/mcanvas-images/batterys4.png')}}">
                <p>Target a user basis his phone’s battery life </p>
            </div>
            <div class="s4-left-content">
                <h4>Live score</h4>
                <img src="{{asset('frontend/img/mcanvas-images/livescores4.png')}}">
                <p>Integrate live score on your ads or trigger an ad basis an event in the game</p>
            </div>
            <div class="s4-left-content">
                <h4>Device price</h4>
                <img src="{{asset('frontend/img/mcanvas-images/devprices4.png')}}">
                <p>Devices act as a great proxy to a user’s lifesylte</p>
            </div>
            <div class="s4-left-content">
                <h4>Weather</h4>
                <img src="{{asset('frontend/img/mcanvas-images/weathers4.png')}}">
                <p>Time your ads basis weather conditions to drive relevance</p>
            </div>
            <div class="s4-left-content">
                <h4>Time</h4>
                <img src="{{asset('frontend/img/mcanvas-images/times4.png')}}">
                <p>Time targeted ads encourage a high action rate </p>
            </div>
        </div>
        <div class="s4-right">
            <div class="s4-right-content">
                <img src="{{asset('frontend/img/mcanvas-images/contents4.png')}}">
                <p>Content</p>
            </div>
            <div class="s4-right-content">
                <img src="{{asset('frontend/img/mcanvas-images/retargets4.png')}}">
                <p>Retargeting</p>
            </div>
            <div class="s4-right-content">
                <img src="{{asset('frontend/img/mcanvas-images/carriers4.png')}}">
                <p>Carrier</p>
            </div>
            <div class="s4-right-content">
                <img src="{{asset('frontend/img/mcanvas-images/oss4.png')}}">
                <p>OS</p>
            </div>
            <div class="s4-right-content">
                <img src="{{asset('frontend/img/mcanvas-images/useins4.png')}}">
                <p>User interest</p>
            </div>
            <div class="s4-right-content">
                <img src="{{asset('frontend/img/mcanvas-images/browsers4.png')}}">
                <p>Browser</p>
            </div>
            <div class="s4-right-content">
                <img src="{{asset('frontend/img/mcanvas-images/geos4.png')}}">
                <p>Geo</p>
            </div>
            <div class="s4-right-content">
                <img src="{{asset('frontend/img/mcanvas-images/audience.png')}}">
                <p>Audience</p>
            </div>
            <div class="s4-right-content">
                <img src="{{asset('frontend/img/mcanvas-images/mobile-screen-size.png')}}">
                <p>Mobile screen size</p>
            </div>
            <div class="s4-right-content">
                <img src="{{asset('frontend/img/mcanvas-images/connection-speeds4.png')}}">
                <p>Connection Speed</p>
            </div>
        </div>
    </div>
</div>
<div class="section-5">
    <h1 style="padding-left: 90px;">AD Opportunity</h1>
    <div class="section-5-container">
        <div class="s5-left">
            <h1>FULL PAGE VIDEOS</h1><br><br>
            <img src="{{asset('frontend/img/mcanvas-images/checked-sign.png')}}">
            <span>Auto play video ads between banners</span><br>
            <img src="{{asset('frontend/img/mcanvas-images/checked-sign.png')}}">
            <span>Customizable banner</span><br>
            <img src="{{asset('frontend/img/mcanvas-images/checked-sign.png')}}">
            <span>Interactive videos and jukeboxes</span><br>
            <img src="{{asset('frontend/img/mcanvas-images/checked-sign.png')}}">
            <span>24 hours turn around time</span><br>
        </div>
        <div class="s5-right">
            <div class="mobile-wrapper">
                <iframe width="633" muted="" height="1020" src="{{asset('frontend/img/mcanvas-images/section5.mp4')}}" allowfullscreen=""
                    controls="0" autoplay="0" frameborder="0" scrolling="no"></iframe>
            </div>
        </div>
    </div>
</div>
<div class="section-6">
    <div class="section-6-container">
        <div class="s6-left">
            <div class="mobile-wrapper">
                <iframe width="633" muted="" height="1020" src="{{asset('frontend/img/mcanvas-images/section5.mp4')}}" frameborder="0"
                    allow='autoplay'></iframe>
            </div>
        </div>
        <div class="s6-right">
            <h1>HIGH IMPACT – SINGLE SCREEN INNOVATIONS</h1><br><br>
            <img src="{{asset('frontend/img/mcanvas-images/checked-sign.png')}}">
            <span>occupies 100% of the mobile screen</span><br>
            <img src="{{asset('frontend/img/mcanvas-images/checked-sign.png')}}">
            <span>drives traffic to advertiser landing page</span><br>
            <img src="{{asset('frontend/img/mcanvas-images/checked-sign.png')}}">
            <span>CTR 2x - 4x higher than banner ads</span><br>
            <img src="{{asset('frontend/img/mcanvas-images/checked-sign.png')}}">
            <span>great substitute for 300x250 and 320x480</span><br>
            <img src="{{asset('frontend/img/mcanvas-images/checked-sign.png')}}">
            <span>24 hours turn around time</span><br>

        </div>
    </div>
</div>
<div class="section-5">
    <div class="section-5-container">
        <div class="s5-left">
            <h1>RICH MEDIA – MULTI SCREEN INNOVATION</h1><br><br>
            <img src="{{asset('frontend/img/mcanvas-images/checked-sign.png')}}">
            <span>non-intrusive & seamless appearance</span><br>
            <img src="{{asset('frontend/img/mcanvas-images/checked-sign.png')}}">
            <span>integrates 50+ mobile features and sensors</span><br>
            <img src="{{asset('frontend/img/mcanvas-images/checked-sign.png')}}">
            <span>award winning ad formats</span><br>
            <img src="{{asset('frontend/img/mcanvas-images/checked-sign.png')}}">
            <span>48 to 72 hours turn around time</span><br>
        </div>
        <div class="s5-right">
            <div class="mobile-wrapper">
                <iframe width="633" height="1020" src="{{asset('frontend/img/mcanvas-images/section5.mp4')}}" frameborder="0"
                    allow='autoplay'></iframe>
            </div>
        </div>
    </div>
</div>
<div class="ad-gallery">
    <h1 style="font-size: 40px;">Success Stories</h1>
    <div class="ad-gallery-container">
        <div class="gallery-card-container">
            <div class="gallery-card">
                <img alt="" src="{{asset('frontend/img/mcanvas-images/ss/1.PNG')}}">
                <p>Case Study | Banglalink</p>
            </div>
        </div>
        
    </div>
</div>
<div class="trusted-brands-container">
    <h1><span>TRACK</span> YOUR CAMPAIGNS VIA</h1>
    <div class="swiper mySwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="{{asset('frontend/img/mcanvas-images/sizmek-logo.png')}}"></div>
            <div class="swiper-slide"><img src="{{asset('frontend/img/mcanvas-images/double click.png')}}"></div>
            <div class="swiper-slide"><img src="{{asset('frontend/img/mcanvas-images/dv logo.png')}}"></div>
            <div class="swiper-slide"><img src="{{asset('frontend/img/mcanvas-images/ias logo.png')}}"></div>
            <div class="swiper-slide"><img src="{{asset('frontend/img/mcanvas-images/nielsen-logo.png')}}"></div>
            <div class="swiper-slide"><img src="{{asset('frontend/img/mcanvas-images/moat logo.png')}}"></div>
        </div>

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</div>
<div class="trusted-brands-container">
    <h1>Trusted By <span>Brands</span></h1>
    <div class="swiper2 mySwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="{{asset('frontend/img/Brand_logos/Mcanvas/bl.png')}}" alt=""></div>
            
        </div>

    </div>
</div>

@endsection