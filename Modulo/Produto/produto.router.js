angular
		.module('ProdutoModule')
		.config(config)

		function config ($stateProvider, $urlRouterProvider){
			$stateProvider
			.state('produto', {
						url: '/produto',
						controller: 'ProdutoController',
						templateUrl: 'Modulo/Produto/produto.html'
			})
			.state('cadastrarProduto',{
						url: '/produto/cadastrar',
						controller: 'ProdutoCadastrar',
						templateUrl: 'Modulo/Produto/ProdutoCadastrar.html'
					})
			.state('alterarProduto',{
						url: '/produto/:id',
						controller: 'ProdutoEditar',
						templateUrl: 'Modulo/Produto/ProdutoEditar.html',
						resolve:{
							obterProdutoResolve: obterProdutoResolve
						}
					})

					   obterProdutoResolve.$inject = ['ProdutoService', '$stateParams']
  					  function obterProdutoResolve(ProdutoService, $stateParams) {
  					  return ProdutoService.obterPorId($stateParams.id)
 					
 						}
		}