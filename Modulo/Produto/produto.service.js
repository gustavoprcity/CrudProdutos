angular
		.module('ProdutoModule')
		.factory('ProdutoService', ProdutoService)

		function ProdutoService(){
		var produtos = [];

			var service = {
				listarProduto: listarProduto,
				cadastrarProduto : cadastrarProduto,
				deletarProduto : deletarProduto,
				alterarProduto : alterarProduto,
				obterPorId : obterPorId
			} 

			function listarProduto(){
				return produtos;

			}

			function cadastrarProduto(produto){
				produtos.push(produto);

			}

			function deletarProduto(produto){
				var indice = produtos.indexOf(produto);
				produtos.splice(indice, 1);

			}
			function alterarProduto(produto){
				var indice;
				for (var i = produtos.length - 1; i >= 0; i--) {
					 if (produtos[i].codigo === produto.codigo ){
					 	indice = i;
					 	break;
					 } 
				};
				produtos[indice] = produto;
			}
			function obterPorId(codigo){
				var produto =  produtos.filter(p=> p.codigo === codigo)
				return produto[0];
			}
			return service;


		}