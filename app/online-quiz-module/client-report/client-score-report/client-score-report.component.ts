import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {ReportService} from "../../../services/ReportService";
import {ClientScoreReportDto} from "../../../dto/report/ClientScoreReportDto";

@Component({
  moduleId: module.id,
  selector: 'client-score-report',
  templateUrl: `client-score-report.component.html`,
  styleUrls: ['client-score-report.component.css']
})
export class ClientScoreReportComponent implements OnInit {

  clientReport: ClientScoreReportDto;
  errorMessage: string;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    {data: [], label: 'Uninitialized'},
  ];

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor(private clientReportService: ReportService, private location: Location, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.clientReportService.getClientScoreReport()
      .then(response => {
        this.clientReport = response;
        this.barChartData = [
          {data: this.clientReport.scoresPerMonth, label: this.clientReport.clientDto.email},
        ];
      })
      .catch(error => this.errorMessage = 'Failed to generate client score report');
  }

}
