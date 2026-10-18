import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

import { Menu } from '../../layout/menu/menu';
import { Rodape } from '../../layout/rodape/rodape';
import { Form } from '../../layout/form/form';

@Component({
  selector: 'app-voz-video',
  imports: [
    Menu,
    Rodape,
    Form,
    RouterLink
  ],
  templateUrl: './voz-video.html',
  styleUrl: './voz-video.css'
})
export class VozVideo {

  constructor(
    private meta: Meta,
    private title: Title
  ) {

    /* ✅ TITLE (Google) */
    this.title.setTitle('SPACEALL | Comunicação empresarial por voz e vídeo');

    /* ✅ META DESCRIPTION */
    this.meta.addTag({
      name: 'description',
      content: 'Explore soluções de voz e vídeo para equipas distribuídas, integradas com a conectividade e os sistemas da sua organização.'
    });

    /* ✅ KEYWORDS */
    this.meta.addTag({
      name: 'keywords',
      content: 'comunicação empresarial, voz, vídeo, equipas distribuídas, intercomunicação, SPACEALL Angola'
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
      content: 'SPACEALL | Comunicação empresarial por voz e vídeo'
    });

    this.meta.addTag({
      property: 'og:description',
      content: 'Planeie comunicações de voz e vídeo para equipas, centros de operação e locais ligados pela rede SPACEALL.'
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
      content: 'https://spaceall.net/voz-video'
    });

    /* ✅ TWITTER */
    this.meta.addTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.meta.addTag({
      name: 'twitter:title',
      content: 'SPACEALL | Comunicação empresarial por voz e vídeo'
    });

    this.meta.addTag({
      name: 'twitter:description',
      content: 'Comunicação para equipas distribuídas, integrada com a conectividade da sua organização.'
    });

    this.meta.addTag({
      name: 'twitter:image',
      content: 'https://spaceall.net/images/cover-spaceall.jpg'
    });

  }

}
