angular.module('backAlley')
.directive('slideShow', function(sShowService, $controller){
return{
  restrict: 'E',
  templateUrl: './_js/home/slideshow.html',
  controller: function($scope){

    $scope.timeOutCounter = function() {
      for (var i = 0; i <= 30; i++) {
        setTimeout(function(i) {
          return function() {
          $scope.newScope(i);
          $scope.$apply();
          }
        }(i), i * 4000)
      }
    }
    $scope.timeOutCounter()

    $scope.sShower = sShowService.sShow;

    $scope.newScope = function(i){
      i = i%$scope.sShower.length;
        $scope.nextImage = $scope.sShower[i];
        $('.slideShower').css("background-image",'url:(' + $scope.nextImage + ')');
        console.log($scope.nextImage);
    }

    // $scope.nShow = "{'background-image' : 'url:(" + $scope.nextImage + ")'}";


   $('.slideShower').css("background-image",'url:(' + $scope.nextImage + ')');


  }


}


})
