import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/_services/account.service';
import { Character } from '../../models/character.model';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  characters: Character[] = [];
  characterToDelete: Character = new Character();
  user : any;
  username : string;
  playerId : number;

  constructor(
    private characterService: CharacterService,
    private accountService: AccountService,
    private router : Router
  ) {
    this.ngOnInit();
  }

  ngOnInit() {
    this.characterService.onGet().subscribe((x) => {
      this.characters = x;
    });
    var user = JSON.parse(localStorage.getItem('user'));
    if(user != null){
      this.username = user.username;
      this.playerId = user.playerId;
    }
  }

  onDelete(id: number) {
    //check for user == character.userId -> else no authority to delete!
    let currentUser = this.accountService.userValue;
    this.characterService.onGetCharacterById(id).subscribe((x) => {
      this.characterToDelete = x;
    });
    this.characterService.onDelete(id).subscribe();
    window.location.reload();
  }
}
