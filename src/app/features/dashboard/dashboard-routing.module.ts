import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosModule } from './usuarios/usuarios.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UserDetailsComponent } from './usuarios/user-details/user-details.component';
const routes: Routes = [
  {
    path:'home',
    loadChildren:()=> import('./home/home.module').then((m)=>m.HomeModule)

  },
  {
    path:'maestro',
    loadChildren:()=> import('./maestros/maestros.module').then((m)=>m.MaestrosModule)

  }
  ,{
    path:'users',
    loadChildren:()=> import('./usuarios/usuarios.module').then((m)=>m.UsuariosModule)
    /**  children:[

      {
        path:'',
        component:UsuariosComponent
      },
      {
        path:':id/detail',
        component:UserDetailsComponent
      }
     ]
      */
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
