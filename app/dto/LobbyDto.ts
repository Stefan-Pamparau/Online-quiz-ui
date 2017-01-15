export class LobbyDto {

  id: number;
  creationDate: Date;
  secondsUntilStart: number;

  constructor(id: number, creationDate: Date, secondsToStart: number) {
    this.id = id;
    this.creationDate = creationDate;
    this.secondsUntilStart = secondsToStart;
  }
}
