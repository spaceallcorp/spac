import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

import { Form } from '../../layout/form/form';
import { Menu } from '../../layout/menu/menu';
import { Rodape } from '../../layout/rodape/rodape';

export interface PilarTecnico {
  codigo: string;
  icone: string;
  titulo: string;
  descricao: string;
  beneficio: string;
}

export interface ItemIntegracao {
  icone: string;
  nome: string;
  descricao: string;
}

export interface CasoDeUso {
  icone: string;
  setor: string;
  descricao: string;
}

@Component({
  selector: 'app-ligacoes-privadas',
  imports: [Form, Menu, Rodape, RouterLink],
  templateUrl: './ligacoes-privadas.html',
  styleUrl: './ligacoes-privadas.css'
})
export class LigacoesPrivadas {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  readonly pilares: PilarTecnico[] = [
    {
      codigo: 'A',
      icone: 'link',
      titulo: 'Malha P2P e Multi-Site Instantânea (Full-Mesh)',
      descricao:
        'Todas as filiais comunicam diretamente entre si sem necessitar de passar obrigatoriamente por um datacenter central (arquitetura Hub-and-Spoke opcional ou Full-Mesh distribuída).',
      beneficio:
        'Redução drástica da latência interna e tráfego otimizado para aplicações corporativas críticas (ERP, sistemas de faturação, bases de dados).'
    },
    {
      codigo: 'B',
      icone: 'lock',
      titulo: 'Encriptação de Ponta a Ponta (Zero-Trust Transport)',
      descricao:
        'O tráfego de dados corporativos é encapsulado e encriptado com padrões criptográficos robustos antes de sair de cada appliance local.',
      beneficio:
        'Se um link subjacente for comprometido, os dados continuam totalmente seguros e ilegíveis para terceiros.'
    },
    {
      codigo: 'C',
      icone: 'bolt',
      titulo: 'Agnosticismo de Operadora & Resiliência Nativa',
      descricao:
        'A rede overlay da SPACEALL não se importa com quem fornece o acesso à internet na ponta. Pode misturar links da Unitel, Paratus, TVCABO ou Starlink na mesma rede virtual.',
      beneficio:
        'Se a fibra principal de uma filial cair, a rede comuta automaticamente o tráfego para o link secundário sem quebrar as sessões ativas dos utilizadores.'
    }
  ];

  readonly integracoes: ItemIntegracao[] = [
    {
      icone: 'cloud-upload',
      nome: 'Clouds2Africa',
      descricao: 'Conexão direta e sem atritos com a nuvem soberana angolana.'
    },
    {
      icone: 'server',
      nome: 'ANGONIX',
      descricao:
        'Troca de tráfego local ultra-rápida, mantendo o tráfego dentro de Angola e evitando saltos internacionais desnecessários.'
    },
    {
      icone: 'cog',
      nome: 'Equipamentos Edge Flexíveis',
      descricao:
        'Instalação física através de Edge Boxes compactas (mini-PCs industriais) nas lojas/filiais ou Edge Racks 1U nas sedes.'
    }
  ];

  readonly casosDeUso: CasoDeUso[] = [
    {
      icone: 'credit-card',
      setor: 'Banca & Seguros',
      descricao:
        'Interligação de agências e postos de atendimento remotos com os servidores centrais em Luanda em conformidade com as normas do regulador.'
    },
    {
      icone: 'cart',
      setor: 'Retalho & Distribuição',
      descricao:
        'Sincronização em tempo real de stocks, POS (terminais de pagamento) e sistemas de faturação em dezenas de lojas provinciais.'
    },
    {
      icone: 'world',
      setor: 'Indústria & Energia',
      descricao:
        'Comunicação segura entre campos de extração, fábricas e escritórios centrais sobre links de satélite e rádio de alta perda.'
    }
  ];

  constructor() {
    this.title.setTitle('SPACEALL | Ligações Privadas (Redes Overlay L3) em Angola');
    this.meta.updateTag({
      name: 'description',
      content:
        'Interligue filiais, datacenters e nuvens numa única malha privada. Substitua circuitos dedicados rígidos e VPNs instáveis por uma rede Overlay L3 encriptada de ponta a ponta.'
    });
  }
}
