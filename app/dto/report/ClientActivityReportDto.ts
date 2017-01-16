import {ClientDto} from "../ClientDto";
export class ClientActivityReportDto {

  clientDto: ClientDto;
  quizzesPerMonth: number[];

  constructor(clientDto: ClientDto, quizzesPerMonth: number[]) {
    this.clientDto = clientDto;
    this.quizzesPerMonth = quizzesPerMonth;
  }
}
