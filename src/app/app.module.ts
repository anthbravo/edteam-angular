import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material/material.module";
import { HomeComponent } from "./home/home.component";
import { NasaApiService } from "./shared/services/nasa-api.service";
import { FirmPipe } from './shared/pipes/firm.pipe';

@NgModule({
  declarations: [AppComponent, HomeComponent, FirmPipe],
  imports: [BrowserModule, AppRoutingModule, MaterialModule],
  providers: [NasaApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
