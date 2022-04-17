"user strict";

$('.partner-slider').owlCarousel({
  loop:true,
  margin:30,
  autoplay: true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false,
          dots: false
      },
      430:{
        items:2,
        nav:false,
        dots: false
    },
    767:{
        items:3,
        nav:false,
        dots: false
    },
    991:{
        items:3,
        nav:false,
        dots: false
    },
      1199:{
          items:4,
          nav:false,
          loop:false,
          dots: true
      }
  }
})
$('.tweet-slider').owlCarousel({
  loop:true,
  margin:30,
  autoplay: true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          dots: false,
          nav:false
      },
      500:{
        items:1,
        dots: false,
        nav:false
    },
      767:{
          items:2,
          nav:false,
          dots: false
      },
      991:{
        items:2,
        nav:false,
        dots: false
    },
      1199:{
          items:3,
          nav:false,
          dots: false,
          loop:false
      }
  }
})
$('.gallery-slider').owlCarousel({
    loop:true,
    margin:30,
    autoplay: true,
    responsiveClass:true,
    setTimeout: 2000,
    responsive:{
        0:{
            items:1,
            dots: false,
            nav:false
        },
        500:{
          items:2,
          dots: false,
          nav:false
      },
        767:{
            items:2,
            nav:false,
            dots: false
        },
        991:{
          items:3,
          nav:false,
          dots: true
      },
        1199:{
            items:4,
            nav:false,
            dots: true,
            loop:false
        }
    }
})
$('.client-slider').owlCarousel({
  loop:true,
  margin:30,
  autoplay: true,
  responsiveClass:true,
  setTimeout: 2000,
  responsive:{
      0:{
          items:1,
          dots: false,
          nav:false
      },
      500:{
        items:1,
        dots: false,
        nav:false
    },
      767:{
          items:1,
          nav:false,
          dots: false
      },
      991:{
        items:1,
        nav:false,
        dots: false
    },
      1199:{
          items:1,
          nav:false,
          dots: false,
          loop:false
      }
  }
})

var one = $("#one");
var two = $("#two");
var three = $("#three");
var four = $("#four");
var five = $("#five");
var six = $("#six");
one.owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:5
      }
  }
})
two.owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  })

  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }