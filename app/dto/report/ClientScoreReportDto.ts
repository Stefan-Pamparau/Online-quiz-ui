import {ClientDto} from "../ClientDto";

export class ClientScoreReportDto {

  clientDto: ClientDto;
  scoresPerMonth: number[];

  constructor(clientDto: ClientDto, scoresPerMonth: number[]) {
    this.clientDto = clientDto;
    this.scoresPerMonth = scoresPerMonth;
  }
}
