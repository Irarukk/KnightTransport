import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Platform ,} from '@ionic/angular';
  declare var google: any;
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';


export interface Viaje {
  id: number,
  hora: string,
  capacidad: number,
  destino: string,
  precio: number
}

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage {

  @ViewChild('map') mapElement: ElementRef | undefined;
  public map: any;
  public start: any = "Duoc UC: Sede Melipilla - Serrano, Melipilla, Chile";
  public latitude: any;
  public longitude: any;
  public directionsService: any;
  public directionsDisplay: any;
  public autocompleteItems: any;
  
  toadd:Viaje = {
    id: 0,
    hora: "",
    precio: 0,
    capacidad: 0,
    destino: "pomaire"
  }

  async crearViaje() {
    let viajes = await this.storage.get("viajes") || [];
    this.toadd.id = viajes.length + 1;
    viajes.push(this.toadd);
    this.storage.set("viajes", viajes);
    console.log(viajes);
  
    // Muestra la alerta después de guardar
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Viaje guardado correctamente.',
      buttons: ['OK']
    });
  
    await alert.present();
  }
  
  
  constructor(
    private nav:NavController,
    private platform:Platform,
    private zone:NgZone,
    private storage: Storage,
    private alertController: AlertController
    ) { }

  regresar() {
    this.nav.navigateForward(['/home'])
  }

  ionViewDidEnter() {
    this.platform.ready().then(() => {
      this.initMap()
    })
  }

  initMap() {
    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer;
    let latLng = new google.maps.LatLng(this.latitude, this.longitude);
    let mapOptions = {
      center: latLng,
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement!.nativeElement, mapOptions);
    this.directionsDisplay.setMap(this.map);
    this.calculateAndDisplayRoute();
  }

  calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.start,
      destination: this.toadd.destino,
      travelMode: 'DRIVING'
    }, (response: any, status: string) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }


  updateSearchResults() {
    let GoogleAutocomplete = new google.maps.places.AutocompleteService();
    if (this.toadd.destino == '') {
      this.autocompleteItems = [];
      return;
    }
    GoogleAutocomplete!.getPlacePredictions({ input: this.toadd.destino },
      (predictions: any, status: any) => {
        this.autocompleteItems = [];
        this.zone.run(() => {
          predictions.forEach((prediction: any) => {
            this.autocompleteItems!.push(prediction);
          });
        });
      });
  }
  selectSearchResult(item: any) {
    this.toadd.destino = item.description
    this.autocompleteItems = []
    this.initMap()
  }

  
    
 
}
