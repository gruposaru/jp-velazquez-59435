import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNativeDateAdapter } from '@angular/material/core';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { MaestroDetailComponent } from './dasgboard/features/maestros/maestro-detail/maestro-detail.component';


@NgModule({
  declarations: [AppComponent, MaestroDetailComponent],
  imports: [BrowserModule, AppRoutingModule,DashboardModule],
  providers: [provideAnimationsAsync(), provideNativeDateAdapter()],
  bootstrap: [AppComponent],
})
export class AppModule {}
