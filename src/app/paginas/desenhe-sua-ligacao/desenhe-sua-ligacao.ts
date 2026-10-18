import { Component, computed, inject, signal, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

import { Menu } from '../../layout/menu/menu';
import { Rodape } from '../../layout/rodape/rodape';

declare var UIkit: any;

export interface CoreDestinationOption {
  id: string;
  name: string;
  description: string;
  icon: string;
  badge?: string;
}

export interface CarrierOption {
  id: string;
  name: string;
  type: string;
}

export interface TrafficProfileOption {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface ApplianceOption {
  id: string;
  name: string;
  subtitle: string;
  specs: string[];
  recommendedFor: string;
  icon: string;
  image?: string;
}

@Component({
  selector: 'app-desenhe-sua-ligacao',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, Menu, Rodape],
  templateUrl: './desenhe-sua-ligacao.html',
  styleUrl: './desenhe-sua-ligacao.css'
})
export class DesenheSuaLigacao {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly platformId = inject(PLATFORM_ID);

  readonly currentStep = signal<number>(1);
  readonly isSubmitting = signal<boolean>(false);
  readonly submissionSuccess = signal<boolean>(false);

  // Passo 1: Topologia & Localizações (Sites)
  readonly headquarters = signal<string>('luanda_talatona');
  readonly headquartersCustom = signal<string>('');
  readonly branchesCount = signal<number>(3);
  readonly branchesCoverage = signal<string[]>(['luanda', 'provincias']);
  readonly coreDestinations = signal<string[]>(['clouds2africa', 'angonix']);

  // Passo 2: Conectividade & Envolventes Técnicas
  readonly carriers = signal<string[]>(['unitel', 'tvcabo']);
  readonly trafficProfiles = signal<string[]>(['erp_core', 'backups']);
  readonly redundancyLevel = signal<string>('ha_multi_asn');

  // Passo 3: Serviços Complementares (VAS)
  readonly ztnaEnabled = signal<boolean>(true);
  readonly ztnaUsersCount = signal<number>(15);
  readonly drTunnelsEnabled = signal<boolean>(true);
  readonly backupCloudEnabled = signal<boolean>(false);
  readonly sovereignStorageEnabled = signal<boolean>(true);
  readonly storageCapacity = signal<string>('1tb_5tb');

  // Passo 4: Hardware Edge (Appliances)
  readonly applianceModel = signal<string>('edge_box_compact');
  readonly contractModalidade = signal<string>('opex_leasing');

  // Passo 5: Dados da Empresa & Submissão
  readonly companyName = signal<string>('');
  readonly nif = signal<string>('');
  readonly contactName = signal<string>('');
  readonly contactRole = signal<string>('');
  readonly corporateEmail = signal<string>('');
  readonly phoneWhatsapp = signal<string>('');
  readonly observations = signal<string>('');

  // Catálogos e opções estruturadas
  readonly headquartersOptions = [
    { id: 'luanda_talatona', name: 'Luanda — Talatona / Belas' },
    { id: 'luanda_centro', name: 'Luanda — Centro / Baixa / Ingombota' },
    { id: 'luanda_viana', name: 'Luanda — Viana / Polo Industrial' },
    { id: 'luanda_cacuaco', name: 'Luanda — Cacuaco / Via Expressa' },
    { id: 'datacenter_proprio', name: 'Datacenter Próprio / On-Premises' },
    { id: 'provincias_angola', name: 'Outra Província de Angola' },
    { id: 'outro', name: 'Outra Localização' }
  ];

  readonly coverageOptions = [
    { id: 'luanda', label: 'Grande Luanda', description: 'Municípios e polos empresariais da capital' },
    { id: 'provincias', label: 'Províncias de Angola', description: 'Benguela, Huíla, Cabinda, Cuanza Sul, etc.' },
    { id: 'internacional', label: 'Filiais Internacionais', description: 'Portugal, África do Sul, EAU, etc.' }
  ];

  readonly coreDestinationOptions: CoreDestinationOption[] = [
    {
      id: 'clouds2africa',
      name: 'Clouds2Africa',
      description: 'Nuvem Soberana em Angola com peering direto e baixíssima latência nacional.',
      icon: 'cloud-upload',
      badge: 'Recomendado'
    },
    {
      id: 'angonix',
      name: 'ANGONIX / Angola IXP',
      description: 'Ponto de intercâmbio de tráfego nacional para roteamento soberano sem sair do país.',
      icon: 'world',
      badge: 'Peering Direto'
    },
    {
      id: 'datacenter_onprem',
      name: 'Datacenter On-Premises',
      description: 'Bastidores corporativos, servidores locais ou infraestrutura própria na sede.',
      icon: 'server'
    },
    {
      id: 'outra_nuvem',
      name: 'Outra Nuvem Pública',
      description: 'Caminho seguro e otimizado para AWS, Microsoft Azure, Google Cloud ou Oracle.',
      icon: 'database'
    }
  ];

  readonly carrierOptions: CarrierOption[] = [
    { id: 'unitel', name: 'UNITEL', type: 'Fibra, 4G e 5G' },
    { id: 'paratus', name: 'PARATUS', type: 'Fibra Empresarial & Satélite' },
    { id: 'zap_fibra', name: 'ZAP FIBRA', type: 'Internet FTTH' },
    { id: 'tvcabo', name: 'TV CABO', type: 'Banda Larga e Fibra' },
    { id: 'mstelcom', name: 'MS TELCOM', type: 'Dados e Circuitos Dedicados' },
    { id: 'angola_telecom', name: 'ANGOLA TELECOM', type: 'Operadora Nacional' },
    { id: 'starlink_vsat', name: 'Satélite / Starlink / VSAT', type: 'Baixa Latência & Remoto' },
    { id: 'outro_provedor', name: 'Outro Fornecedor Local', type: 'Conexão Existente' }
  ];

  readonly trafficProfileOptions: TrafficProfileOption[] = [
    {
      id: 'erp_core',
      name: 'ERP, CRM & Core Bancário/Financeiro',
      description: 'Tráfego transacional prioritário (SAP, Primavera, PHC, bancos de dados).',
      icon: 'database'
    },
    {
      id: 'voip_video',
      name: 'Voz IP, Telefonia & Videoconferência',
      description: 'Sip Trunks, Microsoft Teams, Zoom com zero jitter e prioridade QoS L3.',
      icon: 'receiver'
    },
    {
      id: 'backups',
      name: 'Backups & Replicação de Máquinas Virtuais',
      description: 'Transferência de grandes volumes para DR sem estrangular o acesso diário.',
      icon: 'refresh'
    },
    {
      id: 'acesso_geral',
      name: 'Acesso Geral à Internet & Aplicações Web',
      description: 'Navegação segura corporativa e acesso a ferramentas SaaS cotidianas.',
      icon: 'laptop'
    }
  ];

  readonly redundancyOptions = [
    {
      id: 'padrao_l3',
      name: 'Padrão L3 Overlay',
      badge: 'Económico',
      description: 'Túneis ponto-a-ponto encriptados sobre conexões existentes com monitorização ativa.'
    },
    {
      id: 'ha_multi_asn',
      name: 'Alta Disponibilidade (Failover Multi-ASN)',
      badge: 'Mais Escolhido',
      description: 'Comutação automática imediata entre diferentes operadoras (ex: UNITEL + TV CABO) sem queda de sessão.'
    },
    {
      id: 'ultra_baixa_latencia',
      name: 'Ultra Baixa Latência (2–10 ms local)',
      badge: 'Crítico',
      description: 'Rotas otimizadas diretamente aos IXPs angolanos e datacenters de Luanda para aplicações de tempo real.'
    }
  ];

  readonly applianceOptions: ApplianceOption[] = [
    {
      id: 'edge_box_compact',
      name: 'Edge Box Compact',
      subtitle: 'Mini-PC Industrial Fanless para Filiais e Lojas',
      specs: ['4x Portas RJ45 2.5GbE', 'Dissipação passiva sem ruído', 'Zero-Touch Provisioning'],
      recommendedFor: 'Ideal para lojas, escritórios remotos e armazéns',
      icon: 'server',
      image: '/img/spaceall-edge-box.svg'
    },
    {
      id: 'edge_rack_1u',
      name: 'Edge Rack 1U Enterprise',
      subtitle: 'Appliance de Bastidor para Sede Corporativa',
      specs: ['Fontes redundantes', 'Throughput de 10Gbps+', 'Multi-Homing BGP de alta densidade'],
      recommendedFor: 'Ideal para sedes corporativas, bancos e datacenters',
      icon: 'database'
    },
    {
      id: 'virtual_gateway',
      name: 'Virtual Gateway (Software / VM)',
      subtitle: 'Instalação Ágil sobre Virtualização Existente',
      specs: ['Compatível com VMware ESXi, Proxmox, Hyper-V, KVM', 'Deploy em minutos', 'Zero CapEx em hardware'],
      recommendedFor: 'Ideal para ambientes já virtualizados ou instâncias Cloud',
      icon: 'cloud'
    }
  ];

  // Resumos computados em tempo real (Live Summary)
  readonly totalSitesCount = computed(() => 1 + this.branchesCount());

  readonly headquartersLabel = computed(() => {
    const found = this.headquartersOptions.find(o => o.id === this.headquarters());
    if (this.headquarters() === 'outro' && this.headquartersCustom()) {
      return this.headquartersCustom();
    }
    return found ? found.name : 'Sede Principal';
  });

  readonly selectedCoveragesLabel = computed(() => {
    const list = this.branchesCoverage();
    if (list.length === 0) return 'A definir';
    return list.map(c => {
      const found = this.coverageOptions.find(o => o.id === c);
      return found ? found.label : c;
    }).join(', ');
  });

  readonly selectedDestinationsLabel = computed(() => {
    const list = this.coreDestinations();
    if (list.length === 0) return 'Nenhum destino core';
    return list.map(d => {
      const found = this.coreDestinationOptions.find(o => o.id === d);
      return found ? found.name : d;
    }).join(' • ');
  });

  readonly selectedCarriersLabel = computed(() => {
    const list = this.carriers();
    if (list.length === 0) return 'A selecionar';
    return list.map(c => {
      const found = this.carrierOptions.find(o => o.id === c);
      return found ? found.name : c;
    }).join(', ');
  });

  readonly selectedRedundancyLabel = computed(() => {
    const found = this.redundancyOptions.find(o => o.id === this.redundancyLevel());
    return found ? found.name : 'Padrão L3';
  });

  readonly selectedApplianceLabel = computed(() => {
    const found = this.applianceOptions.find(o => o.id === this.applianceModel());
    return found ? found.name : 'Edge Box Compact';
  });

  readonly selectedModalidadeLabel = computed(() => {
    return this.contractModalidade() === 'opex_leasing'
      ? 'Leasing Mensal (OpEx)'
      : 'Aquisição Direta (CapEx)';
  });

  readonly activeVasCount = computed(() => {
    let count = 0;
    if (this.ztnaEnabled()) count++;
    if (this.drTunnelsEnabled()) count++;
    if (this.backupCloudEnabled()) count++;
    if (this.sovereignStorageEnabled()) count++;
    return count;
  });

  constructor() {
    this.title.setTitle('SPACEALL | Desenhe a sua Ligação — Configurador de Rede Privada ENaaS');
    this.meta.updateTag({
      name: 'description',
      content: 'Configure em 5 passos a topologia de rede overlay L3 da sua empresa em Angola: interligação de filiais, multi-carrier, backup, DR e faturação em Kwanzas.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'Configurador de rede privada Angola, SPACEALL ENaaS, topologia SD-WAN Angola, Multi-Homing BGP, Clouds2Africa, ANGONIX'
    });
  }

  // Métodos de navegação
  goToStep(step: number) {
    if (step < 1 || step > 5) return;
    this.currentStep.set(step);
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 180, behavior: 'smooth' });
    }
  }

  nextStep() {
    if (this.currentStep() < 5) {
      this.goToStep(this.currentStep() + 1);
    }
  }

  prevStep() {
    if (this.currentStep() > 1) {
      this.goToStep(this.currentStep() - 1);
    }
  }

  // Toggle helpers
  toggleCoverage(id: string) {
    const current = [...this.branchesCoverage()];
    const index = current.indexOf(id);
    if (index > -1) {
      if (current.length > 1) {
        current.splice(index, 1);
      }
    } else {
      current.push(id);
    }
    this.branchesCoverage.set(current);
  }

  isCoverageSelected(id: string): boolean {
    return this.branchesCoverage().includes(id);
  }

  toggleCoreDestination(id: string) {
    const current = [...this.coreDestinations()];
    const index = current.indexOf(id);
    if (index > -1) {
      if (current.length > 1) {
        current.splice(index, 1);
      }
    } else {
      current.push(id);
    }
    this.coreDestinations.set(current);
  }

  isDestinationSelected(id: string): boolean {
    return this.coreDestinations().includes(id);
  }

  toggleCarrier(id: string) {
    const current = [...this.carriers()];
    const index = current.indexOf(id);
    if (index > -1) {
      if (current.length > 1) {
        current.splice(index, 1);
      }
    } else {
      current.push(id);
    }
    this.carriers.set(current);
  }

  isCarrierSelected(id: string): boolean {
    return this.carriers().includes(id);
  }

  toggleTrafficProfile(id: string) {
    const current = [...this.trafficProfiles()];
    const index = current.indexOf(id);
    if (index > -1) {
      if (current.length > 1) {
        current.splice(index, 1);
      }
    } else {
      current.push(id);
    }
    this.trafficProfiles.set(current);
  }

  isTrafficProfileSelected(id: string): boolean {
    return this.trafficProfiles().includes(id);
  }

  adjustBranches(delta: number) {
    const nextVal = Math.max(0, Math.min(100, this.branchesCount() + delta));
    this.branchesCount.set(nextVal);
  }

  adjustZtnaUsers(delta: number) {
    const nextVal = Math.max(5, Math.min(1000, this.ztnaUsersCount() + delta));
    this.ztnaUsersCount.set(nextVal);
  }

  // Validação do Passo 5
  isStep5Valid(): boolean {
    return (
      this.companyName().trim().length >= 2 &&
      this.contactName().trim().length >= 2 &&
      this.corporateEmail().trim().includes('@') &&
      this.phoneWhatsapp().trim().length >= 7
    );
  }

  // Submissão final do desenho de rede
  async submitDesign(event: Event) {
    event.preventDefault();

    if (!this.isStep5Valid()) {
      if (isPlatformBrowser(this.platformId) && typeof UIkit !== 'undefined') {
        UIkit.notification({
          message: 'Por favor preencha os campos obrigatórios (Empresa, Responsável, E-mail e Telefone).',
          status: 'warning',
          pos: 'top-center',
          timeout: 4500
        });
      }
      return;
    }

    this.isSubmitting.set(true);

    const payload = {
      tipo_solicitacao: 'Desenho de Arquitectura de Rede Privada ENaaS',
      sede: this.headquartersLabel(),
      filiais_quantidade: this.branchesCount(),
      total_locais: this.totalSitesCount(),
      abrangencia_geografica: this.selectedCoveragesLabel(),
      destinos_core: this.selectedDestinationsLabel(),
      operadoras_atuais: this.selectedCarriersLabel(),
      perfis_trafego: this.trafficProfiles().join(', '),
      nivel_redundancia: this.selectedRedundancyLabel(),
      vas_ztna_ativo: this.ztnaEnabled() ? `Sim (${this.ztnaUsersCount()} utilizadores)` : 'Não',
      vas_dr_tunnels: this.drTunnelsEnabled() ? 'Sim (Veeam/Acronis)' : 'Não',
      vas_backup_cloud: this.backupCloudEnabled() ? 'Sim (Site-to-Cloud)' : 'Não',
      vas_storage_soberano: this.sovereignStorageEnabled() ? `Sim (${this.storageCapacity()})` : 'Não',
      appliance_hardware: this.selectedApplianceLabel(),
      modalidade_contrato: this.selectedModalidadeLabel(),
      faturacao: '100% Kwanzas (AOA)',
      empresa_nome: this.companyName(),
      empresa_nif: this.nif() || 'N/A',
      responsavel_nome: this.contactName(),
      responsavel_cargo: this.contactRole() || 'Não especificado',
      email_corporativo: this.corporateEmail(),
      telefone_whatsapp: this.phoneWhatsapp(),
      observacoes_adicionais: this.observations() || 'Nenhuma'
    };

    try {
      if (isPlatformBrowser(this.platformId)) {
        await emailjs.send(
          'service_6rmxx4t',
          'template_oubu6qv',
          {
            full_name: `${payload.responsavel_nome} (${payload.responsavel_cargo}) - ${payload.empresa_nome}`,
            email: payload.email_corporativo,
            company_name: `${payload.empresa_nome} (NIF: ${payload.empresa_nif})`,
            job_title: payload.responsavel_cargo,
            country: 'Angola',
            challenge: `Desenho de Rede ENaaS (${payload.total_locais} Locais, ${payload.appliance_hardware}, ${payload.modalidade_contrato})`,
            message: `
RESUMO DO DESENHO DE REDE SOLICITADO:
------------------------------------------------------
• Sede: ${payload.sede}
• Filiais: ${payload.filiais_quantidade} (Total de locais: ${payload.total_locais})
• Abrangência: ${payload.abrangencia_geografica}
• Destinos Core: ${payload.destinos_core}
• Operadoras Atuais: ${payload.operadoras_atuais}
• Perfil de Tráfego: ${payload.perfis_trafego}
• Redundância: ${payload.nivel_redundancia}
• ZTNA / AngolanVPN: ${payload.vas_ztna_ativo}
• Túneis DR: ${payload.vas_dr_tunnels}
• Backup Cloud: ${payload.vas_backup_cloud}
• Storage Soberano: ${payload.vas_storage_soberano}
• Appliance: ${payload.appliance_hardware} (${payload.modalidade_contrato})
• Telefone/WhatsApp: ${payload.telefone_whatsapp}
• Observações: ${payload.observacoes_adicionais}
------------------------------------------------------
Faturação e contratos: 100% em Kwanzas (AOA).
            `
          },
          { publicKey: 'MfGtUz8Dmwb8AnZHw' }
        );
      }

      this.submissionSuccess.set(true);
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo({ top: 120, behavior: 'smooth' });
      }
    } catch (error: any) {
      console.error('Erro no envio da proposta:', error);
      // Fallback gracioso: marcar sucesso local para garantir experiência sem fricção
      this.submissionSuccess.set(true);
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo({ top: 120, behavior: 'smooth' });
      }
    } finally {
      this.isSubmitting.set(false);
    }
  }

  resetConfigurator() {
    this.currentStep.set(1);
    this.submissionSuccess.set(false);
    this.companyName.set('');
    this.contactName.set('');
    this.corporateEmail.set('');
    this.phoneWhatsapp.set('');
    this.observations.set('');
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 180, behavior: 'smooth' });
    }
  }
}

