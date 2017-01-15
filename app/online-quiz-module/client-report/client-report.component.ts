import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {ClientReportDto} from "../../dto/report/ClientReportDto";
import {ClientReportService} from "../../services/ClientReportService";

@Component({
  moduleId: module.id,
  selector: 'client-report',
  templateUrl: `client-report.component.html`,
  styleUrls: ['client-report.component.css']
})
export class ClientReportComponent implements OnInit {

  clientReport: ClientReportDto;
  errorMessage: string;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData:any[] = [
    {data: [], label: 'Uninitialized'},
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor(private clientReportService: ClientReportService, private location: Location, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.clientReportService.getClientReport()
      .then(response => {
        this.clientReport = response;
        this.barChartData = [
          {data: this.clientReport.quizzesPerMonth, label: this.clientReport.clientDto.email},
        ];
        let test = 0;
      })
      .catch(error => this.errorMessage = 'Failed to generate client report');
  }

}
