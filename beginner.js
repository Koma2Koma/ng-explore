var sumStuph = angular.module('SumStuph', []);

myApp.factory('Data', function() {
  return {message: "Enter List Item Here"};
})



function FirstCtrl($scope, Data) {
  $scope.data = Data;
}

function SecondCtrl($scope, Data) {
  $scope.data = Data;

  $scope.reversedMessage = function (message) {
    return message.split('').reverse().join('');
  }

}