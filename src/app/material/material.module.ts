import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ReactiveFormsModule } from "@angular/forms";

import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatExpansionModule,
  MatInputModule,
  MatListModule,
  MatCardModule
} from "@angular/material";

import { MaterialDemoComponent } from "./material-demo/material-demo.component";
import { MaterialButtonComponent } from "./material-button/material-button.component";
import { MaterialInputComponent } from "./material-input/material-input.component";
import { MaterialListComponent } from "./material-list/material-list.component";
import { ItemEstudianteComponent } from "./material-input/item-estudiante/item-estudiante.component";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatCardModule
  ],
  exports: [MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule],
  declarations: [
    MaterialDemoComponent,
    MaterialButtonComponent,
    MaterialInputComponent,
    MaterialListComponent,
    ItemEstudianteComponent
  ]
})
export class MaterialModule {}
