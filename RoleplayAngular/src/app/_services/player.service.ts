import { Injectable } from '@angular/core';
import { Player } from '../_models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

players : Player[] = [
  {
    playerID : 1,
    firstName : "Maarten",
    lastName : "Mateusen",
    userName : "MistaM",
    email : "maarten@test.be"
  },
  {
    playerID : 2,
    firstName : "Bert",
    lastName : "Bibber",
    userName : "Berie",
    email : "bert@test.be"
  },
  {
    playerID : 3,
    firstName : "Jan",
    lastName : "Vosters",
    userName : "Janneman",
    email : "jan@test.be"
  },
];

constructor() { }

onGet(){
  return this.players;
}

}
