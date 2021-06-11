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

  items = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
      description: 'Nice couch. Buy now',
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'Nice dresser. Buy now',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
