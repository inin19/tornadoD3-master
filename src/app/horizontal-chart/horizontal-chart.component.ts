import { Component, OnInit, OnChanges, ViewChild, Input, ElementRef, ViewEncapsulation } from '@angular/core';
import { TornadoChartData } from '../model/tornado-chart-data';
import * as d3 from 'd3';

@Component({
  selector: 'app-horizontal-chart',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './horizontal-chart.component.html',
  styleUrls: ['./horizontal-chart.component.css']
})
export class HorizontalChartComponent implements OnInit, OnChanges {

  // need cache
  static ageGroup = ['0-18', '18-35', '35-60', '60+'];
  static gender = ['Female', 'Male'];
  static barType = ['proposal', 'benchmark'];


  private proposalChartData: TornadoChartData;
  private proposalgraphData: Array<any>;

  private benchmarkChartData: TornadoChartData;
  private benchmarkgraphData: Array<any>;

  private graphDataCombined: Array<any>;
  private maxPercentage: number;


  @Input() private proposalJsonData: Array<any>;
  @Input() private benchmarkJsonData: Array<any>;


  @ViewChild('tornadoChart') private chartContainer: ElementRef;
  private margin: any = { top: 30, right: 60, bottom: 30, left: 60 };
  private chart: any;
  private width: number;
  private height: number;

  private xScale: any;
  private yScale: any;
  private yInnerScale: any;
  private xAxis: any;
  private yAxis: any;



  constructor() { }

  ngOnInit() {
    this.getChartData();
    this.createChart();
    this.updateChart(this.proposalJsonData);

    console.log(this.yInnerScale('benchmarks'));
    console.log(this.yInnerScale('proposal'));

    // this.proposalgraphData.forEach(element => {
    //   console.log(element.key, element.percentage);
    // });

  }

  ngOnChanges() {
    if (this.chart) {
      this.getChartData();
      this.updateChart(this.proposalJsonData);
      this.updateChart(this.benchmarkJsonData);
    }
  }

  getChartData() {

    this.proposalChartData = new TornadoChartData(this.proposalJsonData);
    this.proposalgraphData = this.proposalChartData.getGraphData();

    this.benchmarkChartData = new TornadoChartData(this.benchmarkJsonData);
    this.benchmarkgraphData = this.benchmarkChartData.getGraphData();


    this.proposalgraphData.forEach(el => {
      el.source = 'proposal';
    });

    this.benchmarkgraphData.forEach(el => {
      el.source = 'benchmark';
    });

    this.graphDataCombined = this.benchmarkgraphData.concat(this.proposalgraphData);

    this.graphDataCombined.forEach(el => {
      console.log(el);
    });


  }

  createChart() {
    const htmlElement = this.chartContainer.nativeElement;
    this.width = htmlElement.offsetWidth - this.margin.left - this.margin.right;
    this.height = htmlElement.offsetHeight - this.margin.top - this.margin.bottom;


    const svg = d3.select('#tornadoChart').append('svg')
      .attr('width', htmlElement.offsetWidth)
      .attr('height', htmlElement.offsetHeight);

    this.chart = svg
      .append('g')
      .classed('bars', true)
      .attr('transform', `translate(${this.margin.left},${this.margin.top})`);


    // get maxinum value from proposal or benchmark
    this.maxPercentage = this.proposalChartData.getMaxPercentage() > this.benchmarkChartData.getMaxPercentage() ?
      this.proposalChartData.getMaxPercentage() : this.benchmarkChartData.getMaxPercentage();

    this.maxPercentage = this.maxPercentage + 0.1;


    // create scales
    this.xScale = d3.scaleLinear()
      .domain([-this.maxPercentage, this.maxPercentage])
      .range([0, this.width]);

    this.yScale = d3.scaleBand()
      .domain(TornadoChartData.UKAgeGroup)
      .range([this.height, 0])
      .padding(0.2);


    this.yInnerScale =  d3.scaleBand().domain(HorizontalChartComponent.barType)
      .range([0, this.yScale.bandwidth()])
      .paddingInner(0.2);



    // x axis  percentage formatting remove (-) sign
    const xaxis = d3.axisBottom(this.xScale)
      .tickFormat((d) => d3.format('.0%')(Math.abs(Number(d))));



    const yaxis = d3.axisLeft(this.yScale)
      .tickSize(0);
    // .tickSizeOuter(0);


    this.xAxis = this.chart.append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0, ${this.height})`)
      .call(xaxis);

    this.yAxis = this.chart.append('g')
      .attr('class', 'y axis')
      .call(yaxis);


    // move y axis path to the middle
    d3.select('.y.axis path')
      .attr('transform', 'translate(' + this.width / 2 + ',0)');

  }

  updateChart(jsonData: Array<any>) {
    // update data
    this.proposalChartData.processGraphData(jsonData);
    this.proposalgraphData = this.proposalChartData.getGraphData();

    // update scales
    this.xScale
      .domain([-this.maxPercentage, this.maxPercentage]);

    // probabaly not needed
    this.yScale
      .domain(TornadoChartData.UKAgeGroup);


    // update axis

    const xaxis = d3.axisBottom(this.xScale)
      .tickFormat((d) => d3.format('.0%')(Math.abs(Number(d))));

    this.xAxis.transition().call(xaxis);

    const yaxis = d3.axisLeft(this.yScale)
      .tickSize(0);

    this.yAxis.transition().call(yaxis);



    // start groups
    let groups = this.chart.selectAll('.group')
      .data(HorizontalChartComponent.ageGroup);

    groups.exit().remove();

    console.log(groups);

    groups
      .attr('transform', d => 'translate(0,' + this.yScale(d) + ')');


    // adding new groups
    groups
      .enter().append('g')
      .classed('group', true)
      .attr('transform', d => 'translate(0,' + this.yScale(d) + ')');


    // rejoin data VERY IMPORTANT
    groups = this.chart.selectAll('.group')
      .data(HorizontalChartComponent.ageGroup);

    // end groups


    const bars = groups.selectAll('.bar')
      .data((d) => this.graphDataCombined.filter(d1 => (d1.key.ageGroup === d)));

    bars.exit().remove();

    // console.log(bars);


    // update existing bars

    bars
      // .transition()
      .attr('x', (d) => this.xScale(Math.min(0, d.percentage)))
      .attr('y', (d) => this.yInnerScale(d.source))
      .attr('width', (d) => Math.abs(this.xScale(d.percentage) - this.xScale(0)))
      .attr('height', this.yInnerScale.bandwidth());



    // adding new bars

    bars
      .enter()
      .append('rect')
      .attr('class', function (d) { return 'bar bar--' + (d.percentage < 0 ? 'negative' : 'positive'); })
      // .transition()
      .attr('x', (d) => this.xScale(Math.min(0, d.percentage)))
      .attr('y', (d) => this.yInnerScale(d.source))

      .attr('width', (d) => Math.abs(this.xScale(d.percentage) - this.xScale(0)))
      .attr('height', this.yInnerScale.bandwidth());

  }
}
