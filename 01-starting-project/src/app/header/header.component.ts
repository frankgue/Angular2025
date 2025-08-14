import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  imports: [],
  standalone: true,
  templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"],
})
  export class HeaderComponent {
    title = "My Angular App";
  }