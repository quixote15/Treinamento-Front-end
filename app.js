angular.module('trelloApp', [])

.controller('TrelloController',['$scope', function($scope) {
    $scope.title = 'Trello';

    $scope.todoFilter = 'todo'

    $scope.todos = [
        {text:"Aprender Framework", status: 'todo'},
        {text:"Fazer café", status: 'todo'},
        {text: "Iniciar projeto", status: 'done'}
    ];

    $scope.novoItem = '';

    $scope.adicionarItem = function (value){
        $scope.todos.push(value);
    }

    $scope.removerItem = function(value){
        $scope.todos.splice(value,1);
    }

  }])