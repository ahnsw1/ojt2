import { Component, Input, OnInit } from '@angular/core';
import { WebsocketService } from '../../../service/websocket.service';
import * as d3 from 'd3';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  ecgData: IData[] = [];
  resData: IData[] = [];
  hrData: IData[] = [];
  motionStatus: number = 0;

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
        //for ecg
        {
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
        }

        //for respiration
        {
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
          otherIndex++;
        }

        //for hr
        document.querySelector(`#hr_${this.index} .value`)!.innerHTML = `${observer.dp.hr.current}bpm`;
        document.querySelector(`.footer_${this.index} .data-heart-min-value`)!.innerHTML = observer.dp.hr.min;
        document.querySelector(`.footer_${this.index} .data-heart-max-value`)!.innerHTML = observer.dp.hr.max;

        if (observer.dp["93"]) {
          document.querySelector(`.footer_${this.index} .data-resp-value`)!.innerHTML = observer.dp["93"];
        }
        else if (observer.dp["AB"]) {
          document.querySelector(`.footer_${this.index} .data-temp-value`)!.innerHTML = (observer.dp["AB"] / 10).toString();
        }
        //ecg옆의 큰 숫자 표시하기
        else if (observer.dp["92"]) {
          document.querySelector(`#ecg_${this.index} .value`)!.innerHTML = observer.dp["92"];
        }

        //motion
        else if (observer.dp["B8"] !== undefined) {
          let status = 0;
          switch (observer.dp["B8"]) {
            case 0:
              status = 0
              break;
            case 1:
              status = 1;
              break;
            case 2:
              status = 2;
              break;
            case 3:
              status = 3;
              break;
            default:
              status = 0;
              break;
          }
          document.querySelector(`#motion_${this.index} .status_${status}`)?.classList.add("cur_status");
        }

        // else if (observer.dp["96"]) {
        if (observer.arrhythmiaList) {
          this.wsService.annotationSubject.next(
            { [this.index]: observer.arrhythmiaList }
          )
        }

        /**
         * trendData: {
         *   hr: [{index, min, max, avg, sum}],
         *   resp: [{index, min, max, avg, sum}],
         *   temp: [{index, min, max, avg, sum}]
         * }
        */
        if (observer.trendData) {

          console.log(observer, new Date());
          this.drawRateChart(observer.trendData.hr, this.index, "hr")
          this.drawRateChart(observer.trendData.temp, this.index, "temp")
          this.drawRateChart(observer.trendData.resp, this.index, "resp")
        }

        // if (observer.arrhythmiaList) {
        //   console.log(observer);
        // }

        this.drawResChart(this.resData, this.index);
        this.drawEcgChart(this.ecgData, this.index);
      }
    })
  }
  drawResChart(resData: IData[], index: number) {
    const resDiv = document.getElementById(`res_${index}`)!;

    const width = resDiv.getBoundingClientRect().width;
    const height = resDiv.getBoundingClientRect().height;
    const margin = { top: 10, bottom: 10 };

    //TODO:그림 그리기
    d3.select(`#res_${index} svg`).remove();

    const svg: any = d3.select(`#res_${index} div.chart`)
      .append("svg")
      .attr("class", "prd")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", width).attr("height", height);

    const g: any = svg.append("g");

    const xScale: any = d3.scaleTime().range([0, width]);
    const yScale: any = d3.scaleLinear().range([height - margin.top, margin.bottom]);

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
    const yScale: any = d3.scaleLinear().range([height - margin.top, margin.bottom]);

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

  drawRateChart(data: any, index: number, id: string) {
    // const hrDiv = document.getElementById(`hr_${index}`)!;

    const hrDiv = document!.querySelector(`#${id}_${index}`);

    const hrWidth = hrDiv!.getBoundingClientRect().width;
    const hrHeight = hrDiv!.getBoundingClientRect().height;
    const margin = { top: 10, bottom: 10, left: 20, right: 10 };

    //TODO:그림 그리기
    d3.select(`#${id}_${index} svg`).remove();

    const hrSvg: any = d3.select(`#${id}_${index} .chart`)
      .append("svg")
      .attr("class", "prd")
      .attr("viewBox", `0 0 ${hrWidth} ${hrHeight}`)
      .attr("width", hrWidth).attr("height", hrHeight);

    const hrG: any = hrSvg.append("g").attr("width", hrWidth - margin.right).attr("height", hrHeight - margin.bottom);

    const xHRScale: any = d3.scaleLinear().range([0, hrWidth - margin.left - margin.right]).nice();
    const yHRScale: any = d3.scaleLinear().range([hrHeight - margin.bottom - margin.top, margin.top + margin.bottom]).nice();

    if (data[data.length - 1].index < 13) {
      xHRScale.domain([0, 12]);
      data = data.filter((i: any) => i.index < 48)
    } else {
      xHRScale.domain([12, 24]);
      data = data.filter((i: any) => i.index >= 48)
    }
    // xHRScale.domain(d3.extent(data.hr, (d:any) => (d.index + 1) / 4));
    yHRScale.domain([d3.min(data, (d: any) => d.min), d3.max(data, (d: any) => d.max)]);

    const chart = hrG.append("g")
      .attr("class", "chart")
      .attr("width", hrWidth)
      .attr("height", hrHeight)
      .attr("transform", "translate(0, -5)");

    chart.append("g")
      .attr("class", "axis axis--x")
      .attr("width", hrWidth - margin.left - margin.right)
      .attr("stroke", "gray")
      .attr('transform', `translate(${margin.left - 1.5}, ${hrHeight - margin.bottom})`)
      .call(d3.axisBottom(xHRScale).tickSizeInner(0))
      .select(".domain").remove();

    let min: any;
    let max: any;
    min = d3.min(data, (d: any) => d.min);
    max = d3.max(data, (d: any) => d.max);

    chart.append("g")
      .attr("class", "axis axis--y")
      .attr("height", hrHeight - margin.bottom - margin.top)
      .attr("stroke", "gray")
      .attr("transform", `translate(${margin.left}, ${margin.top})`)
      .call(d3.axisLeft(yHRScale).tickSizeInner(0).tickValues([min, max]).tickFormat(x => `${x}`))
      .select(".domain").remove();

    if (min !== max) {
      chart
        .selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", (d: any) => xHRScale((d.index + 1) / 4))
        .attr("y", (d: any) => {
          if (d.max === d.min) {
            return yHRScale(0);
          }
          else {
            return yHRScale(d.max);
          }
        })
        .attr("transform", `translate(${margin.right + 5}, ${margin.bottom})`)
        .attr("width", "1px")
        .attr("fill", "gray")
        .attr("height", (d: any) => hrHeight - yHRScale(d.max) - margin.top - margin.bottom)
    }

    chart
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "circle")
      .attr("transform", `translate(${margin.right + 6.2}, ${margin.bottom})`)
      .attr("cx", (d: any) => xHRScale((d.index + 1) / 4))
      .attr("cy", (d: any) => yHRScale(d.avg))
      .attr("r", 1.5)
      .style("fill", "red");
  }
}

export interface IData {
  val: number | undefined;
  ts: number;
}