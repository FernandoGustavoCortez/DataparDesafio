import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProdutoService } from '../../services/produto.service';
import { Produtos } from '../../models/Produtos';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.scss',
})
export class DetalhesComponent implements OnInit {
  produto?: Produtos;
  produtoFormDetalhes!: FormGroup;
  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produtoService.GetProduto(id).subscribe((data) => {
      this.produto = data;
      this.produtoFormDetalhes = this.formBuilder.group({
        nome: [
          { value: this.produto ? this.produto.nome : '', disabled: true },
        ],
        descricao: [
          { value: this.produto ? this.produto.descricao : '', disabled: true },
        ],
        preco: [
          { value: this.produto ? this.produto.preco : '', disabled: true },
        ],
        quantidade: [
          {
            value: this.produto ? this.produto.quantidade : '',
            disabled: true,
          },
        ],
      });
    });
  }
}
