import { Component, OnInit } from '@angular/core';
import { ProdutoFormComponent } from '../../components/produto-form/produto-form.component';
import { Produtos } from '../../models/Produtos';
import { ProdutoService } from '../../services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [ProdutoFormComponent],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.scss',
})
export class EditarComponent implements OnInit {
  btnAcao: string = 'Editar!';
  btnTitle: string = 'Editar Produto';
  produto!: Produtos;

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  editarProduto(produto: Produtos) {
    this.produtoService.EditarProduto(produto).subscribe((data) => {
      this.router.navigate(['/']);
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produtoService.GetProduto(id).subscribe((data) => {
      this.produto = data;
    });
  }
}
