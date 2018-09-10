var animatePoints = function() {

  var revealPoint = function () {


  var revealFirstPoint = function() {
                    points[0].style.opacity = 1;
                    points[0].style.transform = "scaleX(1) translateY(0)";
                    points[0].style.msTransform = "scaleX(1) translateY(0)";
                    points[0].style.WebkitTransform = "scaleX(1) translateY(0)";
                };

                  $(window).load(function() {
                // #1
                if ($(window).height() > 950) {
                  animatePoints ();
                  }

                  // #2
                  var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;

                  // #3
                  $(window).scroll(function(event) {

                  // #4
                  if ($(window).scrollTop() >= scrollDistance) {
                    animatePoints();
                    }
                  });
                });

                // #5
                var animatePoints = function () {
                  var revealPoint = function () {

                    // #7
                    $(this).css({
                      opacity: 1,
                      transform: 'scaleX(1) translateY(0)'
                    });
                  };

                  // #6
                  $.each($('.point'), revealPoint);
                };

                var revealSecondPoint = function() {
                    points[1].style.opacity = 1;
                    points[1].style.transform = "scaleX(1) translateY(0)";
                    points[1].style.msTransform = "scaleX(1) translateY(0)";
                    points[1].style.WebkitTransform = "scaleX(1) translateY(0)";
                };

                var revealThirdPoint = function() {
                    points[2].style.opacity = 1;
                    points[2].style.transform = "scaleX(1) translateY(0)";
                    points[2].style.msTransform = "scaleX(1) translateY(0)";
                    points[2].style.WebkitTransform = "scaleX(1) translateY(0)";
                };

                revealFirstPoint();
                revealSecondPoint();
                revealThirdPoint();

  }
});
}
