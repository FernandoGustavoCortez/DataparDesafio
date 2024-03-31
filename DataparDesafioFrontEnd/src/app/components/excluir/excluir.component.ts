import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ProdutoService } from '../../services/produto.service';
import { Router } from '@angular/router';
import { Produtos } from '../../models/Produtos';

@Component({
  selector: 'app-excluir',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatDialogTitle],
  templateUrl: './excluir.component.html',
  styleUrl: './excluir.component.scss',
})
export class ExcluirComponent implements OnInit {
  idProduto: any;
  produto!: Produtos;
  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {
    this.idProduto = this.data.id;
    this.produtoService.GetProduto(this.idProduto).subscribe((data) => {
      this.produto = data;
    });
  }

  excluirProduto() {
    this.produtoService.ExcluirProduto(this.idProduto).subscribe((data) => {
      console.log(data);
      window.location.reload();
    });
  }
}
