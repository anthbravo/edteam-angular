import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatExpansionModule
} from "@angular/material";

import { MaterialDemoComponent } from "./material-demo/material-demo.component";
import { MaterialButtonComponent } from './material-button/material-button.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule
  ],
  exports: [MatToolbarModule, MatButtonModule, MatIconModule],
  declarations: [MaterialDemoComponent, MaterialButtonComponent]
})
export class MaterialModule {}
