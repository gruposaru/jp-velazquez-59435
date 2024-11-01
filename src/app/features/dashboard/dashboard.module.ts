import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { UsuariosModule } from './usuarios/usuarios.module';
import {MatListModule} from '@angular/material/list';
import { MaestrosModule } from './maestros/maestros.module';




@NgModule({
  declarations: [
    DashboardComponent,
   
      ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    UsuariosModule,
    MatListModule,
    MaestrosModule
  ],
  exports: [
    DashboardComponent,
  
  ]
})
export class DashboardModule { }
