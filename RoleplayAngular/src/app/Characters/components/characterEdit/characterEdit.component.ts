import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Player } from 'src/app/_models/player.model';
import { PlayerService } from 'src/app/_services/player.service';
import { CharacterClassService } from 'src/app/Characters/services/characterClass.service';
import { CharacterClass } from 'src/app/characters/models/characterClass.model';
import { Character } from 'src/app/characters/models/character.model';
import { CharacterService } from 'src/app/Characters/services/character.service';

@Component({
  selector: 'app-characterEdit',
  templateUrl: './characterEdit.component.html',
  styleUrls: ['./characterEdit.component.scss']
})
export class CharacterEditComponent implements OnInit {

  id : number;
  header : string;

  players : Player[] = [];
  classes : CharacterClass[] = [];

  character : Character = {
    characterID: 0,
    playerID: 0,
    userName: '',
    characterClassID: 0,
    characterName: '',
    characterGender: '',
    characterDescription: '',
    characterAge: 0,
    favouriteWeapon: '',
    homeTown: '',
  }

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private playerService : PlayerService,
    private characterService : CharacterService,
    private characterClassService : CharacterClassService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.header = this.id === 0? 'Add Character' : 'Edit Character';

    if(this.id != 0 ){
      this.characterService.onGetCharacter(this.id).subscribe(x => {this.character = x});
    }

    this.players = this.playerService.onGet();
    this.characterClassService.onGet().subscribe(x => {this.classes = x});
  }

  onSubmit(form : NgForm){
    console.log(form.value);
    let character : Character = {
      characterID : this.id,
      playerID : form.value.playerID,
      userName : form.value.userName, //get from userService?
      characterName : form.value.name,
      characterDescription : form.value.description,
      characterClassID : form.value.classID,
      characterGender : form.value.gender,
      characterAge : form.value.age,
      favouriteWeapon : form.value.favouriteWeapon,
      homeTown : form.value.homeTown
    }
    if(this.id === 0){
      //Add mode
      this.characterService.onAdd(character);

      //TOASTER
    }
    else{
      //Update mode
      this.characterService.onUpdate(character).subscribe();
    }
    this.router.navigateByUrl('/character');
  }
}
