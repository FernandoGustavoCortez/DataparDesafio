using DataparDesafio.Data;
using DataparDesafio.Models;
using DataparDesafio.Repositorios.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace DataparDesafio.Repositorios
{
    public class ProdutoRepositorio : IProdutoRepositorio
    {
        private readonly DBContex _dbContext;
        public ProdutoRepositorio(DBContex dBContex) {
            _dbContext = dBContex;
        }

        public async Task<ProdutoModel> BuscarProduto(int id)
        {
            ProdutoModel produtoModel = await _dbContext.Produtos.FirstOrDefaultAsync(x => x.id == id);

            if (produtoModel == null)
            {
                throw new Exception($"Produto para o ID: {id} nao foi encontrado.");
            }

            return produtoModel;
        }

        public async Task<List<ProdutoModel>> BuscarTodosProdutos()
        {
            return await _dbContext.Produtos.ToListAsync();
        }

        public async Task<ProdutoModel> CadastrarProduto(ProdutoModel produto)
        {
            await _dbContext.Produtos.AddAsync(produto);
            await _dbContext.SaveChangesAsync();

            return produto;
        }

        public async Task<ProdutoModel> AtualizarProduto(ProdutoModel produto, int id)
        {
            ProdutoModel produtoModel = await BuscarProduto(id);
            
            if (produtoModel == null)
            {
                throw new Exception($"Produto para o ID: {id} nao foi encontrado.");
            }

            produtoModel.nome = produto.nome;
            produtoModel.descricao = produto.descricao;
            produtoModel.preco = produto.preco;
            produtoModel.quantidade = produto.quantidade;

            _dbContext.Produtos.Update(produtoModel);
            await _dbContext.SaveChangesAsync();

            return produtoModel;
        }

        public async Task<bool> ApagarProduto(int id)
        {
            ProdutoModel produtoModel = await BuscarProduto(id);

            if (produtoModel == null)
            {
                throw new Exception($"Produto para o ID: {id} nao foi encontrado.");
            }
            
            _dbContext.Produtos.Remove(produtoModel);
            await _dbContext.SaveChangesAsync();

            return true;
        }

       

    }
}
