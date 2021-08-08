import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.scss'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;

  items = [
    {
      title: 'Why us?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, culpa?',
    },
    {
      title: 'Why now?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, culpa?',
    },
    {
      title: 'Extend guarantee',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, culpa?',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleModal() {
    this.modalOpen = !this.modalOpen;
  }
}
