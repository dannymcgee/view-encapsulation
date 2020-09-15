import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonEncComponent } from './button-enc/button-enc.component';
import { ButtonUnencComponent } from './button-unenc/button-unenc.component';
import { ButtonEncHostComponent } from './button-enc-host/button-enc-host.component';
import { ButtonUnencHostComponent } from './button-unenc-host/button-unenc-host.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonEncComponent,
    ButtonUnencComponent,
    ButtonEncHostComponent,
    ButtonUnencHostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
