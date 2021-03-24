import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/_models/character.model';
import { Player } from 'src/app/_models/player.model';
import { CharacterService } from 'src/app/_services/character.service';
import { CharacterClassService } from 'src/app/_services/characterClass.service';
import { PlayerService } from 'src/app/_services/player.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  characters : Character[] = [];

  constructor(private characterService : CharacterService, private characterClassService : CharacterClassService ) { }

  ngOnInit() {
    this.characters = this.characterService.onGet();
  }

  onDelete(id : number){
    //check for user == character.userId -> else no authority to delete!
    
    //Confirm with Alert -> delete : yes /no

    this.characterService.onDelete(id);
  }

}
