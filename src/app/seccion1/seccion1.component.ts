import { Component } from '@angular/core';
import { MaterialModule } from '../material';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-seccion1',
  standalone: true,
  imports: [MaterialModule, RouterLink],
  templateUrl: './seccion1.component.html',
  styleUrl: './seccion1.component.css'
})
export class Seccion1Component {
  imagePath: string = '../../Comidas.png';

}
