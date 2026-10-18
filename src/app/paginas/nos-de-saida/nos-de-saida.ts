import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

import { Form } from '../../layout/form/form';
import { Menu } from '../../layout/menu/menu';
import { Rodape } from '../../layout/rodape/rodape';

export interface PilarNosDeSaida {
  codigo: string;
  icone: string;
  titulo: string;
  descricao: string;
  beneficio: string;
}

export interface ItemFuncionamento {
  icone: string;
  titulo: string;
  descricao: string;
}

export interface VantagemEstrategica {
  icone: string;
  titulo: string;
  descricao: string;
}

@Component({
  selector: 'app-nos-de-saida',
  imports: [Form, Menu, Rodape, RouterLink],
  templateUrl: './nos-de-saida.html',
  styleUrl: './nos-de-saida.css'
})
export class NosDeSaida {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  readonly pilares: PilarNosDeSaida[] = [
    {
      codigo: 'A',
      icone: 'world',
      titulo: 'Multi-Homing Sem Complexidade (Multi-ASN)',
      descricao:
        'Combine links de diferentes operadores locais (Unitel, Paratus, TVCABO, Zap Fibra, etc.) numa única piscina de saída gerida por software.',
      beneficio:
        'A rede distribui o tráfego de forma inteligente e garante redundância nativa. Se o link A cair, o tráfego transita instantaneamente para o link B sem interromper as aplicações dos utilizadores.'
    },
    {
      codigo: 'B',
      icone: 'server',
      titulo: 'Nós de Saída Dedicados e Soberanos',
      descricao:
        'Posicionamento de nós de saída estrategicamente localizados em infraestruturas de alta performance (como o ANGONIX e a Clouds2Africa).',
      beneficio:
        'O tráfego corporativo sai diretamente para a internet através de nós otimizados em solo angolano, garantindo menor latência e total soberania de dados.'
    },
    {
      codigo: 'C',
      icone: 'settings',
      titulo: 'Traffic Shaping & Qualidade de Serviço (QoS)',
      descricao:
        'Definição de políticas avançadas de priorização de tráfego na borda.',
      beneficio:
        'Garanta que aplicações críticas (como sistemas ERP, VoIP e videochamadas) tenham largura de banda garantida, enquanto o tráfego de uso geral ou downloads consome apenas a capacidade restante.'
    }
  ];

  readonly mecanismosArquitetura: ItemFuncionamento[] = [
    {
      icone: 'git-branch',
      titulo: 'Seleção Dinâmica de Rota',
      descricao: 'O sistema escolhe sempre o melhor caminho para cada pacote de dados.'
    },
    {
      icone: 'refresh',
      titulo: 'Failover Transparente',
      descricao:
        'O comutar entre operadoras ocorre em frações de segundo, sem exigir reautenticação de utilizadores ou VPNs.'
    }
  ];

  readonly vantagens: VantagemEstrategica[] = [
    {
      icone: 'check',
      titulo: 'Continuidade Operacional Total',
      descricao:
        'Zero interrupções nas transações de caixa, atendimento ao cliente ou acesso a ferramentas de nuvem.'
    },
    {
      icone: 'trending-up',
      titulo: 'Otimização de Custos',
      descricao:
        'Aproveite links de menor custo para tráfego secundário e reserve os links de alta performance para o core do negócio, sem desperdício de largura de banda.'
    },
    {
      icone: 'credit-card',
      titulo: 'Faturação 100% em Kwanzas (AOA)',
      descricao:
        'Serviço gerido localmente, sem dependência de contratos internacionais complexos de trânsito IP.'
    }
  ];

  constructor() {
    this.title.setTitle('SPACEALL | Nós de Saída (Managed Exit Nodes & Multi-Homing) em Angola');
    this.meta.updateTag({
      name: 'description',
      content:
        'Controle absoluto sobre as rotas e saídas de internet da sua empresa. Agregue múltiplos operadores, adicione redundância Multi-ASN e otimize o tráfego de saída em Angola.'
    });
  }
}
