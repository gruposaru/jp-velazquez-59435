import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaestrosComponent } from './maestros.component';
import { MaestroDetailComponent } from '../../../dasgboard/features/maestros/maestro-detail/maestro-detail.component';

const routes: Routes = [
  {
    path:'',
    component:MaestrosComponent
  },
  {path:':id',
    component:MaestroDetailComponent,


  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaestrosRoutingModule { }
