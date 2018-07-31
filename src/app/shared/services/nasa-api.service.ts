import { Injectable } from "@angular/core";
import { Apod } from "../model/apod";

@Injectable({
  providedIn: "root"
})
export class NasaApiService {
  DATA: Apod = {
    title: "La Tierra",
    date: "1993/05/21",
    explanation: "Foto de la tierra",
    url: "url",
    hdurl: "hdurl",
    media_type: "media_type",
    service_version: "service_version"
  };

  constructor() {}

  getApod(): Apod {
    return this.DATA;
  }
}
