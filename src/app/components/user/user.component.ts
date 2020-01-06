import { Component, OnInit } from "@angular/core";
import { compileNgModuleFromRender2 } from "@angular/compiler/src/render3/r3_module_compiler";
import { User } from "../../models/User";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
  //template: '<h2>John Doe</h2>'  //You can put the content & styles right in here
  // styles: [`                    //But its better practice to do the things above
  //     h2{
  //         color: blue
  // }
  // `]
})
export class UserComponent implements OnInit {
  // Properties (should actually be done in the ngOnInit)
  user: User;

  // Methods
  constructor() {}

  ngOnInit() {
    this.user = {
      firstName: "John",
      lastName: "Doe",
      email: "john@gmai.com"
      // age: 31,
      // address: {
      //   street: "123 Sesame st",
      //   city: "Washington",
      //   state: "NJ"
      // }
    };
  }
}
