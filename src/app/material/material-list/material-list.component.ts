import { Component, OnInit } from "@angular/core";
import { Estudiante } from "../../shared/model/Estudiante";

@Component({
  selector: "ed-material-list",
  templateUrl: "./material-list.component.html",
  styleUrls: ["./material-list.component.css"]
})
export class MaterialListComponent implements OnInit {
  estudiante1: Estudiante;
  estudiante2: Estudiante;
  estudiante3: Estudiante;
  constructor() {}

  ngOnInit() {
    console.log("Inicializando el Componente MaterialList");
    this.estudiante1 = {
      id: 1,
      nombre: "Juan Ramirez",
      ciudad: "Lima"
    };
    this.estudiante2 = {
      id: 2,
      nombre: "Jose Bustamante",
      ciudad: "Nazca"
    };
    this.estudiante3 = {
      id: 3,
      nombre: "Luis Ibañez",
      ciudad: "Apurimac"
    };
  }
}
