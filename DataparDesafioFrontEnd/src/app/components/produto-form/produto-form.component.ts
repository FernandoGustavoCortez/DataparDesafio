import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Produtos } from '../../models/Produtos';
import { RouterLink } from '@angular/router';

/*Angular Material*/
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-produto-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
  ],
  templateUrl: './produto-form.component.html',
  styleUrl: './produto-form.component.scss',
})
export class ProdutoFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Produtos>();
  @Input() btnAcao!: string;
  @Input() btnTitle!: string;
  @Input() dadosProduto: Produtos | null = null;

  produtoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.produtoForm = this.formBuilder.group({
      id: [this.dadosProduto ? this.dadosProduto.id : 0],
      nome: [
        this.dadosProduto ? this.dadosProduto.nome : '',
        [Validators.required],
      ],
      descricao: [
        this.dadosProduto ? this.dadosProduto.descricao : '',
        [Validators.required],
      ],
      preco: [
        this.dadosProduto ? this.dadosProduto.preco : '',
        [Validators.required],
      ],
      quantidade: [
        this.dadosProduto ? this.dadosProduto.quantidade : '',
        [Validators.required],
      ],
    });
  }

  submit() {
    this.onSubmit.emit(this.produtoForm.value);
  }
}
