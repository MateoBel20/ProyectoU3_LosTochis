import { Component } from '@angular/core';
import { MaterialModule } from '../material';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [MaterialModule, FormularioComponent],
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.css'
})
export class ReservaComponent {

}
