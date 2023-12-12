import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-c-usuario',
  templateUrl: './c-usuario.page.html',
  styleUrls: ['./c-usuario.page.scss'],
})
export class CUsuarioPage {

  usuario = {
    nombre: '',
    correo: '',
    contrasena: '',
    // Agrega más campos según sea necesario
  };

  constructor(private nav: NavController, private alertController: AlertController) { }

  async crearUsuario() {
    // Verificar si los datos no están repetidos
    if (this.validarDatosUnicos()) {
      // Guardar en el localStorage
      localStorage.setItem('usuario', JSON.stringify(this.usuario));

      // Muestra la alerta después de guardar
      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'Usuario creado y almacenado correctamente.',
        buttons: ['OK']
      });

      await alert.present();

      // Lógica adicional según tus necesidades
      console.log('Usuario creado:', this.usuario);

      this.nav.navigateForward(['/home']);
    } else {
      // Muestra la alerta si los datos están repetidos
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Los datos ya existen. Por favor, ingrese información única.',
        buttons: ['OK']
      });

      await alert.present();
    }
  }

  validarDatosUnicos(): boolean {
    // Verificar aquí si los datos son únicos
    // Puedes comparar con los datos existentes en el localStorage o realizar una llamada al servidor
    // Por simplicidad, asumiré que todos los datos son únicos
    return true;
  }

  regresar() {
    this.nav.navigateForward(['/login']);
  }
}

