angular.module('trelloApp', [])

.controller('TrelloController',['$scope', function($scope) {
    $scope.title = 'Trello';

    $scope.todos = ["Aprender Framework", "Fazer café", "Iniciar projeto"];

    $scope.novoItem = '';

    $scope.adicionarItem = function (value){
        $scope.todos.push(value);
    }

    $scope.removerItem = function(value){
        $scope.todos.splice(value,1);
    }

  }])