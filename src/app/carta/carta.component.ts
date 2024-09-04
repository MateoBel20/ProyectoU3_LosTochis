import { Component } from '@angular/core';
import {NgOptimizedImage, NgStyle} from "@angular/common";
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-carta',
  standalone: true,
  imports: [ NgStyle, NgOptimizedImage, RouterLink, FooterComponent],
  templateUrl: './carta.component.html',
  styleUrl: './carta.component.css'
})
export class CartaComponent {
  logoPath: string = '../cutlery.png';
  backgroundImagePath: string = '../../fondo.png';
}
