import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CUsuarioPageRoutingModule } from './c-usuario-routing.module';
import { CUsuarioPage } from './c-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CUsuarioPageRoutingModule
  ],
  declarations: [CUsuarioPage]
})
export class CUsuarioPageModule {}
