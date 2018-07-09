import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "ed-material-input",
  templateUrl: "./material-input.component.html",
  styleUrls: ["./material-input.component.css"]
})
export class MaterialInputComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);
}
