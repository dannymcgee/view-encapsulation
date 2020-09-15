import { Component, HostBinding, Input } from "@angular/core";

@Component({
	selector: "[app-button-enc-host]",
	templateUrl: "./button-enc-host.component.html",
	styleUrls: ["./button-enc-host.component.scss"]
})
export class ButtonEncHostComponent {

	@HostBinding("class")
	@Input() color: "blue"|"red" = "blue";

}
