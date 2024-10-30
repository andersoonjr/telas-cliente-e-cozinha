import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { AppComponent } from './app/app.component';
import { CozinhaComponent } from './app/pages/cozinha/cozinha.component';

const routes: Route[] = [
  { path: '', redirectTo: 'cozinha', pathMatch: 'full' }, // Redireciona para /cozinha
  { path: 'cozinha', component: CozinhaComponent }, // Define a rota /cozinha
  { path: '**', redirectTo: 'cozinha' }, // Redireciona qualquer rota inválida para /cozinha
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
