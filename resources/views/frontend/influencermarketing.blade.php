
@extends('frontend.layouts.main')
@section('content')
<head>
    <link rel="stylesheet" href="{{ asset('frontend/css/infulencer.css') }}">
</head>
<nav><img src="{{asset('frontend/img/inf/logo.png')}}"></nav>
  <!-- This is Section 1 -->
  <div class="section1">
    <div class="s1-left-container">
      <img src="{{asset('frontend/img/inf/s1-img.png')}}">
    </div>
    <div class="s1-right-container">
      <h1>Promote your brand with Influencer Marketing Programs</h1>
      <p>Influencer Marketing is the most lively way to interact your TG rather than any other ad format. Reach the
        right audience for your brand through Influencer Marketing in Bangladesh. Get access to data-driven insight and
        earn high ROI</p>
    </div>
  </div>
  <!-- This is Section 2 -->
  <div class="section2">
    <h1>OUR <span style="color: rgb(68, 114, 196);">OFFERINGS</span></h1>
    <div class="s2-img-div">
      <img src="{{asset('frontend/img/inf/section2-1.png')}}" alt="section2">
    </div>
  </div>
  <!-- This is Section 3 -->
  <div class="section3">
    <div class="s3-top-container">
      <div class="s3-left">
        <h2>TRADITIONAL<br>INFLUENFER MARKETING</h2><br>
        <ul>
          <li>Heavily dependent on the agencies. Person to person communication. More instinct based approach.</li>
          <li>No particular or data driven analysis for selection and their audiences (The interest group which they are
            based on)</li>
          <li>Lack of data tracking</li>
        </ul>
      </div>
      <div class="s3-right">
        <h2>DATA DRIVEN<br>INFLUENFER MARKETING</h2><br>
        <ul>
          <li>Data driven approach throughout the journey for better ROI and campaign optimization.
          </li>
          <li>Custom influencer search based on audience demographics, reach, and previous campaign analysis.</li>
          <li>LIVE performance tracking through OVONTS platforms</li>
        </ul>
      </div>
    </div>
    <div class="s3-bottom-img">
      <img src="{{asset('frontend/img/inf/section3-img.png')}}">
    </div>
  </div>
  <!-- This is Section 4 -->
  <div class="section4">
    <h1>WORK FLOW</h1>
    <div class="s4-img">
      <img src="{{asset('frontend/img/inf/section4.png')}}" alt="">
    </div>
  </div>

  <div class="section5">
    <img src="{{asset('frontend/img/inf/ovonts-logo.png')}}">
    <div class="s5-content">
      <div class="s5-left">
        <p><span style="color: red;">Ovonts</span> Unify is a SaaS based influencer management and social commerce
          enablement solution. Ovonts is on a mission to build the underlying infrastructure for social
          commerce.<br><br>
          We have an unified platform to discover influencers & brand handles, create lists, create campaigns through
          creator CRM and social campaign analytics
          <br><br>
          Enable Commerce through embedded links
          <br><br>
          Optimize campaigns through analytics & conversion events intelligence for audience segmentation
        </p>
      </div>
      <div class="s5-right">
        <img src="{{asset('frontend/img/inf/s5-img.png')}}">
      </div>
    </div>

  </div>
  <!-- This is Section 6 -->
  <div class="section6">
    <div class="s6-container">
      <div class="s6-buttons">
        <button id="btn1"><img src="{{asset('frontend/img/inf/btn1.svg')}}"> Discover</button>
        <button id="btn2"><img src="{{asset('frontend/img/inf/btn2.svg')}}"> Create</button>
        <button id="btn3"><img src="{{asset('frontend/img/inf/btn3.svg')}}"> Enable Commerce</button>
        <button id="btn4"><img src="{{asset('frontend/img/inf/btn3.svg')}}"> Measure & Optimize</button>
      </div>
      <div class="s6-img-container">
        <img id="s6-dynamic-img" src="{{asset('frontend/img/inf/1Discoverhomepage.png')}}">
      </div>
    </div>
  </div>
  <!-- This is Section 7 -->
  <div class="section7">
    <div class="s7-content">
      <div class="s7-left">
        <span>TRACK & MONITOR</span><br>
        <span class="big-text" style="line-height:6vh;">Report & Analytics</span><br>
        <span>Measure your and/or competitors social campaigns and content near real-time. Analyze the impact of your
          social efforts along your marketing funnel. and power your strategy quickly.</span>
      </div>
      <div class="s7-right">
        <img src="{{asset('frontend/img/inf/report&analytispord.png')}}">
      </div>
    </div>
  </div>
  <div class="section8">
    <div class="s8-content">
      <div class="s8-left">
        <img src="{{asset('frontend/img/inf/finalotlanding.png')}}">
      </div>
      <div class="s8-right">
        <span>ENABLE COMMERCE & GROW</span><br>
        <span class="big-text" style="line-height:6vh;">Orchestration<br>Technology</span><br>
        <span>Enable Omni-channel commerce and analyse conversion events real time-transforming social efforts into
          business outcomes Generate embedded links with target destinations, enable commerce, analyze cross-platform
          impact of your campaigns and content and segment.</span>
      </div>
    </div>
  </div>
  {{-- <div class="ad-gallery">
    <h1 style="font-size: 40px;">Campaign Gallery</h1>
    <div class="ad-gallery-container">
      <div class="gallery-card-container">
        <div class="gallery-card">
          <img alt="" src="../images/endcard-1.jpg">
          <p>Brothers Movie | Calendar Event</p>
        </div>
      </div>
      <div class="gallery-card-container">
        <div class="gallery-card">
          <img alt="" src="../images/endcard-2.jpg">
          <p>Nikon | Gallery</p>
        </div>
      </div>
      <div class="gallery-card-container">
        <div class="gallery-card">
          <img alt="" src="../images/endcard-3.jpg">
          <p>ICICI Prudential | Click-to-call</p>
        </div>
      </div>
      <div class="gallery-card-container">
        <div class="gallery-card">
          <img alt="" src="../images/endcard-4.jpg">
          <p>CEAT | Store Locator</p>
        </div>
      </div>
      <div class="gallery-card-container">
        <div class="gallery-card">
          <img alt="" src="../images/endcard-5.jpg">
          <p>Last Witch Hunter | Youtube</p>
        </div>
      </div>
      <div class="gallery-card-container">
        <div class="gallery-card">
          <img alt="" src="../images/endcard-6.jpg">
          <p>Kurkure | Social Media</p>
        </div>
      </div>
      <div class="gallery-card-container">
        <div class="gallery-card">
          <img alt="" src="../images/endcard-7.jpg">
          <p>Lava Pixel V2 | Buy Now</p>
        </div>
      </div>
      <div class="gallery-card-container">
        <div class="gallery-card">
          <img alt="" src="../images/endcard-8.jpg">
          <p>Hungama | Click-to-install</p>
        </div>
      </div>
      <div class="gallery-card-container">
        <div class="gallery-card">
          <img alt="" src="../images/endcard-9.jpg">
          <p>Horlicks | Survey</p>
        </div>
      </div>
    </div>
  </div> --}}
  <div class="trusted-brands-container">
    <h1>Trusted By <span>Brands</span></h1>
    <div class="swiper2 mySwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
            <div class="swiper-slide">Slide 4</div>
            <div class="swiper-slide">Slide 5</div>
            <div class="swiper-slide">Slide 6</div>
            <div class="swiper-slide">Slide 7</div>
            <div class="swiper-slide">Slide 8</div>
            <div class="swiper-slide">Slide 9</div>
        </div>
    </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>

<script>
        var swiper2 = new Swiper(".mySwiper", {
          slidesPerView: 6,
          loop: true,
          spaceBetween: 30,
          centeredSlides: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      </script>

  <script>
    $mainGrid = $('.section6')
    var x = screen.width;

    if ($(window).width() <= 600) {
      $mainGrid.css('height', $mainGrid.height() * .35);
    }
    </script>
  <script src="{{asset('frontend/js/influencer.js')}}"></script>
  @endsection