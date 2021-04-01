import { Component, OnInit } from '@angular/core';
import { Adventure } from 'src/app/Adventures/models/adventure.model';
import { Player } from 'src/app/_models/player.model';
import { Session } from 'src/app/Sessions/models/session.model';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss'],
})
export class SessionComponent implements OnInit {
  adventure: Adventure = {
    adventureID: 1,
    author: 'Maarten',
    genre: 'fantasy',
    mainVillain: 'Black spider',
    summary: 'very cool adventure',
    title: 'Treasure!',
    userName: 'MistaM',
  };
  players : Player[] = [{
    playerID : 1,
    firstName : 'Maarten',
    lastName : 'Mathews',
    userName : 'teusen',
    email : 't@test.be'
  },
  {
    playerID : 2,
    firstName : 'Bert',
    lastName : 'Roelants',
    userName : 'Bertie',
    email : 'b@test.be'
  }];

  sessions: Session[] = [];
  session: Session = {
    sessionID: 1,
    userName: 'Maarten',
    adventureID: 1,
    date: Date.now().toString(),
    recap: 'Great stuff',
    isPlayed: true,
    duration: 3,
    sessionGamemaster: 'Bert',
    adventure: this.adventure,
    players: this.players
  };

  constructor() {}

  ngOnInit() {
    this.sessions.push(this.session);
  }

  onDelete(id : number){
    console.log("Delete session");
  }
}
