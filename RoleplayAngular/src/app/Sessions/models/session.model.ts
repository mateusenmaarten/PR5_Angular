import { Adventure } from "../../Adventures/models/adventure.model";
import { Player } from "../../_models/player.model";

export class Session{
  public sessionID : number;
  public userName : string;
  public adventureID : number;
  public date : string;
  public recap? : string;
  public isPlayed : boolean;
  public duration : number;
  public sessionGamemaster : string;

  public players? : Player[];
  public adventure? : Adventure;
}
