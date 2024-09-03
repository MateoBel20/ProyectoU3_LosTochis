import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-mapa-info',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './mapa-info.component.html',
  styleUrl: './mapa-info.component.css'
})
export class MapaInfoComponent {
  imagenUrl = '../../fondo_info.png';
  mapaUrl = '../../mapa.png';
}
