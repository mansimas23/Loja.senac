export interface Categoria{
    id: number;
    nome: string;
    descricacao: string;
}
export interface Produto {
    id: string;
    descricao: string;
    preo: number;
    quantidade: Categoria;
}

export interface ProdutoReuest{
    nome: string;
    descricao: string;
    preco: string;
    quantidade: number;
    categoriaID: number;
}