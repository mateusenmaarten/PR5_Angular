import { Component, OnInit } from '@angular/core';
import { Adventure } from 'src/app/_models/adventure.model';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css'],
})
export class AdventureComponent implements OnInit {
  adventures: Adventure[] = [];
  adventure: Adventure = {
    adventureID: 1,
    author: 'Maarten',
    genre: 'fantasy',
    mainVillain: 'Black spider',
    summary: 'very cool adventure',
    title: 'Treasure!',
    userName: 'MistaM',
  };

  constructor() {}

  ngOnInit() {
    this.adventures.push(this.adventure);
  }

  onDelete(id: number) {
    console.log('Delete adventure');
  }
}
