import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private nav:NavController) {}

  perfil() {
    this.nav.navigateForward(['/perfil'])
  }

  viajes() {
    this.nav.navigateForward(['/viajes'])
  }

  mapa() {
    this.nav.navigateForward(['/mapa'])
  }

  cerrar() {
    this.nav.navigateBack(['/login'])
  }
}
