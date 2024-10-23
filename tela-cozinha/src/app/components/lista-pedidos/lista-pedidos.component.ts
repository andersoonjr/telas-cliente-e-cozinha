import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-pedidos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css'],
})
export class ListaPedidosComponent {
  pedidos = [
    { numero: '000003', descricao: 'Hambúrguer', valor: '105,97', status: 'em-preparo', statusTexto: 'Em Preparo' },
    { numero: '000002', descricao: 'Lasanha', valor: '37,99', status: 'pronto-retirada', statusTexto: 'Pronto p/ Retirada' },
    { numero: '000001', descricao: 'Sobremesa', valor: '59,96', status: 'entregue', statusTexto: 'Entregue' }
  ];

  dropdownOpen: { [key: string]: boolean } = {}; // Muda para um objeto para armazenar o estado de cada dropdown

  alterarStatus(pedido: any, novoStatus: string) {
    pedido.status = novoStatus;
    switch (novoStatus) {
      case 'em-preparo':
        pedido.statusTexto = 'Em Preparo';
        break;
      case 'pronto-retirada':
        pedido.statusTexto = 'Pronto p/ Retirada';
        break;
      case 'entregue':
        pedido.statusTexto = 'Entregue';
        break;
    }
  }

  toggleDropdown(numero: string) {
    this.dropdownOpen[numero] = !this.dropdownOpen[numero]; // Alterna o estado do dropdown específico
  }

  // Função para selecionar o status
  selectStatus(status: string, pedido: any) {
    this.alterarStatus(pedido, status);
    this.dropdownOpen[pedido.numero] = false; // Fecha o dropdown após a seleção
  }
}
