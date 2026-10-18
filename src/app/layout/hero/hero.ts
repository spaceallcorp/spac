import { afterNextRender, Component, DestroyRef, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  readonly messages = [
    {
      title: 'A sua rede privada, sobre qualquer ligação.',
      prefix: 'A sua rede privada, sobre qualquer ',
      highlight: 'ligação',
      suffix: '.',
      promise: 'Ligue filiais e infraestruturas com total independência de operadora.',
      description: 'Construa caminhos privados, seguros e resilientes unindo fibra, rede móvel ou satélite, sem o custo proibitivo nem a burocracia de circuitos dedicados tradicionais.'
    },
    {
      title: 'A sua infraestrutura corporativa, pronta em minutos.',
      prefix: 'A sua ',
      highlight: 'infraestrutura',
      suffix: ' corporativa, pronta em minutos.',
      promise: 'Elimine a complexidade de redes legadas e processos lentos.',
      description: 'Interligue filiais, datacenters e a Clouds2Africa numa malha overlay L3 privada e gerida por software, ativada instantaneamente sem necessidade de IPs fixos ou configurações manuais.'
    },
    {
      title: 'Conectividade soberana, sem pontos de falha.',
      prefix: '',
      highlight: 'Conectividade',
      suffix: ' soberana, sem pontos de falha.',
      promise: 'Garanta alta disponibilidade para as operações mais críticas da sua empresa.',
      description: 'Obtenha redundância Multi-Homing automática e controlo absoluto sobre as rotas de saída da sua internet, com IP Angolano Soberano e proteção Zero-Trust para equipas distribuídas.'
    }
  ];

  readonly currentMessage = signal(0);
  readonly previousMessage = signal(-1);

  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    let rotationTimer: ReturnType<typeof setInterval> | undefined;

    afterNextRender(() => {
      rotationTimer = setInterval(() => {
        const nextMessage = (this.currentMessage() + 1) % this.messages.length;
        this.previousMessage.set(this.currentMessage());
        this.currentMessage.set(nextMessage);
      }, 7000);
    });

    this.destroyRef.onDestroy(() => {
      if (rotationTimer !== undefined) {
        clearInterval(rotationTimer);
      }
    });
  }
}
