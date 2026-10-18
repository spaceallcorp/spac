import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

import { Menu } from '../../layout/menu/menu';
import { Rodape } from '../../layout/rodape/rodape';
import { Form } from '../../layout/form/form';

@Component({
  selector: 'app-lorawan',
  imports: [
    Menu,
    Rodape,
    Form,
    RouterLink
  ],
  templateUrl: './lorawan.html',
  styleUrl: './lorawan.css'
})
export class Lorawan {

  constructor(
    private meta: Meta,
    private title: Title
  ) {

    /* ✅ TITLE */
    this.title.setTitle('SPACEALL | Multi-homing BGP para empresas em Angola');

    /* ✅ META DESCRIPTION */
    this.meta.addTag({
      name: 'description',
      content: 'Ligue filiais e centros de operação a múltiplos operadores para aumentar a resiliência e continuidade da rede empresarial.'
    });

    /* ✅ KEYWORDS */
    this.meta.addTag({
      name: 'keywords',
      content: 'Multi-homing BGP, redundância de rede, continuidade empresarial, SPACEALL Angola'
    });

    /* ✅ ROBOTS */
    this.meta.addTag({
      name: 'robots',
      content: 'index, follow'
    });

    /* ✅ AUTHOR */
    this.meta.addTag({
      name: 'author',
      content: 'SPACEALL'
    });

    /* ✅ OPEN GRAPH */
    this.meta.addTag({
      property: 'og:title',
      content: 'SPACEALL | Multi-homing BGP para empresas em Angola'
    });

    this.meta.addTag({
      property: 'og:description',
      content: 'Combine múltiplos operadores e caminhos de acesso para reforçar a continuidade de rede de filiais e centros de operação.'
    });

    this.meta.addTag({
      property: 'og:type',
      content: 'website'
    });

    this.meta.addTag({
      property: 'og:image',
      content: 'https://spaceall.net/images/cover-spaceall.jpg'
    });

    this.meta.addTag({
      property: 'og:url',
      content: 'https://spaceall.net/multi-homing-bgp'
    });

    /* ✅ TWITTER */
    this.meta.addTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.meta.addTag({
      name: 'twitter:title',
      content: 'SPACEALL | Multi-homing BGP para empresas em Angola'
    });

    this.meta.addTag({
      name: 'twitter:description',
      content: 'Redundância de rede e Multi-homing BGP para operações empresariais.'
    });

    this.meta.addTag({
      name: 'twitter:image',
      content: 'https://spaceall.net/images/cover-spaceall.jpg'
    });

  }

}
