import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CUsuarioPage } from './c-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: CUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CUsuarioPageRoutingModule {}
