import { Component, Input } from "@angular/core";

@Component({
	selector: "app-button-enc",
	templateUrl: "./button-enc.component.html",
	styleUrls: ["./button-enc.component.scss"]
})
export class ButtonEncComponent {

	@Input() color: "blue"|"red" = "blue";

}
