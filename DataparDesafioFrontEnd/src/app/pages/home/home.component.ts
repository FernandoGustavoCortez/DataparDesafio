import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Produtos } from '../../models/Produtos';
import { Router, RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ExcluirComponent } from '../../components/excluir/excluir.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  produtos: Produtos[] = [];
  produtosGeral: Produtos[] = [];

  colunas = ['Nome', 'Preco', 'Quantidade', 'Acoes', 'Excluir'];

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.produtoService.GetProdutos().subscribe((data) => {
      this.produtos = data;
      this.produtosGeral = data;
    });
  }

  searchProduto(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.produtos = this.produtosGeral.filter((funcionario) => {
      return funcionario.nome.toLowerCase().includes(value);
    });
  }

  excluirProduto(id: number) {
    this.produtoService.ExcluirProduto(id).subscribe((data) => {
      this.router.navigate(['/cadastro']);
    });
  }

  openDialog(id: number): void {
    this.dialog.open(ExcluirComponent, {
      width: '250px',
      data: {
        id: id,
      },
    });
  }
}
