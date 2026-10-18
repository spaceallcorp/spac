import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { LigacoesPrivadas } from './paginas/ligacoes-privadas/ligacoes-privadas';
import { NosDeSaida } from './paginas/nos-de-saida/nos-de-saida';
import { AngolanVpn } from './paginas/angolanvpn/angolanvpn';
import { DesenheSuaLigacao } from './paginas/desenhe-sua-ligacao/desenhe-sua-ligacao';

import { VozVideo } from './paginas/voz-video/voz-video';
import { Cloud } from './paginas/cloud/cloud';
import { Termos } from './paginas/termos/termos';
import { Pprivacidade } from './paginas/pprivacidade/pprivacidade';
import { Contacto } from './paginas/contacto/contacto';
import { Empresa } from './paginas/empresa/empresa';

export const routes: Routes = [

    {path:'', component: Inicio},
    {path: 'empresa', component: Empresa},
    {path: 'a-empresa', redirectTo: 'empresa'},
    {path: 'sobre', redirectTo: 'empresa'},
    {path: 'desenhe-sua-ligacao', component: DesenheSuaLigacao},
    {path: 'desenhe-a-sua-ligacao', redirectTo: 'desenhe-sua-ligacao'},
    {path: 'configurador', redirectTo: 'desenhe-sua-ligacao'},
    {path: 'ligacoes-privadas', component: LigacoesPrivadas},
    {path: 'nos-de-saida', component: NosDeSaida},
    {path: 'angolanvpn', component: AngolanVpn},
    {path: 'multi-homing-bgp', redirectTo: 'nos-de-saida'},
    {path: 'rede-privada', redirectTo: 'ligacoes-privadas'},
    {path: 'nos-de-saida-bgp', redirectTo: 'nos-de-saida'},
    {path: 'lorawan', redirectTo: 'multi-homing-bgp'},
    {path: 'wifi_halow', redirectTo: 'angolanvpn'},
    {path: 'voz_video', component: VozVideo},
    {path:'cloud', component: Cloud},
    {path: 'termos', component: Termos },
    {path: 'politicas', component: Pprivacidade },
    {path: 'contacto', component: Contacto}
  
    
    

];
