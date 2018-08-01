import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material/material.module";
import { HomeComponent } from "./home/home.component";
import { NasaApiService } from "./shared/services/nasa-api.service";
import { FirmPipe } from "./shared/pipes/firm.pipe";


@NgModule({
  declarations: [AppComponent, HomeComponent, FirmPipe],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, HttpClientModule],
  providers: [NasaApiService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
