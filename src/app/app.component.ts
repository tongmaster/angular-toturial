import { EventBindingComponent } from './component/event-binding/event-binding.component';
import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.title = this.eventBind.showMessage()
    // this.title = this.eventBind.book
  }
  title = 'angular-tutorial';
  @ViewChild(EventBindingComponent,{static:false}) 
  eventBind : EventBindingComponent


}
