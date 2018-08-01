import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Apod } from "../model/apod";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class NasaApiService {
  private readonly APOD_URL = "https://api.nasa.gov/planetary/apod";
  private readonly API_KEY = "en7uq321uLyNwJMqDWJuOKc1MLkqmn4rQF7gPEiY";

  DATA: Apod;

  constructor(private httpCliente: HttpClient) {}

  getApod(): Observable<Apod> {
    return this.httpCliente.get<Apod>(
      `${this.APOD_URL}?api_key=${this.API_KEY}`
    );
  }
}
