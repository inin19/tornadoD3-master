import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  @ViewChild('lineChart') private chartContainer: ElementRef;
  private margin: any = { top: 30, right: 60, bottom: 30, left: 60 };
  private width: number;
  private height: number;

  private xScale: any;
  private yScale: any;

  private xAxis: any;
  private yAxis: any;

  private line: any;



  dataset = [
    { x: 0, y: 5 },
    { x: 1, y: 8 },
    { x: 2, y: 13 },
    { x: 3, y: 12 },
    { x: 4, y: 16 },
    { x: 5, y: 21 },
    { x: 6, y: 18 },
    { x: 7, y: 23 },
    { x: 8, y: 24 },
    { x: 9, y: 28 },
    { x: 10, y: 35 },
    { x: 11, y: 30 },
    { x: 12, y: 32 },
    { x: 13, y: 36 },
    { x: 14, y: 40 },
    { x: 15, y: 38 },
  ];

  constructor() { }

  ngOnInit() {
    this.createChart();
  }


  createChart() {

    const htmlElement = this.chartContainer.nativeElement;
    this.width = htmlElement.offsetWidth - this.margin.left - this.margin.right;
    this.height = htmlElement.offsetHeight - this.margin.top - this.margin.bottom;

    this.xScale = d3.scaleLinear()
      .domain([0, d3.max(this.dataset, function (d) { return d.x; })])
      .range([0, this.width]);


    this.yScale = d3.scaleLinear()
      .domain([0, d3.max(this.dataset, function (d) { return d.y; })])
      .range([this.height, 0]);


    // const xaxis = d3.axisBottom(this.xScale)
    //   .tickFormat((d) => d3.format('.0%')(Math.abs(Number(d))));

    // const yaxis = d3.axisLeft(this.yScale)
    //   .tickSize(0);


    this.xAxis = d3.axisBottom(this.xScale)
      .tickPadding(10);



    this.yAxis = d3.axisLeft(this.yScale)
      .tickPadding(10);


    // this.line = d3.svg.line()
    //   .x(function (d) { return this.xScale(d.x); })
    //   .y(function (d) { return this.yScale(d.y); });


  }

}
