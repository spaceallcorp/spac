import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

import { Menu } from '../../layout/menu/menu';
import { Rodape } from '../../layout/rodape/rodape';

@Component({
  selector: 'app-pprivacidade',
  imports: [Menu, Rodape, RouterLink],
  templateUrl: './pprivacidade.html',
  styleUrl: './pprivacidade.css'
})
export class Pprivacidade {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  constructor() {
    this.title.setTitle('SPACEALL | Política de Privacidade');
    this.meta.updateTag({
      name: 'description',
      content:
        'Saiba como a SPACEALL trata e protege os dados pessoais enviados através do website e dos pedidos de informação sobre serviços empresariais em Angola.'
    });
  }
}
