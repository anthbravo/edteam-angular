import { Component, OnInit } from "@angular/core";
import { Apod } from "../shared/model/apod";
import { NasaApiService } from "../shared/services/nasa-api.service";

@Component({
  selector: "ed-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  error: string;

  apod: Apod;

  constructor(private nasaApiService: NasaApiService) {}

  ngOnInit() {
    this.nasaApiService.getApod().subscribe(
      apod => {
        this.apod = apod;
      },
      error => {
        this.error = "Se produjo un error en la consulta del API APOD";
      }
    );
  }
}
