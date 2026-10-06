import { inject, Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Categoria, Produto, ProdutoRequest } from '../models/produto';

@InjectableDef({
    provideIn: 'root'
})

export class ProdutoService{

    private readonly http = inject(HttpClient);
    private readonly apiProdutos = 'http://localhost:8080/api/produtos';
    listar(): Observable<Categoria>{
        return this.http.get<Produto[]>(this.apiProdutos);
        }
        cadastrar(produto: ProdutoRequest):
        Observable<Produto> {
            return this.http.post<Produto>(this.apiProdutos, produto);
}
atualizar(id: number, produto:ProdutoRequest):
Observable<Produto>{
    return this.http.put<produto>(`${this.apiProdutos}/${id}`, produto);
}
excluir(id: number, produto:ProdutoRequest):Observable<void>{
    return this.http.delete<void>(`${this.apiProdutos}/${id}`)
}
}
