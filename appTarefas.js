'use.strict' ;

var modulo = angular.module( 'ToDoApp' , [] ) ;

modulo.controller('TarefasCtrl', function( $scope ) {
      
  
   // Iniciando os dados  collection 
   $scope.todos = [ 
                    { tarefa:'Tarefa 1' ,
                      feito: false
                    }

                     ,{ tarefa:'Tarefa 2' ,
                      feito: false
                     }

                     ,{ tarefa:'Tarefa 3' ,
                      feito: false
                     }

                  ] // End Collection 


    //Adicionar novos elementos a lista
    $scope.addTodo = function() {
    $scope.todos.push({ tarefa:$scope.todoText, feito:false });
    $scope.todoText = '' ;
    };

    //Calcular quantas tarefas estão prontas
    $scope.restante = function() {
        
         return todo.feito ;

    };

});//End Controller
   

    