import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private readonly injector: Injector) {
  }

  public ngDoBootstrap() {
    const myElement = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('app-micro-frontend-orders-root', myElement);
  }
}
