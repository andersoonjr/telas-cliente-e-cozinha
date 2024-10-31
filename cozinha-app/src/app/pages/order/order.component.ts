import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';

interface Product {
  name: string;
  price: number;
  description: string;
  image: string;
}

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ButtonModule, CarouselModule, InputTextModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent {
  products: Product[] = [
    { name: 'Produto 1', price: 29.99, description: 'Descrição do Produto 1', image: 'assets/produto1.jpg' },
    { name: 'Produto 2', price: 49.99, description: 'Descrição do Produto 2', image: 'assets/produto2.jpg' },
    { name: 'Produto 3', price: 49.99, description: 'Descrição do Produto 3', image: 'assets/produto3.jpg' },
    // Adicione mais produtos conforme necessário
  ];

  selectedProducts: Product[] = [];
  total: number = 0;

  addToOrder(product: Product) {
    this.selectedProducts.push(product);
    this.total += product.price;
  }

  removeFromOrder(product: Product) {
    const index = this.selectedProducts.findIndex(p => p.name === product.name);
    if (index !== -1) {
      this.selectedProducts.splice(index, 1);
      this.total -= product.price;
    }
  }
}
