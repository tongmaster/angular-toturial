import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { EventBindingComponent } from './component/event-binding/event-binding.component';
import { PropertyBindingComponent } from './component/property-binding/property-binding.component'

@NgModule({
  declarations: [AppComponent, EventBindingComponent, PropertyBindingComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
