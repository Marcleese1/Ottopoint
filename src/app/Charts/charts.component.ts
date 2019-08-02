import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: "app-bar-chart",
  templateUrl: "./charts.component.html",
  styleUrls: ["./charts.component.css"]
})
export class BarChartComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLine: false,
    responsive: true,
    beginAtZero: true
  };

  //big bar chart
  public barChartLabels = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July"
  ];
  public barChartType = "bar";
  public barChartLegend = true;
  public barChartData = [
    { data: [150, 82, 100, 200, 250, 300, 350], label: "2017 Users" },
    { data: [350, 200, 300, 400, 500, 600, 700, 0], label: "2018 Users" }
  ];

  //pie chart
  public pieChartOptions = { responsive: true };
  public pieChartLabels = ["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"];
  public pieChartData = [400, 200, 500, 100];
  public pieChartType = "pie";

  //Smaller Pie
  public pieChartOptions2 = { responsive: true };
  public pieChartLabels2 = [
    "Apple",
    "Samsung",
    "Nokia",
    "Heuwie",
    "Sony",
    "Microsoft"
  ];
  public pieChartData2 = [20, 70, 3, 2, 1, 4];
  public pieChartType2 = "pie";

  //line chart
  public lineChartOptions = { responsive: true, beginAtZero: true };
  public lineChartLabels = ["Jan", "Feb", "March", "April"];
  public lineChartType = "line";
  public lineChartLegend = false;
  public lineChartFill = false;
  public lineChartData = [150, 82, 100, 200, 0];

  //small barchart
  public barChartOptions2 = {
    scaleShowVerticalLine: false,
    responsive: true,
    beginAtZero: true
  };
  public barChartLabels2 = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July"
  ];
  public barChartType2 = "bar";
  public barChartLegend2 = true;
  public barChartData2 = [
    { data: [70, 82, 50, 200, 148, 98, 110], label: "Female" },
    { data: [100, 50, 64, 175, 250, 125, 46, 0], label: "Male" }
  ];
  constructor() {}
  LineChart = [];
  ngOnInit() {}
}
