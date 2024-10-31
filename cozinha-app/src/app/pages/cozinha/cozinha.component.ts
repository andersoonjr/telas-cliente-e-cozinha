import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';

interface Produto {
  id: number; // Adicionando id ao Produto
  nome: string;
  descricao: string;
  valor: number;
  imagem: string;
}

interface Pedido {
  numero: number;
  descricao: string;
  valor: number;
  status: string;
}

@Component({
  selector: 'app-cozinha',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cozinha.component.html',
  styleUrls: ['./cozinha.component.css']
})
export class CozinhaComponent {
  produtos: Produto[] = [];
  pedidos: Pedido[] = [];
  novoProduto: Produto = { id: 0, nome: '', descricao: '', valor: 0, imagem: '' };
  editandoProduto: Produto | null = null;
  produtoService: any;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params);
    });
  }

  adicionarProduto() {
    if (this.novoProduto.nome && this.novoProduto.valor && this.novoProduto.imagem) {
      const id = this.produtos.length > 0 ? Math.max(...this.produtos.map(p => p.id)) + 1 : 1; // Gera um ID único
      this.produtos.push({ ...this.novoProduto, id });
      this.novoProduto = { id: 0, nome: '', descricao: '', valor: 0, imagem: '' };
    }
  }

  editarProduto(produto: Produto) {
    this.editandoProduto = { ...produto }; // Copia o produto para edição
  }

  salvarEdicao(): void {
    if (this.editandoProduto) {
      this.produtoService.updateProduto(this.editandoProduto.id, this.editandoProduto);
      this.editandoProduto = null;
    }
  }

  cancelarEdicao() {
    this.editandoProduto = null; // Reseta a edição
  }

  excluirProduto(id: number) {
    this.produtos = this.produtos.filter(p => p.id !== id); // Remove o produto
  }

  alterarStatus(pedido: Pedido, status: string) {
    const index = this.pedidos.findIndex(p => p.numero === pedido.numero);
    if (index !== -1) {
      this.pedidos[index].status = status; // Atualiza o status do pedido
    }
  }
}