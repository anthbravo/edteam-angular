import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { timeout } from "../../../../node_modules/@types/q";

@Component({
  selector: "ed-material-input",
  templateUrl: "./material-input.component.html",
  styleUrls: ["./material-input.component.css"]
})
export class MaterialInputComponent implements OnInit {
  value: string = "property binding";

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.value = "activate property binding";
    }, 3000);
  }

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  onClick($event): void {
    console.log("onClick", event);
  }
}
