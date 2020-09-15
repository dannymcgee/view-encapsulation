import { Component, Input, ViewEncapsulation } from "@angular/core";

@Component({
	selector: "app-button-unenc",
	templateUrl: "./button-unenc.component.html",
	styleUrls: ["./button-unenc.component.scss"],
	encapsulation: ViewEncapsulation.None,
})
export class ButtonUnencComponent {

	@Input() color: "blue"|"red" = "blue";

}
