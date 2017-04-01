angular	
		.module('ProdutoModule')
		.controller('ProdutoCadastrar', ProdutoCadastrar)
		  function ProdutoCadastrar($scope, ProdutoService, $state ){
      $scope.produto ={};
      $scope.ProdutoCadastrar = function(produto){
        ProdutoService.cadastrarProduto(produto)
        $state.go('produto')
      };
      $scope.cancelar = function(){
        $state.go('produto')
      }


		}