angular	
		.module('ProdutoModule')
		.controller('ProdutoEditar', ProdutoCadastrar)
		  function ProdutoCadastrar($scope, ProdutoService, $state, obterProdutoResolve){
    	  
    	  $scope.produto =obterProdutoResolve;
     	 $scope.alterarProduto = function(produto){
     	 	  ProdutoService.alterarProduto(produto)
      		 $state.go('produto')
     		 };
     	$scope.cancelar = function(){
     		$state.go('produto')
     	}


		}