import {ClientDto} from "../ClientDto";
export class ClientReportDto {

  clientDto: ClientDto;
  quizzesPerMonth: number[];

  constructor(clientDto: ClientDto, quizzesPerMonth: number[]) {
    this.clientDto = clientDto;
    this.quizzesPerMonth = quizzesPerMonth;
  }
}
