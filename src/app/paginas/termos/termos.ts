import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

import { Menu } from '../../layout/menu/menu';
import { Rodape } from '../../layout/rodape/rodape';

@Component({
  selector: 'app-termos',
  imports: [Menu, Rodape, RouterLink],
  templateUrl: './termos.html',
  styleUrl: './termos.css'
})
export class Termos {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  constructor() {
    this.title.setTitle('SPACEALL | Termos e Condições Gerais de Serviço');
    this.meta.updateTag({
      name: 'description',
      content:
        'Termos e Condições Gerais de Serviço que regem a prestação de serviços empresariais SPACEALL Private Network, ENaaS, AngolanVPN e Edge Box em Angola.'
    });
  }
}
