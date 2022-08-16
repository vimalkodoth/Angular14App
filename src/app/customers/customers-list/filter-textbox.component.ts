import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-textbox',
  template: ` Filter: <input type="text" [(ngModel)]="filter" /> `,
})
export class FilterTextboxComponent implements OnInit {
  set filter(val: string) {
    this.changed.emit(val);
  }

  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
    return 0;
  }
}
