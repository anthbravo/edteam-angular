import { Component, OnInit } from "@angular/core";
import { Estudiante } from "../../shared/model/Estudiante";

@Component({
  selector: "ed-material-list",
  templateUrl: "./material-list.component.html",
  styleUrls: ["./material-list.component.css"]
})
export class MaterialListComponent implements OnInit {
  estudiantes: Array<Estudiante>;
  estudiante1: Estudiante;
  estudiante2: Estudiante;
  estudiante3: Estudiante;

  readonly DEFAULT_PICTURE =
    "https://i.pinimg.com/originals/50/25/aa/5025aa8edffb863a9c00ac0f0dd17bd2.png";

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
      ciudad: "Nazca",
      fotoURL:
        "https://texasbarblog.lexblogplatformtwo.com/files/2013/01/Zachary-Oliva1.jpg"
    };
    this.estudiante3 = {
      id: 3,
      nombre: "Luis Ibañez",
      ciudad: "Apurimac",
      fotoURL:
        "https://texasbarblog.lexblogplatformtwo.com/files/2009/03/jimmyverner1.jpg"
    };

    this.estudiantes = [this.estudiante1, this.estudiante2, this.estudiante3];

    setTimeout(() => {
      this.estudiantes[2] = {
        id: 3,
        nombre: "Lucas Mateo",
        ciudad: "Cuzco"
      };
    }, 3000);
  }
}
