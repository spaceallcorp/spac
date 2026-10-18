import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

import { Form } from '../../layout/form/form';
import { Menu } from '../../layout/menu/menu';
import { Rodape } from '../../layout/rodape/rodape';

export interface MetricaCrescimento {
  icone: string;
  destaque: string;
  titulo: string;
  descricao: string;
}

export interface PilarAngolanVpn {
  codigo: string;
  icone: string;
  titulo: string;
  descricao: string;
  beneficio: string;
}

export interface RecursoEcossistema {
  icone: string;
  titulo: string;
  descricao: string;
}

export interface CasoUsoCorporativo {
  icone: string;
  titulo: string;
  descricao: string;
}

@Component({
  selector: 'app-angolanvpn',
  imports: [Form, Menu, Rodape, RouterLink],
  templateUrl: './angolanvpn.html',
  styleUrl: './angolanvpn.css'
})
export class AngolanVpn {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  readonly playStoreUrl = 'https://play.google.com/store/apps/details?id=com.angolanvpn.client';
  readonly officialSiteUrl = 'https://angolanvpn.com';

  readonly metricas: MetricaCrescimento[] = [
    {
      icone: 'trending-up',
      destaque: '+194%',
      titulo: 'Taxa de Crescimento de Público',
      descricao:
        'Picos de expansão que superam os 194% em média, impulsionados pela alta procura por endereçamento IP nacional seguro.'
    },
    {
      icone: 'bolt',
      destaque: '+971%',
      titulo: 'Aceleração de Aquisições',
      descricao:
        'Aumento expressivo nas aquisições de novos utilizadores com picos de crescimento diário registados acima de 971%.'
    },
    {
      icone: 'lock',
      destaque: 'Ativo & Recorrente',
      titulo: 'Retenção e Dispositivos Ativos',
      descricao:
        'Uma base sólida e em constante crescimento de instalações ativas e utilizadores mensais recorrentes, demonstrando a confiança contínua de profissionais e empresas.'
    }
  ];

  readonly pilares: PilarAngolanVpn[] = [
    {
      codigo: 'A',
      icone: 'world',
      titulo: 'IP Angolano Soberano (Acesso Global sem Barreiras)',
      descricao:
        'Permite que colaboradores em viagem internacional, parceiros ou equipas remotas acedam a serviços locais restritos, portais bancários corporativos e servidores internos como se estivessem fisicamente no escritório em Luanda.',
      beneficio:
        'Elimina bloqueios geográficos externos e garante a estabilidade de acesso a plataformas que exigem origem nacional.'
    },
    {
      codigo: 'B',
      icone: 'lock',
      titulo: 'Arquitetura Zero-Trust Network Access (ZTNA)',
      descricao:
        'Substitui as VPNs tradicionais legadas por um modelo de segurança rigoroso onde cada dispositivo e utilizador é autenticado e validado continuamente antes de interagir com o perímetro da rede.',
      beneficio:
        'Proteção avançada contra ameaças em redes públicas ou Wi-Fi não confiáveis, blindando os dados sensíveis da empresa contra interceptações.'
    },
    {
      codigo: 'C',
      icone: 'bolt',
      titulo: 'Performance Otimizada com Roteamento Local',
      descricao:
        'Integrado diretamente nos nós de saída geridos da SPACEALL e com pontos de presença optimizados no ANGONIX e Clouds2Africa.',
      beneficio:
        'Garante túneis encriptados rápidos, sem o atraso (latência excessiva) típico de VPNs comerciais internacionais que desviam o tráfego para servidores fora do continente.'
    }
  ];

  readonly recursosEcossistema: RecursoEcossistema[] = [
    {
      icone: 'refresh',
      titulo: 'Conectividade Fluida',
      descricao:
        'Comutação automática entre redes móveis (4G/5G) e Wi-Fi corporativo sem perda de sessão.'
    },
    {
      icone: 'settings',
      titulo: 'Gestão Centralizada para TI',
      descricao:
        'Painel de controlo administrativo para ativação, desativação e auditoria de acessos de utilizadores, garantindo total controlo ao Diretor de TI.'
    }
  ];

  readonly casosDeUso: CasoUsoCorporativo[] = [
    {
      icone: 'users',
      titulo: 'Equipas em Regime Híbrido / Remoto',
      descricao:
        'Garante que colaboradores a trabalhar a partir de casa mantenham os mesmos padrões de segurança da rede interna do escritório.'
    },
    {
      icone: 'location',
      titulo: 'Executivos em Viagem',
      descricao:
        'Assegura comunicações seguras e encriptadas em aeroportos, hotéis e redes estrangeiras, preservando a confidencialidade de documentos estratégicos.'
    },
    {
      icone: 'check',
      titulo: 'Auditoria e Conformidade',
      descricao:
        'Cumprimento rigoroso de políticas internas de acesso restrito a servidores de bases de dados e ERPs corporativos.'
    }
  ];

  constructor() {
    this.title.setTitle('SPACEALL | AngolanVPN & Secure Remote Access (ZTNA)');
    this.meta.updateTag({
      name: 'description',
      content:
        'Acesso remoto corporativo com identidade e IP Angolano 100% Soberano. Conecte executivos, equipas distribuídas e filiais aos recursos internos com Zero-Trust (ZTNA).'
    });
  }
}
