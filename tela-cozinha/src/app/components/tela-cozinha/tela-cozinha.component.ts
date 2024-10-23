import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from '../cabecalho/cabecalho.component';
import { ResumoComponent } from '../resumo/resumo.component';
import { ListaPedidosComponent } from '../lista-pedidos/lista-pedidos.component';
import { CatalogoProdutoComponent } from '../catalogo-produto/catalogo-produto.component';

@Component({
  selector: 'app-tela-cozinha',
  standalone: true,
  imports: [CommonModule, CabecalhoComponent, ResumoComponent, ListaPedidosComponent, CatalogoProdutoComponent],
  templateUrl: './tela-cozinha.component.html',
  styleUrls: ['./tela-cozinha.component.css']
})
export class TelaCozinhaComponent {}
