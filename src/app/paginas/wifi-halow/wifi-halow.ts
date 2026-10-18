import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

import { Menu } from '../../layout/menu/menu';
import { Rodape } from '../../layout/rodape/rodape';
import { Form } from '../../layout/form/form';

@Component({
  selector: 'app-wifi-halow',
  imports: [
    Menu,
    Rodape,
    Form,
    RouterLink
  ],
  templateUrl: './wifi-halow.html',
  styleUrl: './wifi-halow.css'
})
export class WifiHalow {

  constructor(
    private meta: Meta,
    private title: Title
  ) {
    /* ✅ TITLE (Google) */
    this.title.setTitle('SPACEALL | AngolanVPN para acesso remoto empresarial');

    /* ✅ META DESCRIPTION */
    this.meta.addTag({
      name: 'description',
      content: 'Aceda remotamente a recursos empresariais autorizados através do AngolanVPN e da rede SPACEALL.'
    });

    /* ✅ KEYWORDS */
    this.meta.addTag({
      name: 'keywords',
      content: 'AngolanVPN, Business VPN, acesso remoto empresarial, Zero-Trust, Angola, SPACEALL'
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

    /* ✅ OPEN GRAPH — Facebook, WhatsApp, LinkedIn */
    this.meta.addTag({
      property: 'og:title',
      content: 'SPACEALL | AngolanVPN para acesso remoto empresarial'
    });

    this.meta.addTag({
      property: 'og:description',
      content: 'Acesso remoto empresarial através da rede SPACEALL com políticas de acesso alinhadas à organização.'
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
      content: 'https://spaceall.net/angolanvpn'
    });

    /* ✅ TWITTER CARD */
    this.meta.addTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.meta.addTag({
      name: 'twitter:title',
      content: 'SPACEALL | AngolanVPN para acesso remoto empresarial'
    });

    this.meta.addTag({
      name: 'twitter:description',
      content: 'AngolanVPN para acesso remoto seguro a recursos empresariais autorizados.'
    });

    this.meta.addTag({
      name: 'twitter:image',
      content: 'https://spaceall.net/images/cover-spaceall.jpg'
    });
  }

}
