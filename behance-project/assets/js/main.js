"user strict";

$('.crpto-slider').owlCarousel({
  loop:true,
  margin:80,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false,
          dots: false
      },
      500:{
        items:2,
        nav:false,
        dots: false
    },
      767:{
          items:3,
          nav:false,
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
$('.services-slider').owlCarousel({
  loop:true,
  margin:20,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false,
          dots: false
      },
      500:{
        items:2,
        nav:false,
        dots: false
    },
      767:{
          items:3,
          nav:false,
          dots: false
      },
      1199:{
          items:5,
          nav:true,
          loop:false,
          dots: false
      }
  }
})
$('.testimonial-slider').owlCarousel({
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
          items:2,
          nav:false,
          dots: false
      },
      1199:{
          items:3,
          nav:false,
          dots: true,
          loop:false,
          autoplay: true
      }
  }
})
$('.partner-slider').owlCarousel({
  loop:true,
  margin:20,
  responsiveClass:true,
  responsive:{
      0:{
          items:2,
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
        items:5,
        nav:false,
        dots: false
    },
      1199:{
          items:6,
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
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
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