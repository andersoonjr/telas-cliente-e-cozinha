import { Routes } from '@angular/router';
import { ProductCarouselComponent } from './components/product-carousel/product-carousel.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { DeliveryInfoComponent } from './components/delivery-info/delivery-info.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductCarouselComponent },
  { path: 'order', component: OrderSummaryComponent },
  { path: 'delivery', component: DeliveryInfoComponent }
];
