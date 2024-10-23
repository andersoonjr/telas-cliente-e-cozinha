import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private produtos = new BehaviorSubject<Produto[]>([
    { id: 1, nome: 'Hambúrguer', descricao: 'Hambúrguer com salada', valor: '20,00', selecionado: false, imagem: 'assets/images/hamburguer.png' },
    { id: 2, nome: 'Sobremesa', descricao: 'Sobremesa com calda de chocolate', valor: '15,00', selecionado: false, imagem: 'assets/images/sobremesa.png' },
    { id: 3, nome: 'Lasanha', descricao: 'Lasanha de Carne', valor: '17,99', selecionado: false, imagem: 'assets/images/lasanha.png' }
  ]);

  getProdutos(): Observable<Produto[]> {
    return this.produtos.asObservable();
  }

  addProduto(produto: Produto): void {
    const currentProdutos = this.produtos.getValue();
    this.produtos.next([...currentProdutos, { ...produto, id: this.gerarNovoId() }]);
  }

  updateProduto(id: number, produtoAtualizado: Partial<Produto>): void {
    const currentProdutos = this.produtos.getValue();
    const index = currentProdutos.findIndex(p => p.id === id);
    if (index !== -1) {
      currentProdutos[index] = { ...currentProdutos[index], ...produtoAtualizado };
      this.produtos.next(currentProdutos);
    }
  }

  deleteProduto(id: number): void {
    const currentProdutos = this.produtos.getValue();
    this.produtos.next(currentProdutos.filter(p => p.id !== id));
  }

  private gerarNovoId(): number {
    const currentProdutos = this.produtos.getValue();
    return currentProdutos.length > 0 ? Math.max(...currentProdutos.map(p => p.id)) + 1 : 1;
  }
}
