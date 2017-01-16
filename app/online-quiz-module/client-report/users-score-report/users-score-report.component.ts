import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {ReportService} from "../../../services/ReportService";
import {UsersScoreReportDto} from "../../../dto/report/UsersScoreReportDto";

@Component({
  moduleId: module.id,
  selector: 'users-score-report',
  templateUrl: `users-score-report.component.html`,
  styleUrls: ['users-score-report.component.css']
})
export class UsersScoreReportComponent implements OnInit {

  userScoresReport: UsersScoreReportDto;
  errorMessage: string;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['Undefined'];
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
    this.clientReportService.getUserScoresReport()
      .then(response => {
        this.userScoresReport = response;
        let userEmails: string[] = [];
        for (let userDto of this.userScoresReport.userDtos) {
          userEmails.push(userDto.email);
        }
        this.barChartLabels = userEmails;
        this.barChartData = [
          {data: this.userScoresReport.scoresPerUser, label: 'Scores'},
        ];
      })
      .catch(error => this.errorMessage = 'Failed to generate users score report');
  }

}
