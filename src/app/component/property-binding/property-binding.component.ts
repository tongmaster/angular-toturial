import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  constructor() {}
  @Input() books
  ngOnInit() {}
}
