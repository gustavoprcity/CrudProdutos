angular
		.module('ProdutoModule')
		.controller('ProdutoController', ProdutoController)

		function ProdutoController($scope, ProdutoService, $state){
			$scope.produtos = ProdutoService.listarProduto();

			$scope.irParaCadastro = function(){
				$state.go('cadastrarProduto');
			}
			$scope.excluirProduto = function(produto){
				ProdutoService.deletarProduto(produto);
				$scope.produtos = ProdutoService.listarProduto();
			}
			$scope.alterarProduto = function (produto){
				$state.go('alterarProduto',{id:produto.codigo})
			}
			
		}
