$(function () {
            $('.slider').slick({
                vertical: true,
                verticalSwiping: true,
                slidesToShow: 6,
                autoplay: false,
                responsive: [
     {
       breakpoint: 768,
       settings: {
         slidesToShow: 4,
       }
     },
     {
       breakpoint: 375,
       settings: {
         slidesToShow: 1,
       }
     }
    ]
            });
        });



// window.addEventListener('resize', checkWidth);

// function checkWidth() {
    

//     if (window.innerWidth < 376) {
    

// } else {
//     $(function () {
//             $('.slider').slick({
//                 vertical: true,
//                 verticalSwiping: true,
//                 slidesToShow: 6,
//                 autoplay: false,
//             });
//         });
//     }
    
// }



