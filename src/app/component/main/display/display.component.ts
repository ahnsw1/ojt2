import { Component, Input, OnInit } from '@angular/core';
import { WebsocketService } from '../../../service/websocket.service';
import * as d3 from 'd3';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  ecgData: IData[] = [];
  resData: IData[] = [];
  hrData: IData[] = [];

  constructor(private wsService: WebsocketService) { }

  @Input() index: number = 0;
  @Input() deviceInfos: any = {};

  ngOnInit(): void {
    let ecgIndex = 0;
    let otherIndex = 0;

    for (let i = 0; i < 500; i++) {
      this.ecgData[i] = { val: undefined, ts: i * 8 };
      this.resData[i] = { val: undefined, ts: i * 40 };
      this.hrData[i] = { val: undefined, ts: i };
    }

    this.wsService.subject.subscribe(observer => {
      //기기별로 ecg, res, hr 데이터 만들어서 새로운 데이터에 넣기
      if (observer.dv === this.deviceInfos.deviceAddress) {
        // 데이터 길이를 500으로 맞추기
        //for ecg
        for (let i = 0; i < 5; i++) {
          this.ecgData[5 * ecgIndex + i] = {
            ts: 40 * ecgIndex + 8 * i,
            val: observer.dp.ecg[i]
          };
        }

        switch (ecgIndex) {
          case 99:
            ecgIndex = -1;
            break;
          case 98:
            for (let i = 0; i < 5; i++) {
              this.ecgData[5 * ecgIndex + 5 + i] = { ts: 40 * ecgIndex + (40 + 8 * i), val: undefined };
            }
            break;
          case 97:
            for (let i = 0; i < 10; i++) {
              this.ecgData[5 * ecgIndex + 5 + i] = { ts: 40 * ecgIndex + (40 + 8 * i), val: undefined };
            }
            break;
          default:
            for (let i = 0; i < 15; i++) {
              this.ecgData[5 * ecgIndex + 5 + i] = { ts: 40 * ecgIndex + (40 + 8 * i), val: undefined };
            }
            break;
        }
        ecgIndex++;

        //for respiration
        this.resData[otherIndex] = { val: observer.dp.F1, ts: otherIndex * 40 };
        switch (otherIndex) {
          case 499: otherIndex = -1; break;
          case 498:
            this.resData[otherIndex + 1] = { val: undefined, ts: otherIndex * 40 };
            break;
          case 497:
            for (let i = 1; i < 3; i++) {
              this.resData[otherIndex + i] = { val: undefined, ts: (otherIndex + i) * 40 };
            }
            break;
          case 496:
            for (let i = 1; i < 4; i++) {
              this.resData[otherIndex + i] = { val: undefined, ts: (otherIndex + i) * 40 };
            }
            break;
          case 495:
            for (let i = 1; i < 5; i++) {
              this.resData[otherIndex + i] = { val: undefined, ts: (otherIndex + i) * 40 };
            }
            break;
          case 494:
            for (let i = 1; i < 6; i++) {
              this.resData[otherIndex + i] = { val: undefined, ts: (otherIndex + i) * 40 };
            }
            break;
          case 493:
            for (let i = 1; i < 7; i++) {
              this.resData[otherIndex + i] = { val: undefined, ts: (otherIndex + i) * 40 };
            }
            break;
          case 492:
            for (let i = 1; i < 8; i++) {
              this.resData[otherIndex + i] = { val: undefined, ts: (otherIndex + i) * 40 };
            }
            break;
          case 491:
            for (let i = 1; i < 9; i++) {
              this.resData[otherIndex + i] = { val: undefined, ts: (otherIndex + i) * 40 };
            }
            break;
          default:
            for (let i = 1; i < 9; i++) {
              this.resData[otherIndex + i] = { val: undefined, ts: (otherIndex + i) * 40 };
            }
            break;
        }

        //for heart rate
        // this.hrData[otherIndex] = { val: observer.dp.hr, ts: otherIndex * 40 };
        // this.hrData[otherIndex + 1] = { val: undefined, ts: otherIndex * 40 };

        otherIndex++;

        this.drawResChart(this.resData, this.index);
        this.drawEcgChart(this.ecgData, this.index);
      }
    })
  }
  drawResChart(resData: IData[], index: number) {
    const resDiv = document.getElementById(`res_${index}`)!;

    const width = resDiv.getBoundingClientRect().width;
    const height = resDiv.getBoundingClientRect().height;
    const margin = { top: 20, bottom: 20 };

    //TODO:그림 그리기
    d3.select(`#res_${index} svg`).remove();

    const svg: any = d3.select(`#res_${index} div.chart`)
      .append("svg")
      .attr("class", "prd")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", width).attr("height", height);

    const g: any = svg.append("g");

    const xScale: any = d3.scaleTime().range([0, width]);
    const yScale: any = d3.scaleLinear().range([height - margin.top - margin.bottom, 0]);

    xScale.domain(d3.extent(resData, d => d.ts)).nice();
    yScale.domain(d3.extent(resData, d => d.val)).nice();

    const line: any = d3.line()
      .defined((d: any) => !isNaN(d.val))
      .x((d: any) => xScale(d.ts))
      .y((d: any) => yScale(d.val))
      .curve(d3.curveBumpX);

    const chart = g.append("g")
      .attr("class", "chart")
      .attr("width", width);

    chart.append("path")
      .datum(resData)
      .attr("class", "line")
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("width", width)
      .attr("stroke-width", "2px")
      .attr("d", line);
  }

  drawEcgChart(ecgData: IData[], index: number) {
    const ecgDiv = document.getElementById(`ecg_${index}`)!;

    const width = ecgDiv.getBoundingClientRect().width;
    const height = ecgDiv.getBoundingClientRect().height;
    const margin = { top: 20, bottom: 20 };

    //TODO:그림 그리기
    d3.select(`#ecg_${index} svg`).remove();

    const svg: any = d3.select(`#ecg_${index} div.chart`)
      .append("svg")
      .attr("class", "prd")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", width).attr("height", height);

    const g: any = svg.append("g");

    const xScale: any = d3.scaleTime().range([0, width]);
    const yScale: any = d3.scaleLinear().range([height - margin.top - margin.bottom, 0]);

    xScale.domain(d3.extent(ecgData, d => d.ts)).nice();
    yScale.domain(d3.extent(ecgData, d => d.val)).nice();

    const line: any = d3.line()
      .defined((d: any) => !isNaN(d.val))
      .x((d: any) => xScale(d.ts))
      .y((d: any) => yScale(d.val))
      .curve(d3.curveBumpX);

    const chart = g.append("g")
      .attr("class", "chart")
      .attr("width", width);

    chart.append("path")
      .datum(ecgData)
      .attr("class", "line")
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("width", width)
      .attr("stroke-width", "2px")
      .attr("d", line);
  }
}

export interface IData {
  val: number | undefined;
  ts: number;
}
