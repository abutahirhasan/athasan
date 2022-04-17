"user strict";

$('.banner-slider').owlCarousel({
  loop:true,
  margin:40,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false,
          dots: false
      },
      500:{
        items:1,
        nav:false,
        dots: false
    },
      767:{
          items:1,
          nav:false,
          dots: false
      },
      1199:{
          items:1,
          nav:false,
          loop:false,
          dots: true
      }
  }
})
$('.feature-slider').owlCarousel({
  loop:true,
  margin:0,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false,
          dots: false
      },
      500:{
        items:1,
        nav:false,
        dots: false
    },
      767:{
          items:2,
          nav:false,
          dots: false
      },
      991:{
        items:3,
        nav:false,
        loop:false,
        dots: false
    },
      1199:{
          items:4,
          nav:false,
          loop:false,
          dots: false
      }
  }
})
$('.car-rental-wrapper').owlCarousel({
  loop:true,
  margin:20,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false
      },
      500:{
        items:1,
        nav:false,
        dots: false
    },
      767:{
          items:1,
          nav:false,
          dots: false
      },
      1199:{
          items:1,
          nav:false,
          dots: false,
          loop:false,
          autoplay: true
      }
  }
})
$('.sync2').owlCarousel({
  loop:true,
  margin:30,
  responsiveClass:true,
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
          items:3,
          nav:false,
          dots: false
      },
      991:{
        items:4,
        nav:false,
        dots: false
    },
      1199:{
          items:5,
          nav:false,
          dots: true,
          loop:false
      }
  }
})
$('.client-slider').owlCarousel({
  loop:true,
  margin:30,
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
          items:2,
          nav:false,
          dots: true,
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
  //Odometer
  $(".counter-item").each(function () {
    $(this).isInViewport(function (status) {
      if (status === "entered") {
        for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
          var el = document.querySelectorAll('.odometer')[i];
          el.innerHTML = el.getAttribute("data-odometer-final");
        }
      }  
    });
  });
  // external js: isotope.pkgd.js

// init Isotope
var $grid = $('.rooms-list').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

$('.video').magnificPopup({
  type: 'iframe',
  
  
  iframe: {
     markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '<div class="mfp-title">Some caption</div>'+
              '</div>'
  },
  callbacks: {
    markupParse: function(template, values, item) {
     values.title = item.el.attr('title');
    }
  }
  
  
});

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}