<script>
    const toogleButton = document.getElementsByClassName('toggle-button-menu')[0]
    const navbarLinks = document.getElementsByClassName('navbar-links')[0]
    toogleButton.addEventListener('click', () => {
      navbarLinks.classList.toggle('active')
    })
  </script>
  <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
  <script>
    const swiper2 = new Swiper('.swiper', {
      loop: true,
      // autoplay: {
      //   delay: 2600,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: '.swiper-pagination',
        cliclable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

  </script>
  <script>
    AOS.init({
      once: true,
      offset: 200,
      duration: 500
    });
  </script>
  <script src="https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js"></script>
  <script src="https://unpkg.com/tippy.js@6/dist/tippy-bundle.umd.js"></script>
  <script>
    tippy('.reach-logo-1', {
      touch: false,
      theme: 'light',
      interactive: true,
      allowHTML: true,
      content: '<div style="text-align:center;"><h3>imo</h3> No. 1 Messenger App <br> Monthly Active User: 44 Million+ <br><a style="all: revert; text-decoration: none; color: rgb(12, 114, 113); font-weight: bold;" href="/imo.html">Read More</a><div>',
    }); tippy('.reach-logo-2', {
      theme: 'light',
      interactive: true,
      allowHTML: true,
      touch: false,
      content: '<div style="text-align:center;"><h3>Likee</h3> A prominent global short video creation platform <br> Monthly Active User: 12 Million+ <br><a style="all: revert; text-decoration: none; color: rgb(12, 114, 113); font-weight: bold;" href="/likee.html">Read More</a><div>',
    }); tippy('.reach-logo-3', {
      theme: 'light',
      interactive: true,
      allowHTML: true,
      touch: false,
      content: '<div style="text-align:center;"><h3>Appnext</h3>Leading global app discovery platform powering over 6.5B daily app recommendations worldwide <br><a style="all: revert; text-decoration: none; color: rgb(12, 114, 113); font-weight: bold;" href="/appnext.html">Read More</a><div>',
    }); tippy('.reach-logo-4', {
      theme: 'light',
      interactive: true,
      allowHTML: true,
      touch: false,
      content: '<div style="text-align:center;"><h3>mCanvas</h3>Most premium ad service provider in Bangladesh who serves only interstitial which is the most effective ad type.<br><a style="all: revert; text-decoration: none; color: rgb(12, 114, 113); font-weight: bold;" href="/mcanvas.html">Read More</a><div>',
    }); tippy('.reach-logo-5', {
      theme: 'light',
      interactive: true,
      allowHTML: true,
      touch: false,
      content: '<div style="text-align:center;"><h3>Yahoo</h3>A full-stack platform to grow businesses and drive more meaningful connections across advertising, search and media.<br><a style="all: revert; text-decoration: none; color: rgb(12, 114, 113); font-weight: bold;" href="/yahoo/yahoo.html">Read More</a><div>',

    }); tippy('.reach-logo-6', {
      theme: 'light',
      interactive: true,
      allowHTML: true,
      touch: false,
      content: '<div style="text-align:center;"><h3>Sizmek</h3>A global, multichannel ad server used to create, distribute, customize, measure,  track and optimize campaigns across a variety of screens<br><a style="all: revert; text-decoration: none; color: rgb(12, 114, 113); font-weight: bold;" href="/Sizmek/sizmek.html">Read More</a><div>',
    });
    tippy('.reach-logo-7', {
      theme: 'light',
      interactive: true,
      allowHTML: true,
      touch: false,
      content: '<div style="text-align:center;"><h3>Influencer Marketing</h3>Reach the right audience for your brand through Influencer Marketing in Bangladesh. Get access to data-driven insight and earn high ROI.<br><a style="all: revert; text-decoration: none; color: rgb(12, 114, 113); font-weight: bold;" href="/InfluencerMarketing/influencer.html">Read More</a><div>',
    }); tippy('.reach-logo-8', {
      theme: 'light',
      interactive: true,
      allowHTML: true,
      touch: false,
      content: '<div style="text-align:center;"><h3>Pokkt</h3>One-stop solution for mobile In-game & Web advertising <span style="font-weight: bold">Monthly Active User:</span> 41 Million+<br><a style="all: revert; text-decoration: none; color: rgb(12, 114, 113); font-weight: bold;" href="/pokkt.html">Read More</a><div>',
    }); tippy('.reach-logo-9', {
      theme: 'light',
      interactive: true,
      allowHTML: true,
      touch: false,
      content: '<div style="text-align:center;"><h3>MIQ</h3>Your programmatic media partner Drive the outcomes that matter to you with better connected marketing.<br><a style="all: revert; text-decoration: none; color: rgb(12, 114, 113); font-weight: bold;" href="/miq/index.html">Read More</a><div>',
    }); tippy('.reach-logo-10', {
      theme: 'light',
      interactive: true,
      allowHTML: true,
      touch: false,
      content: '<div style="text-align:center;"><h3>EspnCricinfo</h3>Largest sports news website, that features news, articles, live coverage exclusively for the game of cricket.<br><span style="font-weight: bold">Monthly Active User:</span> 26 Million+<br><a style="all: revert; text-decoration: none; color: rgb(12, 114, 113); font-weight: bold;" href="/espn/espn.html">Read More</a><div>',
    }); tippy('.reach-logo-11', {
      theme: 'light',
      interactive: true,
      allowHTML: true,
      touch: false,
      content: '<div style="text-align:center;"><h3>Gupshup</h3>World’s Leading Conversational Messaging Platform for commerce, marketing and support <a style="all: revert; text-decoration: none; color: rgb(12, 114, 113); font-weight: bold;" href="/gupshup.html">Read More</a><div>',
    });
  </script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
    crossorigin="anonymous"></script>