import { Component, OnInit } from "@angular/core";
import { Apod } from "../shared/model/apod";

@Component({
  selector: "ed-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  apod: Apod;

  constructor() {}

  ngOnInit() {
    this.apod = {
      title: "string",
      date: "string",
      explanation: "string",
      url: "string",
      hdurl: "string",
      media_type: "string",
      service_version: "string"
    };
  }
}
