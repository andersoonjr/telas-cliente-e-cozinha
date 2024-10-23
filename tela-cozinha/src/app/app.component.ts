import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TelaCozinhaComponent } from './components/tela-cozinha/tela-cozinha.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TelaCozinhaComponent],
  template: `
    <app-tela-cozinha></app-tela-cozinha>
  `,
  styles: []
})
export class AppComponent {
  title = 'tela-cozinha';
}