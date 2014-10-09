(function(){
var app = angular.module('minhaApp', [] ) ;
    app.controller('OlaCtrl', function( $scope ){
              $scope.nome = usuario.nome ;
              $scope.idade = usuario.idade ;
              $scope.email = usuario.email ;
    }) ;
       
       var usuario = {  nome: "Tião Macalé" ,
                        idade: 368 ,
                        email: "tiaomaca@gmail.com"
                        }  

   } )();