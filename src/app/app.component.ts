import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { MaterialModule } from './material';
import { MapaInfoComponent } from './mapa-info/mapa-info.component';
import { FormularioComponent } from './formulario/formulario.component';
import { CartaComponent } from './carta/carta.component';
import {HeaderComponent} from "./header/header.component";
import { Seccion1Component } from './seccion1/seccion1.component';
import { MenuVariedadComponent } from './menu-variedad/menu-variedad.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { FooterComponent } from './footer/footer.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule,MaterialModule,
      MapaInfoComponent, FooterComponent,FormularioComponent, CartaComponent, RouterLink, RouterModule, HeaderComponent, Seccion1Component, MenuVariedadComponent, TestimoniosComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'beltran_proyecto_U3';

}
