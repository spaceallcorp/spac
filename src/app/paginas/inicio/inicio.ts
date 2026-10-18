import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Menu } from '../../layout/menu/menu';
import { Hero } from '../../layout/hero/hero';
import { Form } from '../../layout/form/form';
import { Rodape } from '../../layout/rodape/rodape';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-inicio',
  imports: [
    Menu, Hero, Form, Rodape, NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {

  constructor(
    private meta: Meta,
    private title: Title
  ) {
    /* ✅ TITLE */
    this.title.setTitle('SPACEALL | Rede Privada Empresarial, ENaaS e AngolanVPN em Angola');

    /* ✅ META DESCRIPTION */
    this.meta.addTag({
      name: 'description',
      content: 'A SPACEALL liga filiais, utilizadores e cloud sobre redes existentes com uma rede privada overlay, Zero-Trust, Multi-homing BGP, ENaaS e AngolanVPN.'
    });

    /* ✅ KEYWORDS */
    this.meta.addTag({
      name: 'keywords',
      content: 'SPACEALL Private Network, SPACEALL ENaaS, AngolanVPN, SPACEALL Business VPN, SPACEALL Edge Box, redes privadas empresariais, Multi-homing BGP, Angola'
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
      content: 'SPACEALL | Rede Privada Empresarial, ENaaS e AngolanVPN em Angola'
    });

    this.meta.addTag({
      property: 'og:description',
      content: 'Redes privadas sobre qualquer ligação: SPACEALL Private Network, ENaaS e AngolanVPN para empresas e equipas em Angola.'
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
      content: 'https://spaceall.net/'
    });

    /* ✅ TWITTER CARD */
    this.meta.addTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.meta.addTag({
      name: 'twitter:title',
      content: 'SPACEALL | Rede Privada Empresarial, ENaaS e AngolanVPN em Angola'
    });

    this.meta.addTag({
      name: 'twitter:description',
      content: 'Ligue filiais, datacenters e utilizadores através da SPACEALL Private Network, SPACEALL ENaaS e AngolanVPN.'
    });

    this.meta.addTag({
      name: 'twitter:image',
      content: 'https://spaceall.net/images/cover-spaceall.jpg'
    });

  }

}
