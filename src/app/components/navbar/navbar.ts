import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [ CommonModule, RouterModule ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isMenuOpen = false;
  isSearchVisible: boolean = false;
  searchQuery: string = '';

  navLinks = [
    { name: 'Início', path: '/home' },
    { name: 'Catálogo', path: '/catalogo' },
    { name: 'Ligas', path: '/ligas' },
    { name: 'Contato', path: '/contato' }
  ];

  constructor(public router: Router) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  isActive(path: string) {
    return this.router.url === path;
  }

  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible;
    // Opcional: Se estiver abrindo, foca no input
    if (this.isSearchVisible) {
      // (Para focar de fato, você precisaria de ViewChild e um pequeno delay)
      // Mas a lógica básica de alternar é suficiente por agora.
    }
  }

  closeSearch() {
    this.isSearchVisible = false;
    this.searchQuery = ''; // Limpa o campo
  }
}
