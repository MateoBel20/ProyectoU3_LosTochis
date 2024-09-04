import { Component } from '@angular/core';
import {NgOptimizedImage, NgStyle} from "@angular/common";
import { CartaComponent } from '../carta/carta.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgStyle,
    NgOptimizedImage,
    CartaComponent,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  logoPath: string = '../cutlery.png';
  backgroundImagePath: string = '../../fondo.png';
}
