angular.module('backAlley').controller('homeCtrl', function($scope, sShowService, $timeout ){

$scope.nextImage = "./images/brisket.jpg";


// COUNTER
// $scope.timeOutCounter = function() {
//   for (var i = 0; i <= 30; i++) {
//     $timeout(function(i) {
//       return function() {
//         $scope.nextImage = $scope.newScope(i);
//       }
//     }(i), i * 4000)
//   }
// }
// $scope.timeOutCounter()
//
// $scope.sShower = sShowService.sShow;
//
// $scope.newScope = function(i){
//   i = i%$scope.sShower.length;
//     $scope.nextImage = $scope.sShower[i];
//     console.log($scope.nextImage);
//   return $scope.nextImage;
// }





  // $scope.swapper = function(){
  //
  //     $scope.nextImage = "";
  //     $scope.filler = "background-image" + ":" + $scope.nextImage;
  //     for(var i = 0; i < $scope.sShower.length; i++){
  //       setInterval(function(){
  //       if(!$scope.sShower[i]){
  //         console.log("first part" + $scope.sShower[i]);
  //       i = 0;
  //       $scope.nextImage = $scope.sShower[i];
  //     }else{
  //
  //       $scope.nextImage = $scope.sShower[i];
  //       console.log("2nd part" + $scope.sShower[i]);
  //     }return $scope.filler;
  //   }(i), i * 3000)
  // }
  // }

});
