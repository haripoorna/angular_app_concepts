import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DummyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
