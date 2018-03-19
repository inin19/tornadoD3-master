import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, OnChanges } from '@angular/core';
import * as d3 from 'd3';
import * as crossfilter from 'crossfilter2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {

  proposalJson: Array<any>;
  benchmarkJson: Array<any>;

  proposalJson1: Array<any>;
  proposalJson2: Array<any>;

  benchmarkJson1: Array<any>;
  benchmarkJson2: Array<any>;






  ngOnInit() {

    this.benchmarkJson1 = [
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 65
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 77
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 27
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 36
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 53
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 76
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 28
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 50
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 51
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 46
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 53
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 69
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 22
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 50
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 69
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 47
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 48
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 60
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 43
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 38
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 56
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 44
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 27
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 58
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 51
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 30
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 37
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 69
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 42
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 27
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 58
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 70
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 38
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 79
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 23
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 23
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 33
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 42
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 72
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 75
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 33
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 23
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 27
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 51
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 38
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 78
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 24
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 25
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 55
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 31
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 68
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 54
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 27
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 74
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 50
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 58
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 41
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 71
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 31
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 43
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 28
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 44
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 51
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 48
      }
    ];

    this.benchmarkJson2 = [
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 49
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 63
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 70
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 45
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 63
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 61
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 55
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 61
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 65
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 42
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 50
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 62
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 57
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 69
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 53
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 58
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 69
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 58
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 49
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 60
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 58
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 49
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 63
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 61
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 54
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 51
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 69
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 53
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 67
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 43
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 47
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 62
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 45
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 66
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 52
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 60
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 41
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 56
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 67
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 66
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 58
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 64
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 49
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 65
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 50
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 51
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 44
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 63
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 52
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 52
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 64
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 68
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 65
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 59
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 52
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 50
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 68
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 67
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 69
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 46
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 63
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 56
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 64
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 45
      }
    ];


    this.proposalJson1 = [
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 2
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 24
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 34
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 10
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 8
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 30
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 8
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 3
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 3
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 34
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 44
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 12
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 20
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 15
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 4
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 9
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 2
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 24
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 34
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 10
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 8
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 30
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 8
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 3
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 3
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 34
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 44
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 12
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 20
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 15
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 4
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 9
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 2
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 24
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 34
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 10
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 8
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 30
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 8
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 3
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 3
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 34
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 44
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 12
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 20
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 15
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 4
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 9
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 2
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 24
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 34
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 10
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 8
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 30
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 8
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 3
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 3
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 34
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 44
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 12
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 20
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 15
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 4
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 9
      }
    ];


    this.proposalJson2 = [
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 2
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 24
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 34
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 10
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 8
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 30
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 8
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 3
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 3
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 34
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 44
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 12
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 20
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 15
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 4
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 9
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 2
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 24
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 34
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 10
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 8
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 30
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 8
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 3
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 3
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 34
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 44
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 12
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 20
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 15
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 4
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 9
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 2
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 24
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 34
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 10
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 8
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 30
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 8
      },
      {
        'region': 'North',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 3
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 3
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 34
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 44
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 12
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 20
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 15
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 4
      },
      {
        'region': 'South',
        'relation': 'EMPLOYEE',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 9
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 2
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 24
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 34
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 10
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 8
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 30
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 8
      },
      {
        'region': 'North',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 3
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'M',
        'memberCount': 3
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'M',
        'memberCount': 34
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'M',
        'memberCount': 44
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'M',
        'memberCount': 12
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '0-18',
        'gender': 'F',
        'memberCount': 20
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '18-35',
        'gender': 'F',
        'memberCount': 15
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '35-60',
        'gender': 'F',
        'memberCount': 4
      },
      {
        'region': 'South',
        'relation': 'DEPENDENT',
        'ageGroup': '60+',
        'gender': 'F',
        'memberCount': 9
      }
    ];

    this.proposalJson = this.proposalJson1;
    this.benchmarkJson = this.benchmarkJson1;



  }
  ngOnChanges() {

  }

  changeData(num: number) {

    if (num === 2) {
      this.proposalJson = this.proposalJson2;
      this.benchmarkJson = this.benchmarkJson2;
    } else {
      this.proposalJson = this.proposalJson1;
      this.benchmarkJson = this.benchmarkJson1;
    }
  }




}
