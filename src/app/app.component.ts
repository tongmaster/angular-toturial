import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books: Array<string> = new Array<string>()
  getBook(book) {
    console.log(book)
    this.books.push(book)
  }
}
