import $ from 'jquery';
import 'slick-carousel';


$('.carousel').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow:3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    }
  ]
});

// $(".carousel").slick({

//   // normal options...
//   infinite: false,

//   // the magic
//   responsive: [{

//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         infinite: true
//       }

//     }, {

//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         dots: true
//       }

//     }, {

//       breakpoint: 300,
//       settings: "unslick" // destroys slick

//     }]
// });