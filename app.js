(function(){
var app = angular.module('minhaApp', [] ) ;

    app.controller('OlaCtrl', function( $scope ){
              $scope.nome = usuario.nome ;
              $scope.idade = usuario.idade ;
              $scope.email = usuario.email ;
    }) ;//end controller

    app.controller('nacoesCtrl', function($scope){

         $scope.nacoes = pais ;

    }); //end controller
       
    var pais = [
                    { nome:"Brasil" }
                  , { nome:"Argentina" }
                  , { nome:"Espanha"}
                  , { nome:"Tailandia"}
                  
               ] ;

    var usuario = {  nome: "Tião Macalé" ,
                        idade: 368 ,
                        email: "tiaomaca@gmail.com"
                        }  

   } )();