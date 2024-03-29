@extends('frontend.layouts.main')
@section('content')
<head>
  <link rel="stylesheet" href="{{ asset('frontend/css/likee-style-default.css') }}">
</head>
<nav>
    <img style="width: 100%;" src="{{asset('frontend/img/likee-images/nav.png')}}" alt="">
  </nav>
  <div class="container">
    <div class="row w-75 m-auto text-center mt-5">
      <h3>Likee was first released in July 2017 and is now one of the world's most popular applications.</h3>
    </div>
    <div class="row justify-content-center align-items-center mb-5">
      <div class="col-12 col-sm-3 text-center">
        <img class="w-25" src="{{asset('frontend/img/likee-images/s1-1.png')}}">
        <p>MAU 100 million+ Worldwide</p>
        <p>MAU 12 million+ in Bangladesh</p>
      </div>
      <div class="col-12 col-sm-3 text-center">
        <img class="w-25" src="{{asset('frontend/img/likee-images/s1-2.png')}}">
        <p>NO.1</p>
        <p>Top 10 Breakout Apps in 2019</p>
      </div>
      <div class="col-12 col-sm-3 text-center">
        <img class="w-25" src="{{asset('frontend/img/likee-images/s1-3.png')}}">
        <p>NO.4</p>
        <P>The Most Downloaded Social Media App</P>
        <p>Worldwide in Jan 2020</p>
      </div>
    </div>
  </div>
  <section class="section-2">
    <div class="container">
      <div class="row ">
        <div class="col-12 col-md-7 d-flex align-items-center justify-content-center">
          <img style="width: 80%;" src="{{asset('frontend/img/likee-images/s2.png')}}">
        </div>
        <div class="col-12 col-md-5 d-flex flex-column justify-content-center">
          <h3 class="mb-5">Likee Product Features</h3>
          <h5>Tech-enabled special effects</h5>
          <p class="mb-3 text-secondary">Thousands of stickers and magical emojis let you shoot blockbuster videos on
            your mobile phone.</p>
          <h5>Multiple and diversified culture</h5>
          <p class="mb-3 text-secondary">Combine the cultural features of each area to set a variety of local content
            activities.</p>
          <h5>Interactive live experience</h5>
          <p class="mb-3 text-secondary">With BIGO's strengths in live-broadcasting operations, users can chat with the
            live broadcasters in real-time.</p>
        </div>
      </div>
    </div>
  </section>
  <section class="section-2">
    <div class="container">
      <div class="row d-flex">
        <div class="col-12 col-md-5 d-flex flex-column justify-content-center">
          <h3 class="mb-5 mt-3">Our Business Value</h3>
          <h5>Great user value</h5>
          <p class="mb-3 text-secondary">Likee has user characteristics of high activity, high participation, and high
            dissemination, which has broadened its business value.</p>
          <h5>Everyone is a creator</h5>
          <p class="mb-3 text-secondary">Likee has incubated a diversified content ecology, spawning a wave of creative
            creation for all.</p>
          <h5>Highly loyal and interactive community</h5>
          <p class="mb-3 text-secondary">On Likee, KOLs maintain a positively sticky relationship with fans, which shows
            a powerful business impact.</p>
        </div>
        <div class="col-12 col-md-7 d-flex align-items-center justify-content-center ">
          <img style="width: 100%;" src="{{asset('frontend/img/likee-images/s3.png')}}">
        </div>
      </div>
    </div>
  </section>
  <div class="first-inner">


    <div class="tab-wrap">
      <div class="tab-box">
        <ul id="tabs" class="tab-bar clear">
          <li class="show" enkey="lang124">SuperView</li>
          <li enkey="lang129">Brand Takeover</li>
          <li enkey="lang134">In-Feed Ad</li>
          <li enkey="lang139">Hashtag Challenge</li>
          <li enkey="lang145">Branded Effect</li>
        </ul>
        <div class="line1"></div>
        <div class="tab-list">
          <div class="tab-item show">
            <div>
              <div class="section6-box">
                <div class="production6">
                  <div class="first-content-video">
                    <video id="my-player0" class="video-js" muted loop autoplay preload="auto"
                      poster="https://static-web.likeevideo.com/as/common-static/ads-home/videos/likee_cover1.png"
                      data-setup="{}">
                      <source src="https://static-web.bigolive.tv/as/common-static/ads-home/videos/SuperView6.mp4"
                        type="video/mp4" />
                      <p class="vjs-no-js">
                        To view this video please enable JavaScript, and consider
                        upgrading to a web browser that
                        <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                      </p>
                    </video>
                  </div>
                  <img src="{{asset('frontend/img/likee-images/10.e8ab565.png')}}" class="img7"> </img>
                  <div class="performance-box">
                    <div class="s6w1" enkey="lang124">SuperView</div>
                    <div class="s6w2" enkey="lang125">SuperView Ads presents your brand story with intense visual
                      immersion, boosting exposure, and recognition.</div>
                    <div class="line2"> </div>
                    <div class="s6w3" enkey="lang126">Tell your brand story with Likee's premium resource, impressing
                      the audience with narratives.</div>
                    <div class="s6w4" enkey="lang127">10 to 60 seconds of full-screen and vertical video, auto-play with
                      sound.</div>
                    <div class="s6w6" enkey="lang128">Highly recommended creating buzz around brand important occasions,
                      such as brand big day, cultural festival, new product launch, E-Commerce discounted promotion,
                      etc.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-item">
            <div>
              <div class="section6-box">
                <div class="production6">
                  <div class="first-content-video">
                    <video id="my-player1" class="video-js" muted loop autoplay preload="auto"
                      poster="https://static-web.likeevideo.com/as/common-static/ads-home/videos/likee_cover2.png"
                      data-setup="{}">
                      <source src="https://static-web.bigolive.tv/as/common-static/ads-home/videos/Brand_Takeover6.mp4"
                        type="video/mp4" />
                      <p class="vjs-no-js">
                        To view this video please enable JavaScript, and consider
                        upgrading to a web browser that
                        <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                      </p>
                    </video>
                  </div>
                  <img src="{{asset('frontend/img/likee-images/11.49bdead.png')}}" class="img7"> </img>
                  <div class="performance-box">
                    <div class="s6w1" enkey="lang129">Brand Takeover</div>
                    <div class=s6w2 enkey="lang130">
                      Brand takeover Ads is placed in the first screen when you open
                      Likee app, it delivers your brand story to wide audiences in an
                      impressive way as well as increases brand awareness in exclusive
                      exposure.
                    </div>
                    <div class=line2> </div>
                    <div class=s6w3 enkey="lang131">
                      Boldly show your brand image on Likee’s first screen,
                      preemptively draw targeting the audience's attention.
                    </div>
                    <div class=s6w4 enkey="lang132">
                      3 seconds long JPG or up to 6 seconds long video (skip-able)
                      are both supported
                    </div>
                    <div class=s6w6 enkey="lang133">
                      Full-screen display, simply and impressively touch users’ heart
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div class="tab-item">
            <div>
              <div class="section6-box">
                <div class="production6">
                  <div class="first-content-video">
                    <video id="my-player2" class="video-js" muted loop autoplay preload="auto"
                      poster="https://static-web.likeevideo.com/as/common-static/ads-home/videos/likee_cover3.png"
                      data-setup="{}">
                      <source src="https://static-web.bigolive.tv/as/common-static/ads-home/videos/In_feed_video7.mp4"
                        type="video/mp4" />
                      <p class="vjs-no-js">
                        To view this video please enable JavaScript, and consider
                        upgrading to a web browser that
                        <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                      </p>
                    </video>
                  </div>
                  <img src="{{asset('frontend/img/likee-images/12.82cf556.png')}}" class="img7"> </img>
                  <div class="performance-box">
                    <div class="s6w1" enkey="lang134">In-feed video</div>
                    <div class=s6w2 enkey="lang135">
                      In-feed video ad is a full-screen and story-telling video embedded
                      in “Popular” & “nearby” feeds, show your brand story in a native
                      and fluent way
                    </div>
                    <div class=line2> </div>
                    <div class=s6w3 enkey="lang136">
                      Multiple buttons or slide left will direct users to the landing page
                    </div>
                    <div class=s6w4 enkey="lang137">
                      5 to 30-second (15s or more is recommended), full-screen video
                      format, auto play, sound on
                    </div>
                    <div class=s6w6 enkey="lang138">
                      Flexibly highlight and dynamically convey brand features, meet
                      all kinds of marketing needs
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div class="tab-item">
            <div>
              <div class="section6-box">
                <div class="production6">
                  <div class="first-content-video video-js-2">
                    <img class="cover-img" src="{{asset('frontend/img/likee-images/challenge.99d9f35.png')}}" />
                    <!-- <video
                      id="my-player3"
                      class="video-js"
                      muted
                      poster="https://static-web.bigolive.tv/as/common-static/ads-home/videos/cover3.jpg"
                      data-setup="{}"
                    >
                      <source
                        src="https://static-web.bigolive.tv/as/common-static/ads-home/videos/hashtage_challenge2.mp4"
                        type="video/mp4"
                      />
                      <p class="vjs-no-js">
                        To view this video please enable JavaScript, and consider
                        upgrading to a web browser that
                        <a
                          href="https://videojs.com/html5-video-support/"
                          target="_blank"
                          >supports HTML5 video</a
                        >
                      </p>
                    </video> -->
                  </div>
                  <img src="{{asset('frontend/img/likee-images/13.7356f8d.png')}}" class="img7"> </img>
                  <div class="performance-box">
                    <div class="s6w1" enkey="">Hashtag Challenge</div>
                    <div class=s6w2 enkey="lang140">
                      Likee hashtag challenge is an interactive branded campaign to
                      generate large exposure and attraction for brands by attracting
                      users to create content with a particular theme
                    </div>
                    <div class=line2> </div>
                    <div class=s6w3 enkey="lang142">
                      DEEP INTERACTION: Deep connection with large users through
                      creative interaction
                    </div>
                    <div class=s6w4 enkey="lang143">
                      PREMIUM RESOURCES: Official gold resources help the brand to
                      be famous and go viral
                    </div>
                    <div class=s6w6 enkey="lang144">
                      UGC INSPIRATION: Multi methods motivate users to create
                      massive brand content
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div class="tab-item">
            <div>
              <div class="section6-box">
                <div class="production6">
                  <div class="first-content-video video-js-2">
                    <video id="my-player3" class="video-js" muted loop autoplay preload="auto"
                      poster="https://static-web.likeevideo.com/as/common-static/ads-home/videos/likee_cover4.png"
                      data-setup="{}">
                      <source src="https://static-web.bigolive.tv/as/common-static/ads-home/videos/Branded_Effect6.mp4"
                        type="video/mp4" />
                      <p class="vjs-no-js">
                        To view this video please enable JavaScript, and consider
                        upgrading to a web browser that
                        <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                      </p>
                    </video>
                  </div>
                  <img src="{{asset('frontend/img/likee-images/14.34987b2.png')}}" class="img7"> </img>
                  <div class="performance-box">
                    <div class="s6w1" enKey="">Branded Effect</div>
                    <div class=s6w2 enKey="lang146">
                      Likee branded effect fuel up user creativity with cutting-edge
                      special effects video shooting and editing tools
                    </div>
                    <div class=line2> </div>
                    <div class=s6w3 enKey="lang147">
                      Abundant and funny branded effects we can support, stickers,
                      multi results, make up etc
                    </div>
                    <div class=s6w4 enKey="lang148">
                      With these brilliant effects, everyone can create high-quality
                      brand videos
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="move-top">
    <div class="ad-gallery">
      <h1 style="font-size: 40px;">Success Stories</h1>
      <div class="ad-gallery-container">
        <div class="gallery-card-container">
          <div class="gallery-card">
            <img alt="" src="{{asset('frontend/img/likee-images/ss/1.PNG')}}">
            <p>Case Study | Berger</p>
          </div>
        </div>
        <div class="gallery-card-container">
          <div class="gallery-card">
            <img alt="" src="{{asset('frontend/img/likee-images/ss/2.PNG')}}">
            <p>Case Study | Samsung</p>
          </div>
        </div>
        <div class="gallery-card-container">
          <div class="gallery-card">
            <img alt="" src="{{asset('frontend/img/likee-images/ss/3.PNG')}}">
            <p>Case Study | Vivo</p>
          </div>
        </div>
        
      </div>
    </div>
    <div class="trusted-brands-container">
      <h1>Trusted By <span>Brands</span></h1>
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="{{asset('frontend/img/Brand_logos/Likee/Berger.png')}}" alt=""></div>
          <div class="swiper-slide"><img src="{{asset('frontend/img/Brand_logos/Likee/grameen.png')}}" alt=""></div>
          <div class="swiper-slide"><img src="{{asset('frontend/img/Brand_logos/Likee/macro.png')}}" alt=""></div>
          <div class="swiper-slide"><img src="{{asset('frontend/img/Brand_logos/Likee/marks.png')}}" alt=""></div>
          <div class="swiper-slide"><img src="{{asset('frontend/img/Brand_logos/Likee/samsung.jpg.png')}}" alt=""></div>
          <div class="swiper-slide"><img src="{{asset('frontend/img/Brand_logos/Likee/vivo.png')}}" alt=""></div>
        
        </div>
      </div>
    </div>
    <div class="section sixth-section">
      <div class="sixth-inner">
        <!-- lottie动画 -->
        <div class="sixth-content-lottie"></div>
        <div class="sixth-title" style="display: flex; justify-content: center;">
          <h1>Let's go Big with</h1><img style="margin-left: 15px; " src="{{asset('frontend/likee-images/likee-logo.png')}}">
        </div>
      </div>
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
  <script>
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 6,
      loop: true,
      spaceBetween: 30,
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
    delay: 1500,
  },
      
    });
  </script>
  @endsection