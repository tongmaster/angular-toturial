import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-event-binding",
  templateUrl: "./event-binding.component.html",
  styleUrls: ["./event-binding.component.css"]
})
export class EventBindingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  books: Array<string> = new Array<string>();
  book: string = "test";
  add() {
    this.books.push(this.book);
    this.book = "";
  }
  showMessage(){
    return this.book
  }
}
