import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {
    /** /dashboard/users */
    path:'',
    component:UsuariosComponent
  },
  {
    path:':id/detail',
    component:UserDetailsComponent,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
