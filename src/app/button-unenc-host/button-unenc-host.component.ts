import { Component,  HostBinding,  Input,  ViewEncapsulation } from "@angular/core";

@Component({
	selector: "[app-button-unenc-host]",
	templateUrl: "./button-unenc-host.component.html",
	styleUrls: ["./button-unenc-host.component.scss"],
	encapsulation: ViewEncapsulation.None,
})
export class ButtonUnencHostComponent {

	/*
	Since this button is unencapsulated, the `:host` pseudo-selector won't have any effect.
	In order to apply styling to this component's host element, we need to add classes to it with
	the HostBinding decorator.
	*/
	@HostBinding("class")
	get hostClasses(): string[] {
		const base = "app-button-unenc-host";

		return [base, `${base}--${this.color}`];
	}

	@Input() color: "blue"|"red" = "blue";

}
