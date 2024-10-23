import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../models/produto.model';

@Component({
  selector: 'app-catalogo-produto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './catalogo-produto.component.html',
  styleUrls: ['./catalogo-produto.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CatalogoProdutoComponent implements OnInit {
  produtos: Produto[] = [];
  novoProduto: Produto = { id: 0, nome: '', descricao: '', valor: '', selecionado: false, imagem: '' };
  editandoProduto: Produto | null = null;

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe(produtos => {
      this.produtos = produtos.map(produto => ({
        ...produto,
        imagem: produto.imagem || 'assets/images/default.png' // Imagem padrão
      }));
    });
  }
  

  adicionarProduto(): void {
    if (this.novoProduto.nome && this.novoProduto.valor) {
      this.produtoService.addProduto(this.novoProduto);
      this.novoProduto = { id: 0, nome: '', descricao: '', valor: '', selecionado: false, imagem: '' };
    }
  }

  editarProduto(produto: Produto): void {
    this.editandoProduto = { ...produto };
  }

  salvarEdicao(): void {
    if (this.editandoProduto) {
      this.produtoService.updateProduto(this.editandoProduto.id, this.editandoProduto);
      this.editandoProduto = null;
    }
  }

  excluirProduto(id: number): void {
    this.produtoService.deleteProduto(id);
  }

  cancelarEdicao(): void {
    this.editandoProduto = null;
  }
}
