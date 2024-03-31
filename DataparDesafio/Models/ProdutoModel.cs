using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataparDesafio.Models
{
    public class ProdutoModel
    {
        [Key]
        public int id { get; set; }
        public string? nome { get; set; }
        public string? descricao { get; set; }
        public int? preco { get; set; }
        public int? quantidade { get; set; }
    }
}
