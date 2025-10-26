import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Navbar, Footer, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {

  banner: string = 'assets/hero-banner.jpg';

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
      preco: 150.00,
      raridade: 'Comum',
      imagem: 'https://repositorio.sbrauble.com/arquivos/in/onepiece/20/65660b594f905-g9v4h-az79t-c50bda060cc1af3b41e5f2fa36bee4f5.jpg',
      tcg: 'onePiece',
    }
  ];

  Ligas = [
    {
      titulo: 'Campeonato Regional de Pokémon TCG',
      tcg: 'Pokémon',
      data: '15 de Janeiro, 2025',
      local: 'Rua Conselheiro Portela, 655',
      participantes: 45,
      maxParticipantes: 64,
      premiacao: 'R$ 1.000.000,00'
    },
    {
      titulo: 'Torneio de Yu-Gi-Oh!',
      tcg: 'Yu-Gi-Oh!',
      data: '20 de Fevereiro, 2025',
      local: 'Estádio Olímpico, São Paulo',
      participantes: 32,
      maxParticipantes: 64,
      premiacao: 'R$ 500,00'
    },
    {
      titulo: 'Liga Magic',
      tcg: 'Magic',
      data: '25 de Março, 2025',
      local: 'Estádio Olímpico, São Paulo',
      participantes: 32,
      maxParticipantes: 64,
      premiacao: 'R$ 800,00'
    },
    {
      titulo: 'Torneio de One Piece',
      tcg: 'One Piece',
      data: '30 de Abril, 2025',
      local: 'Estádio Olímpico, São Paulo',
      participantes: 32,
      maxParticipantes: 64,
      premiacao: 'R$ 1.200,00'
    }
  ];

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

getTcgColorClass(tcg: string): string {
        switch (tcg.toLowerCase()) {
            case 'pokémon':
                return 'bg-yellow-500 text-white'; 
            case 'magic':
                return 'bg-blue-500 text-white'; 
            case 'yu-gi-oh!':
                return 'bg-red-600 text-white'; 
            case 'one piece':
                return 'bg-green-600 text-white';
            default:
                return 'bg-gray-500 text-white';
        }
    }
}
