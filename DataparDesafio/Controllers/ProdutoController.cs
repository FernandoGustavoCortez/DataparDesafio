using DataparDesafio.Models;
using DataparDesafio.Repositorios.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DataparDesafio.Controllers
{
    [Route("api/produtos")]
    [ApiController]
    public class ProdutoController : ControllerBase
    {
        private readonly IProdutoRepositorio _produtoRepositorio;

        public ProdutoController(IProdutoRepositorio produtoRepositorio)
        {
            _produtoRepositorio = produtoRepositorio ?? throw new ArgumentNullException(nameof(produtoRepositorio));
        }

        [HttpGet]
        public async Task<ActionResult<List<ProdutoModel>>> BuscarTodosProdutos()
        {
            List<ProdutoModel> produtos = await _produtoRepositorio.BuscarTodosProdutos();
            return Ok(produtos);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ProdutoModel>> BuscarProduto(int id)
        {
            ProdutoModel produto = await _produtoRepositorio.BuscarProduto(id);
            return Ok(produto);
        }

        [HttpPost]
        public async Task<ActionResult<ProdutoModel>> CadastrarProduto([FromBody] ProdutoModel produtoModel)
        {
            ProdutoModel produto = await _produtoRepositorio.CadastrarProduto(produtoModel);
            return Ok(produto);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<ProdutoModel>> AtualizarProduto([FromBody] ProdutoModel produtoModel, int id)
        {
            produtoModel.id = id;
            ProdutoModel produto = await _produtoRepositorio.AtualizarProduto(produtoModel, id);
            return Ok(produto);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<ProdutoModel>> ApagarProduto(int id)
        {
            bool apagado = await _produtoRepositorio.ApagarProduto(id);
            return Ok(apagado);
        }
    }
}
