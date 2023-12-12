import { Component} from '@angular/core';
import { AnimationController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{

  usuario = ""
  contrasena = ""

  constructor(private nav: NavController,
              private anim: AnimationController,
              private storage: Storage
              ) { }

  async ngOnInit() {
    await this.storage.create();
  }

  registrarse(){
    this.nav.navigateForward(['/c-usuario']);   
  }


  ingresar(){
    
    if (this.usuario.length > 5) {
      if (this.contrasena.length > 4 && this.contrasena.match(/\d/)){
        this.nav.navigateForward(['/home']);


      }else{
        this.animaInput("#contraseña");
        
      }
    }else{
      this.animaInput("#usuario");
    }
  }

  animaInput(input:string){
    let usuario = document.querySelector(input) as HTMLInputElement
      usuario.focus()
      this.anim.create().addElement(usuario)
      .duration(100).iterations(3)
      .keyframes([
        {offset: 0, transform: 'rotate(-3deg)'},
        {offset: 0.5, transform: 'rotate(3deg)'},
        {offset: 1, transform: 'rotate(0)'}
      ]).play()
  }
}