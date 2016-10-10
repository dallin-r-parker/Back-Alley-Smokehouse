angular.module('backAlley').controller('bagCtrl', function($scope, bAservice, localStorageService){

$scope.bagInfo = localStorageService.get('cartKeeper');
console.log($scope.bagInfo);

$scope.subTotal = function(){
  $scope.sTotal = 0;
  for(var i = 0; i < $scope.bagInfo.length; i++){
    $scope.sTotal += $scope.bagInfo[i].itemTotal;
  }return $scope.sTotal;
};

$scope.tax = function(){
  $scope.tTotal = $scope.sTotal * 0.07;
  return $scope.tTotal;
}

$scope.grandTotal = function(){
  $scope.gTotal = $scope.sTotal + $scope.tTotal;
  return $scope.gTotal;
}

});
