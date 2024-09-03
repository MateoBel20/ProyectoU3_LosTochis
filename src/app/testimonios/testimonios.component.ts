import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-testimonios',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './testimonios.component.html',
  styleUrl: './testimonios.component.css'
})
export class TestimoniosComponent {

  testimonios = [
    {
      nombre: 'VALERIA GUZMÁN',
      comentario: 'Los testimonios son breves comentarios de las personas a quienes les encanta tu marca. Son una buena forma de persuadir a los clientes para que prueben tus servicios.',
      imagen: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      nombre: 'ANTONIO VELA',
      comentario: 'Los testimonios son breves comentarios de las personas a quienes les encanta tu marca. Son una buena forma de persuadir a los clientes para que prueben tus servicios.',
      imagen: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      nombre: 'JERÓNIMO CHÁVEZ',
      comentario: 'Los testimonios son breves comentarios de las personas a quienes les encanta tu marca. Son una buena forma de persuadir a los clientes para que prueben tus servicios.',
      imagen: 'https://randomuser.me/api/portraits/men/65.jpg'
    }
  ];
}
