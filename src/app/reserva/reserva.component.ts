import { Component } from '@angular/core';
import { MaterialModule } from '../material';
import { FormularioComponent } from '../formulario/formulario.component';
import { HeaderComponent } from '../header/header.component';
import {NgOptimizedImage, NgStyle} from "@angular/common";
import { CartaComponent } from '../carta/carta.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [MaterialModule, FormularioComponent, HeaderComponent, NgStyle,
     NgOptimizedImage, CartaComponent, RouterLink, FooterComponent],
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.css'
})
export class ReservaComponent {
  logoPath: string = '../cutlery.png';
  backgroundImagePath: string = '../../fondo.png';
}
