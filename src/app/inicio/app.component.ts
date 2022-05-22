import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'home' },
    { title: 'Ingresar', url: '/folder/Outbox', icon: 'log-in' },
    { title: 'Registrarse', url: '/folder/Favorites', icon: 'clipboard' },
    { title: 'Creditos', url: '/folder/Archived', icon: 'construct' },
  ];
  constructor() {}
}
