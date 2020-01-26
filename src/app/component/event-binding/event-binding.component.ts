import { Component, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @Output() bookOutput = new EventEmitter()
  books: Array<string> = new Array<string>()
  book: string = ''

  add() {
    this.books.push(this.book)
    this.bookOutput.emit(this.book)
    this.book = ''
  }
}
