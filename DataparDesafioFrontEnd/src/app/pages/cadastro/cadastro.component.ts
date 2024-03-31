import { Component } from '@angular/core';
import { ProdutoFormComponent } from '../../components/produto-form/produto-form.component';
import { Produtos } from '../../models/Produtos';
import { ProdutoService } from '../../services/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ProdutoFormComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent {
  btnAcao: string = 'Cadastrar';
  btnTitle: string = 'Cadastrar Produto';
  constructor(private produtoService: ProdutoService, private router: Router) {}
  createProduto(produto: Produtos) {
    this.produtoService.CreateProduto(produto).subscribe((data) => {
      this.router.navigate(['/']);
    });
  }
}
