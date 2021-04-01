import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character.model';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  characters : Character[] = [];

  constructor(private characterService : CharacterService) { }

  ngOnInit() {
    this.characterService.onGet().subscribe(x => {this.characters = x});
  }

  onDelete(id : number){
    //check for user == character.userId -> else no authority to delete!

    //Confirm with Alert -> delete : yes /no

    this.characterService.onDelete(id);
  }

}
