import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  @Input() items = [];
  activeIndex: number | undefined;

  constructor() {}

  ngOnInit(): void {}

  setActiveIndex(i: number): void {
    console.log(this.activeIndex);
    console.log(i);
    this.activeIndex === i ? (this.activeIndex = -1) : (this.activeIndex = i);
  }
}
