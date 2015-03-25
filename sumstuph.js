var sumStuph = angular.module('SumStuph', []);

// sumStuph.controller('ListController', listController);

// function listController() {
//   this.words = 'here are some words';
// }
  
//   $scope.words = 'here are some words';
//   $scope.list = [];

//   $scope.addItem = function (item) {
//     $scope.list.push(item);
//   };

// }]);

 
sumStuph.controller("ListController", function($scope) {
  
  $scope.players = ["Tom", "Dick", "Harry"];

  $scope.list = [];

  $scope.addItem = function (item) {
    $scope.list.push(item);
    $scope.listItem = "";
  };

  $scope.addItem('do some stuff');
  $scope.addItem('do sum stuff');
  $scope.addItem('do sum stuph');

});
