import { CharacterClass } from "./CharacterClass.model";
import { Player } from "./player.model";

export class Character {
  public characterID? : number;
  public playerID : number;
  public userName : string;
  public characterClassID : number;
  public characterName : string;
  public characterGender : string;
  public characterDescription : string;
  public characterAge : number;
  public favouriteWeapon : string;
  public homeTown : string;

  public player? : Player;
  public characterClass? : CharacterClass;
}
