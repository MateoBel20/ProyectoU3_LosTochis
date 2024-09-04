import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Seccion1Component } from '../seccion1/seccion1.component';
import { MenuVariedadComponent } from '../menu-variedad/menu-variedad.component';
import { TestimoniosComponent } from '../testimonios/testimonios.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [HeaderComponent, Seccion1Component, MenuVariedadComponent, TestimoniosComponent, FooterComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
