import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Menu } from '../../layout/menu/menu';
import { Rodape } from '../../layout/rodape/rodape';
import { Form } from '../../layout/form/form';

@Component({
  selector: 'app-contacto',
  imports: [
    Menu, Rodape, Form
  ],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {

  constructor(
    private meta: Meta,
    private title: Title
  ) {
    /* ✅ TITLE */
    this.title.setTitle('SPACEALL | Contacto e Suporte Corporativo');

    /* ✅ META DESCRIPTION */
    this.meta.addTag({
      name: 'description',
      content: 'Fale com a SPACEALL sobre rede privada empresarial, ENaaS, AngolanVPN, Multi-homing BGP e SPACEALL Edge Box em Angola.'
    });

    /* ✅ KEYWORDS */
    this.meta.addTag({
      name: 'keywords',
      content: 'Contacto SPACEALL, rede privada, ENaaS, AngolanVPN, Edge Box, conectividade empresarial, Angola'
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
      content: 'SPACEALL | Contacto e Suporte Corporativo'
    });

    this.meta.addTag({
      property: 'og:description',
      content: 'Fale com a SPACEALL sobre redes privadas, ENaaS, AngolanVPN e conectividade empresarial em Angola.'
    });

    this.meta.addTag({
      property: 'og:type',
      content: 'website'
    });

    this.meta.addTag({
      property: 'og:image',
      content: 'https://spaceall.net/img/contacto-banner.jpg'
    });

    this.meta.addTag({
      property: 'og:url',
      content: 'https://spaceall.net/contacto'
    });

    /* ✅ TWITTER CARD */
    this.meta.addTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.meta.addTag({
      name: 'twitter:title',
      content: 'SPACEALL | Contacto e Suporte Corporativo'
    });

    this.meta.addTag({
      name: 'twitter:description',
      content: 'Contacte a SPACEALL para avaliar a ligação entre filiais, utilizadores e cloud da sua organização.'
    });

    this.meta.addTag({
      name: 'twitter:image',
      content: 'https://spaceall.net/img/contacto-banner.jpg'
    });

  }

}
