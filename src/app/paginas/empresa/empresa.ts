import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

import { Form } from '../../layout/form/form';
import { Menu } from '../../layout/menu/menu';
import { Rodape } from '../../layout/rodape/rodape';

export interface PilarEcossistema {
  icone: string;
  etiqueta: string;
  titulo: string;
  descricao: string;
  destaque?: string;
}

export interface DiferencialMercado {
  emoji: string;
  icone: string;
  titulo: string;
  descricao: string;
}

export interface PontoConectividade {
  provincia: string;
  papel: string;
}

@Component({
  selector: 'app-empresa',
  imports: [Form, Menu, Rodape, RouterLink],
  templateUrl: './empresa.html',
  styleUrl: './empresa.css'
})
export class Empresa {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  readonly pilaresEcossistema: PilarEcossistema[] = [
    {
      icone: 'server',
      etiqueta: 'INFRAESTRUTURA SOBERANA',
      titulo: 'Âncora Local & Baixa Latência',
      descricao:
        'Desenhamos as nossas soluções a partir do coração de Angola, mantendo parcerias e presença técnica direta nos principais pilares de infraestrutura do país, como clouds privadas, cloud do govenro e o IXPs locais, garantindo latências excecionais de 2 a 10 ms em percursos locais.',
      destaque: '2 a 10 ms em percursos locais'
    },
    {
      icone: 'world',
      etiqueta: 'ALCANCE INTERNACIONAL',
      titulo: 'Perspetivas Globais',
      descricao:
        'Através de redes overlay inteligentes e túneis encriptados de ponta a ponta, projetamos a presença digital das empresas angolanas para qualquer ponto do globo, garantindo identidades soberanas e conformidade internacional.',
      destaque: 'Encriptação ponta a ponta & IP Soberano'
    }
  ];

  readonly pontosMapa: PontoConectividade[] = [
    { provincia: 'Luanda', papel: 'Core & IXP Hub' },
    { provincia: 'Benguela', papel: 'Corredor Atlântico' },
    { provincia: 'Huambo', papel: 'Planalto Central' },
    { provincia: 'Lubango', papel: 'Eixo Sul' }
  ];

  readonly diferenciais: DiferencialMercado[] = [
    {
      emoji: '🇦🇴',
      icone: 'credit-card',
      titulo: 'Soberania Financeira & Faturação Local (AOA)',
      descricao:
        'Eliminamos a dependência complexa de pagamentos internacionais em moeda estrangeira. Todos os nossos contratos, serviços e licenças são faturados em Kwanzas (AOA), garantindo previsibilidade e controlo orçamental absoluto aos CFOs.'
    },
    {
      emoji: '🔀',
      icone: 'git-branch',
      titulo: 'Neutralidade e Liberdade de Operadoras',
      descricao:
        'Em vez de algemar a infraestrutura do cliente a um único fornecedor, a nossa tecnologia harmoniza múltiplos operadores (fibra, rede móvel 4G/5G, satélite e links dedicados) num ecossistema unificado, resiliente e inteligente.'
    },
    {
      emoji: '🛡️',
      icone: 'users',
      titulo: 'Engenharia Humana e Suporte Dedicado',
      descricao:
        'A nossa equipa técnica está presente onde o cliente precisa, compreende os desafios do terreno em Angola e desenha soluções à medida, unindo a robustez dos padrões globais à agilidade local.'
    }
  ];

  constructor() {
    this.title.setTitle('Sobre a SPACEALL Technologies | Arquitetura, Soberania e Visão');
    this.meta.updateTag({
      name: 'description',
      content:
        'Arquitetamos a infraestrutura que impulsiona o ecossistema digital de Angola. Engenharia de redes avançada, soberania de dados e visão de autonomia com faturação em Kwanzas (AOA).'
    });
  }

  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    if (typeof document !== 'undefined') {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
