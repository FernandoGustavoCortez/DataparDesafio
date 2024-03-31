using DataparDesafio.Models;
using Microsoft.EntityFrameworkCore;

namespace DataparDesafio.Data
{
    public class DBContex : DbContext
    {
        public DBContex(DbContextOptions<DBContex> options) : base(options) 
        { 
        }

        public DbSet<ProdutoModel> Produtos { get; set; }
    }
}
