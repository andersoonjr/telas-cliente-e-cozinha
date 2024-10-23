import { Component, Input } from '@angular/core';
import { Dish } from '../../model/dish';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-product-carousel',
  standalone: true,
  imports: [CarouselModule, ButtonModule],
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css']
})
export class ProductCarouselComponent {
  @Input() products: Dish[] = [];
  @Input() addToOrder!: (product: Dish) => void;
}
