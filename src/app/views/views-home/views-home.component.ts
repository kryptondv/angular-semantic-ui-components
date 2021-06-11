import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.scss'],
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 22, label: 'Users' },
    { value: 100, label: 'Revenue' },
    { value: 50, label: 'Reviews' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
