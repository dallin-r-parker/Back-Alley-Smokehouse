angular.module('backAlley')
.directive('slideShow', function(sShowService, $timeout){
return{
  restrict: 'E',
  templateUrl: './js/home/slideshow.html',
  link: function( scope, element, attributes ) {

    // counter

    timeOutCounter = function() {
      for (var i = 0; i <= 30; i++) {
        $timeout(function(i) {
          return function() {
            nextImage = newScope(i);
          }
        }(i), i * 4000)
      }
    }
    timeOutCounter()
// inject sShow
    sShower = sShowService.sShow;
// function to run during counter
    newScope = function(i){
      i = i%sShower.length;
        nextImage = sShower[i];
      $('.slideShower').css('background-color','blue');
      $('.slideShower').css("'background-image', 'url(" + nextImage + ")'");
      console.log('"background-image", "url(' + nextImage + ')"');
    }
  }
  }
})
