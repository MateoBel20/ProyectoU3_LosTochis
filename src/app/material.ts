// Mario Pazmiño

// Jeyner Manzaba

import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';

// Mateo Beltran
import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
    imports :
    [
      //Jeyner Manzaba
        MatGridListModule,
        MatPaginatorModule,
      //Mateo
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        MatCardModule,
        MatCheckboxModule

    ],
    exports :
    [
      //Jeyner Manzaba
        MatGridListModule,
        MatPaginatorModule,
      //Mateo Beltran
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        MatCardModule,
        MatCheckboxModule
    ]
})
export class MaterialModule{
}
