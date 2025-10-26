import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  imports: [ CommonModule, Navbar, Footer, FormsModule ],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo {
  selectedTCG: string = 'all';
  selectedRaridade: string = 'all';
  searchTerm: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {
    // Pega o query param 'tcg' da URL
    this.route.queryParams.subscribe(params => {
      if (params['tcg']) {
        this.selectedTCG = params['tcg'];
      }
    });
  }

  Produtos = [
    {
      nome: 'Charizard VMAX',
      preco: 109.90,
      raridade: 'Ultra Rara',
      imagem: 'https://repositorio.sbrauble.com/arquivos/in/pokemon_bkp/cd/170/5092_20.jpg',
      tcg: 'Pokémon'
    },
    {
      nome: 'Dragão Branco de Olhos Azuis',
      preco: 129.90,
      raridade: 'Ultra Rara',
      imagem: 'https://repositorio.sbrauble.com/arquivos/in/yugioh_bkp/cd/826/134.jpg',
      tcg: 'Yu-Gi-Oh!'
    },
    {
      nome: 'Mox Sapphire',
      preco: 13000.00,
      raridade: 'Secreta',
      imagem: 'https://repositorio.sbrauble.com/arquivos/in/magic/316/5f4243bd2480b-bwyxig-h739qx-c1d15502fdd5c9dcfddc253627471218.jpg',
      tcg: 'Magic',
    },
    {
      nome: "Belo Betty",
      preco: 0.39,
      raridade: 'Comum',
      imagem: 'https://repositorio.sbrauble.com/arquivos/in/onepiece/20/65660b594f905-g9v4h-az79t-c50bda060cc1af3b41e5f2fa36bee4f5.jpg',
      tcg: 'onePiece',
    }
  ];

  

  get filteredProducts() {
    return this.Produtos.filter((p) => {
      const matchTCG = 
        this.selectedTCG === 'all' || 
        p.tcg.toLowerCase().includes(this.selectedTCG.toLowerCase());
      const matchRarity =
        this.selectedRaridade === 'all' ||
        p.raridade.toLowerCase().includes(this.selectedRaridade.toLowerCase());
      const matchSearch =
        this.searchTerm === '' ||
        p.nome.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchTCG && matchRarity && matchSearch;
    });
  }

  clearFilters() {
    this.selectedTCG = 'all';
    this.selectedRaridade = 'all';
    this.searchTerm = '';
  }

  getRarityColor(rarity: string): string {
  switch (rarity.toLowerCase()) {
    case 'rara':
      return 'bg-green-600';
    case 'épica':
      return 'bg-purple-600';
    case 'secreta':
      return 'bg-yellow-600';
    case 'ultra rara':
      return 'bg-blue-600';
    case 'comum':
        return 'bg-gray-500';
    default:
      return 'bg-black-600';
  }
}
}
