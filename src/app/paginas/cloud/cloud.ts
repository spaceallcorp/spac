import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

import { Menu } from '../../layout/menu/menu';
import { Rodape } from '../../layout/rodape/rodape';
import { Form } from '../../layout/form/form';

@Component({
  selector: 'app-cloud',
  imports: [Menu, Rodape, Form, RouterLink],
  templateUrl: './cloud.html',
  styleUrl: './cloud.css'
})
export class Cloud {

  constructor(
    private meta: Meta,
    private title: Title
  ) {
    /* ✅ TITLE */
    this.title.setTitle('SPACEALL | Cloud e Edge para redes privadas empresariais');

    /* ✅ META DESCRIPTION */
    this.meta.addTag({
      name: 'description',
      content: 'Interligue ambientes cloud e nós SPACEALL através de caminhos privados, com uma arquitectura dimensionada para a sua operação.'
    });

    /* ✅ KEYWORDS */
    this.meta.addTag({
      name: 'keywords',
      content: 'SPACEALL Cloud, Edge, redes privadas, conectividade empresarial, Angola'
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
      content: 'SPACEALL | Cloud e Edge para redes privadas empresariais'
    });

    this.meta.addTag({
      property: 'og:description',
      content: 'Combine ambientes cloud e nós SPACEALL em caminhos privados, conforme os requisitos da sua empresa.'
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
      content: 'https://spaceall.net/cloud'
    });

    /* ✅ TWITTER CARD */
    this.meta.addTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.meta.addTag({
      name: 'twitter:title',
      content: 'SPACEALL | Cloud e Edge para redes privadas empresariais'
    });

    this.meta.addTag({
      name: 'twitter:description',
      content: 'Integre serviços cloud e nós SPACEALL através da rede privada da sua organização.'
    });

    this.meta.addTag({
      name: 'twitter:image',
      content: 'https://spaceall.net/images/cover-spaceall.jpg'
    });

  }

}
