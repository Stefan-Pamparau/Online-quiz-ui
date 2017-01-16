import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {ClientReportService} from "../../../services/ClientReportService";
import {ClientActivityReportDto} from "../../../dto/report/ClientActivityReportDto";

@Component({
  moduleId: module.id,
  selector: 'client-activity-report',
  templateUrl: `client-activity-report.component.html`,
  styleUrls: ['client-activity-report.component.css']
})
export class ClientActivityReportComponent implements OnInit {

  clientReport: ClientActivityReportDto;
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

  constructor(private clientReportService: ClientReportService, private location: Location, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.clientReportService.getClientActivityReport()
      .then(response => {
        this.clientReport = response;
        this.barChartData = [
          {data: this.clientReport.quizzesPerMonth, label: this.clientReport.clientDto.email},
        ];
      })
      .catch(error => this.errorMessage = 'Failed to generate client activity report');
  }

}
