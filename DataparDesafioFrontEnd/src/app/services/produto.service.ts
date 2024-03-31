import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produtos } from '../models/Produtos';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private apiUrl = `${environment.ApiUrl}/produtos`;

  constructor(private http: HttpClient) {}

  GetProdutos(): Observable<Produtos[]> {
    return this.http.get<Produtos[]>(this.apiUrl);
  }

  GetProduto(id: number): Observable<Produtos> {
    return this.http.get<Produtos>(`${this.apiUrl}/${id}`);
  }

  CreateProduto(produto: Produtos): Observable<Produtos[]> {
    return this.http.post<Produtos[]>(this.apiUrl, produto);
  }

  EditarProduto(produto: Produtos): Observable<Produtos[]> {
    return this.http.put<Produtos[]>(`${this.apiUrl}/${produto.id}`, produto);
  }

  ExcluirProduto(id: number): Observable<Boolean> {
    return this.http.delete<Boolean>(`${this.apiUrl}/${id}`);
  }
}
