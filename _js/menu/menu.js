angular.module('backAlley').controller('menuCtrl', function($scope, bAservice, localStorageService){

  $scope.menuContents = bAservice.menu;

// PARSE INFORMATION FROM SERVICE
  $scope.smokerContents = function(){
    var x = [];
    for(var i = 0; i < $scope.menuContents.length; i++){
      if ($scope.menuContents[i].id == "smoker"){
        x.push($scope.menuContents[i]);
      }
    }return x;
  }

  $scope.originalsContents = function(){
    var x = [];
    for(var i = 0; i < $scope.menuContents.length; i++){
      if ($scope.menuContents[i].id == "originals"){
        x.push($scope.menuContents[i]);
      }
    }return x;
  }

  $scope.wingsContents = function(){
    var x = [];
    for(var i = 0; i < $scope.menuContents.length; i++){
      if ($scope.menuContents[i].id == "wings"){
        x.push($scope.menuContents[i]);
      }
    }return x;
  }

  $scope.startersContents = function(){
    var x = [];
    for(var i = 0; i < $scope.menuContents.length; i++){
      if ($scope.menuContents[i].id == "starters"){
        x.push($scope.menuContents[i]);
      }
    }return x;
  }

  $scope.sidesContents = function(){
    var x = [];
    for(var i = 0; i < $scope.menuContents.length; i++){
      if ($scope.menuContents[i].id == "sides"){
        x.push($scope.menuContents[i]);
      }
    }return x;
  }

  $scope.extrasContents = function(){
    var x = [];
    for(var i = 0; i < $scope.menuContents.length; i++){
      if ($scope.menuContents[i].id == "extras"){
        x.push($scope.menuContents[i]);
      }
    }return x;
  }

  $scope.kidsContents = function(){
    var x = [];
    for(var i = 0; i < $scope.menuContents.length; i++){
      if ($scope.menuContents[i].id == "kids"){
        x.push($scope.menuContents[i]);
      }
    }return x;
  }

// Prepare information for cart

  $scope.cartInfo = [];



  $scope.called = false;
  $scope.innerCalled = false;

  $scope.caller = function(x){
    $scope.selectedItem = x;
    $scope.selectedItem.itemTotal = x.price;
    $scope.selectedItem.sauceKind = "Mild";
    if(x.sauce == true){
    $scope.innerCalled = true;}
   return $scope.called = true;
  };

  $scope.uncaller = function(){
   return $scope.called = false;
  };

//increment quantity

$scope.incrementer = function(){
  $scope.selectedItem.quantity +=1;
  return $scope.selectedItem.itemTotal = $scope.selectedItem.quantity * $scope.selectedItem.price;
}

$scope.decrementer = function(){
  if($scope.selectedItem.quantity > 1)
  {$scope.selectedItem.quantity -=1;
  return $scope.selectedItem.itemTotal = $scope.selectedItem.quantity * $scope.selectedItem.price;}

}


// set sauce value

  $scope.warning = false;


  $scope.mildSauce = function(){
    $scope.warning = false;
  return $scope.selectedItem.sauceKind = "Mild";

  }

  $scope.raspberrySauce = function(){
    $scope.warning = false;
  return $scope.selectedItem.sauceKind = "Raspberry Chipolte";

  }

  $scope.mediumSauce = function(){
    $scope.warning = false;
  return $scope.selectedItem.sauceKind = "Medium";

  }

  $scope.hotSauce = function(){
    $scope.warning = true;
  return $scope.selectedItem.sauceKind = "Hot";

  }



// add selectedItem to cart

$scope.submitter = function(){
  $scope.cartInfo.push($scope.selectedItem);
  localStorageService.store("cartKeeper", $scope.cartInfo);
  console.log("initial cart info" + $scope.cartInfo);
  return $scope.called = false;
}


});
