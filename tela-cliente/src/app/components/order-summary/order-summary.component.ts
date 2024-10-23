
import { Component, Input } from '@angular/core';
import { Dish } from '../../model/dish';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css'],
  imports: [CommonModule]
})
export class OrderSummaryComponent {
  @Input() selectedProducts!: Dish[];
  @Input() removeFromOrder!: (product: Dish) => void;
  @Input() total!: number; 
}
