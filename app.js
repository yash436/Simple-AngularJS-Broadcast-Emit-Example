var app = angular.module('app', []);

app.controller('Parent', function($scope) {
  $scope.message = "";
  $scope.emitedmessage = "";
  $scope.clickevent = function(){
    $scope.$broadcast('transfer', {message:$scope.message});
  }
    $scope.$on('transferUp', function(event,data){
    //console.log('on working');
    $scope.emitedmessage = data.message;
  });
});

app.controller('Child', function($scope){
  $scope.message = "";
  $scope.broadcastmessage = ""
  $scope.$on('transfer', function(event,data){
    $scope.broadcastmessage = data.message;
  });
  $scope.clickevent = function(){
    $scope.$emit('transferUp', {message:$scope.message});
  }
});