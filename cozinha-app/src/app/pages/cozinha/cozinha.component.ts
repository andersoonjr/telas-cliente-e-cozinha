import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';

interface Produto {
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
  novoProduto: Produto = { nome: '', descricao: '', valor: 0, imagem: '' };
  editandoProduto: Produto | null = null;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params);
    });
  }

  adicionarProduto() {
    if (this.novoProduto.nome && this.novoProduto.valor && this.novoProduto.imagem) {
      this.produtos.push({ ...this.novoProduto });
      this.novoProduto = { nome: '', descricao: '', valor: 0, imagem: '' };
    }
  }

  editarProduto(produto: Produto) {
    this.editandoProduto = { ...produto };
  }

  salvarEdicao() {
    if (this.editandoProduto) {
      const index = this.produtos.findIndex(p => p.nome === this.editandoProduto!.nome);
      if (index !== -1) {
        this.produtos[index] = { ...this.editandoProduto };
        this.editandoProduto = null;
      }
    }
  }

  cancelarEdicao() {
    this.editandoProduto = null;
  }

  excluirProduto(nome: string) {
    this.produtos = this.produtos.filter(p => p.nome !== nome);
  }

  alterarStatus(pedido: Pedido, status: string) {
    const index = this.pedidos.findIndex(p => p.numero === pedido.numero);
    if (index !== -1) {
      this.pedidos[index].status = status;
    }
  }
}
