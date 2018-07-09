import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ReactiveFormsModule } from "@angular/forms";

import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatExpansionModule,
  MatInputModule
} from "@angular/material";

import { MaterialDemoComponent } from "./material-demo/material-demo.component";
import { MaterialButtonComponent } from "./material-button/material-button.component";
import { MaterialInputComponent } from "./material-input/material-input.component";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule
  ],
  exports: [MatToolbarModule, MatButtonModule, MatIconModule],
  declarations: [
    MaterialDemoComponent,
    MaterialButtonComponent,
    MaterialInputComponent
  ]
})
export class MaterialModule {}
