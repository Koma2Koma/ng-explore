var toDoList = angular.module('ToDoList', []);

toDoList.factory('Data', function() {
  return {message: "I'm data from a service."};
})

function ToDoCtrl($scope) {
  $scope.data = Data;
}