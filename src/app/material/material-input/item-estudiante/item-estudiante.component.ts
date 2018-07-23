import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Estudiante } from "../../../shared/model/Estudiante";

@Component({
  selector: "ed-item-estudiante",
  templateUrl: "./item-estudiante.component.html",
  styleUrls: ["./item-estudiante.component.css"]
})
export class ItemEstudianteComponent implements OnInit {
  @Input() estudiante: Estudiante;

  @Output() onMouseClick = new EventEmitter<Estudiante>();
  readonly DEFAULT_PICTURE =
    "https://i.pinimg.com/originals/50/25/aa/5025aa8edffb863a9c00ac0f0dd17bd2.png";

  constructor() {}

  ngOnInit() {}

  onClick(estudiante: Estudiante) {
    this.onMouseClick.emit(estudiante);
  }
}
