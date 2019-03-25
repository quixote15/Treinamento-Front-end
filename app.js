angular.module('trelloApp', [])

.controller('TrelloController',['$scope', function($scope) {
    $scope.title = 'Trello';

    $scope.todos = ["Aprender Framework", "Fazer café", "Iniciar projeto"];


  }])