import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<router-outlet></router-outlet>`, // Renderiza as rotas aqui
  imports: [RouterOutlet],
})
export class AppComponent {}
