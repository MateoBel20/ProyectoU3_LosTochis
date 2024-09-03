import { Component } from '@angular/core';
import {NgOptimizedImage, NgStyle} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgStyle,
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  logoPath: string = '../../cutlery.png';
  backgroundImagePath: string = '../../fondo.png';
}
  