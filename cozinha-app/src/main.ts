import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { AppComponent } from './app/app.component';
import { CozinhaComponent } from './app/pages/cozinha/cozinha.component';
import { OrderComponent } from './app/pages/order/order.component';

const routes: Route[] = [
  { path: '', redirectTo: 'cliente', pathMatch: 'full' }, // Redireciona para /cliente
  { path: 'cozinha', component: CozinhaComponent }, // Define a rota /cozinha
  { path: 'cliente', component: OrderComponent }, // Define a rota /cliente
  { path: '**', redirectTo: 'cliente' }, // Redireciona qualquer rota inválida para /cliente
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
