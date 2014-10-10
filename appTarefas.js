var app = angular.module('ToDoApp', [] ) ;
    
    app.controller('TarefasCtrl', function($scope){

         $scope.todos = [     
                              { tarefa: 'Tarefa 1' , feito: true }
                             ,{ tarefa: 'Tarefa 2' , feito: false }
                             ,{ tarefa: 'Tarefa 3' , feito: false }
                             ,{ tarefa: 'Tarefa 4' , feito: false }

                        ] ;

    }); //end controller

    