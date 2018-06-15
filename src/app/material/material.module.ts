import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule
} from "@angular/material";

import { MaterialDemoComponent } from "./material-demo/material-demo.component";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [MatToolbarModule, MatButtonModule, MatIconModule],
  declarations: [MaterialDemoComponent]
})
export class MaterialModule {}
