import { Component } from '@angular/core';
import { MaterialModule } from '../material';
import { MapaInfoComponent } from '../mapa-info/mapa-info.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [MaterialModule, MapaInfoComponent, FooterComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

}
