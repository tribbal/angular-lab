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

    
  app.controller( 'DocsCtrl' , function( $scope ){
     
          $scope.documento = arquivos ;   


  } )//end controler

    var arquivos  = [   { id: 1 , titulo:"Edital teste" , url:"edital_teste.doc" }
                       ,{ id: 2 , titulo:"CRC 456" , url:"teste.pdf" }
                       ,{ id: 3 , titulo:"Contabil" , url:"teste.pdf" }
                       ,{ id: 4 , titulo:"Aprovação 456" , url:"teste.pdf" }
                       ,{ id: 5 , titulo:"Teste 456" , url:"teste.pdf" }
                       
                                          ] ;

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