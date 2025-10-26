import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';

interface Liga {
  titulo: string;
  tcg: string;
  data: string;
  local: string;
  participantes: number;
  maxParticipantes: number;
  premiacao: string;
}

@Component({
  selector: 'app-ligas',
  imports: [ CommonModule, Navbar, Footer ],
  templateUrl: './ligas.html',
  styleUrl: './ligas.css',
})
export class Ligas {
  ligas: Liga[] = [
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
