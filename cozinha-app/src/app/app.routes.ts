import { Routes } from '@angular/router';
import { CozinhaComponent } from './pages/cozinha/cozinha.component';
import { OrderComponent } from './pages/order/order.component';

export const routes: Routes = [
  { path: '', redirectTo: 'cozinha', pathMatch: 'full' },
  { path: 'cozinha', component: CozinhaComponent },
  { path: 'cliente', component: OrderComponent },
  { path: '**', redirectTo: 'cozinha' },
];
