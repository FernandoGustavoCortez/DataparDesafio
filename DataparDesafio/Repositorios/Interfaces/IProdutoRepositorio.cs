using DataparDesafio.Models;

namespace DataparDesafio.Repositorios.Interfaces
{
    public interface IProdutoRepositorio
    {
        Task<List<ProdutoModel>> BuscarTodosProdutos();
        Task<ProdutoModel> BuscarProduto(int id);
        Task<ProdutoModel> CadastrarProduto(ProdutoModel produto);
        Task<ProdutoModel> AtualizarProduto(ProdutoModel produto, int id);
        Task<bool> ApagarProduto(int id);
    }
}
