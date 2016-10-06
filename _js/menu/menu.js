angular.module('backAlley').controller('menuCtrl', function($scope, bAservice){

  $scope.menuContents = bAservice.menu;

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


});
