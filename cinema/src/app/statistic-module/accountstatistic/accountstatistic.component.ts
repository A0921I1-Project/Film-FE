import { Component, OnInit } from '@angular/core';
import {StatisticAccount} from '../../model/statistic-account';
import {AccountStatisticService} from '../service/account-statistic.service';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-accountstatistic',
  templateUrl: './accountstatistic.component.html',
  styleUrls: ['./accountstatistic.component.css']
})
export class AccountstatisticComponent implements OnInit {

  statisticAccounts: StatisticAccount[] = [];
  changeStatistics = true;
  sum = 0;
  sum1 = 0;
  changePoint = true;

  constructor(private accountStatisticService: AccountStatisticService) { }

  public canvas: any;
  public ctx: any;
  public labels: any = [];
  public dataCases: any = {
    label: 'Points',
    chart1: [10, 20, 55, 30, 10],
  };
  totalPage: number[] = [];
  pageNumber = 0;

  ngOnInit(): void {
    this.accountStatisticService.getAccountStatisticPage(0).subscribe(
      (data: any) => {
        this.statisticAccounts = data.content;
        this.setPage(data.totalPages);
      }
    );
    this.createLineChart(this.labels, this.dataCases, 'myChart');
  }

  onStatistics() {
    this.sum = 0;
    // tslint:disable-next-line:prefer-for-of
    this.statisticAccounts.forEach( a => {
      this.sum += a.money;
    });
    this.changeStatistics = this.changeStatistics;

    // this.sum1 = 0;
    // this.statisticAccounts.forEach( s => {
    //   this.sum1 += s.point;
    // });
    // this.changePoint = this.changePoint;
  }

  private createLineChart(labels, dataCases, chartId) {
    this.canvas = document.getElementById(chartId);
    this.ctx = this.canvas.getContext('2d');

    let chart = new Chart(this.ctx, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          label: 'Chart 1',
          data: dataCases.chart1,
          backgroundColor: ['#ffbb33', '#e67e22', '#16a085', '#2980b9'],
          fill: false,
          borderWidth: 2
        }]
      },
      options: {
        cutoutPercentage: 50,
        title: {
          display: true,
          text: ''
        },
        tooltips: {
          mode: 'index',
          intersect: true
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },

      }
    });
  }

  // Phân trang
  setPage(totalPage: number) {
    this.totalPage = new Array(totalPage);
  }

  previousPage() {
    if (this.pageNumber <= 0) {
      alert('Không thể chuyển qua trang trước!');
    } else {
      this.pageNumber -= 1;
      this.showAccount(this.pageNumber);
    }
  }

  changePageNumber(i: number) {
    this.pageNumber = i;
    this.showAccount(this.pageNumber);
  }

  nextPage() {
    if (this.pageNumber === this.totalPage.length) {
      alert('Không thể chuyển qua trang sau!');
    } else {
      this.pageNumber += 1;
      this.showAccount(this.pageNumber);
    }
  }

  private showAccount(page: number) {
    page = this.pageNumber;
    this.accountStatisticService.getAccountStatisticPage(page).subscribe((data: any ) => {
      this.statisticAccounts = data.content;
    });
  }

}
