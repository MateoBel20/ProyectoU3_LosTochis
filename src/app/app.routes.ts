import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'node:path';
import { InicioComponent } from './inicio/inicio.component';
import { CartaComponent } from './carta/carta.component';
import { ReservaComponent } from './reserva/reserva.component';

export const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'carta', component: CartaComponent},
  {path: 'reserva', component: ReservaComponent}
];
