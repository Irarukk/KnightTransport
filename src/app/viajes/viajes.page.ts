import { Storage } from '@ionic/storage-angular';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

export interface Viaje {
  id: number,
  hora: string,
  capacidad: number,
  destino: string,
  precio: number
}


@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.page.html',
  styleUrls: ['./viajes.page.scss'], 
})

export class ViajesPage {

  viajes:Viaje[] = []

  constructor(private nav:NavController,
              private storage: Storage
              ) { }

  regresar() {
    this.nav.navigateForward(['/home'])
  }

  async ngOnInit(){
    this.viajes = await this.storage.get("viajes") || []
  }


}
