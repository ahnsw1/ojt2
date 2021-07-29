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
  motionStatus: number = 0;

  constructor(private wsService: WebsocketService) { }

  @Input() index: number = 0;
  @Input() deviceInfos: any = {};
  ecg: string = "ecg";
  resp: string = "res";

  ngOnInit(): void {
    this.wsService.subject.subscribe(observer => {
      if (observer.dv === this.deviceInfos.deviceAddress) {
        
        //for hr
        document.querySelector(`#hr_${this.index} .value`)!.innerHTML = `${observer.dp.hr.current}bpm`;
        document.querySelector(`.footer_${this.index} .data-heart-min-value`)!.innerHTML = observer.dp.hr.min;
        document.querySelector(`.footer_${this.index} .data-heart-max-value`)!.innerHTML = observer.dp.hr.max;

        //resperation rate
        if (observer.dp["93"]) {
          document.querySelector(`.footer_${this.index} .data-resp-value`)!.innerHTML = observer.dp["93"];
          document.querySelector(`#resp_${this.index} .value`)!.innerHTML = observer.dp["93"] + "bpm";
        }

        //temperate
        else if (observer.dp["AB"]) {
          document.querySelector(`.footer_${this.index} .data-temp-value`)!.innerHTML = (observer.dp["AB"] / 10).toString();
          document.querySelector(`#temp_${this.index} .value`)!.innerHTML = (observer.dp["AB"] / 10).toString() + "℃";
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

        //arrhythmia detected
        if (observer.arrhythmiaList) {
          this.wsService.annotationSubject.next(
            { [this.index]: observer.arrhythmiaList }
          )
        }

        //trend data
        // if (observer.trendData) {
        //   this.drawRateChart(observer.trendData.hr, this.index, "hr")
        //   this.drawRateChart(observer.trendData.temp, this.index, "temp")
        //   this.drawRateChart(observer.trendData.resp, this.index, "resp")
        // }
      }
    })
  }
  // drawRateChart(data: any, index: number, id: string) {
  //   if (id === "temp" ) {
  //     for (let i = 0; i < data.length; i++) {
  //       data[i].min /= 10;
  //       data[i].avg /= 10;
  //       data[i].max /= 10;
  //     }
  //   }
  //   const hrDiv = document!.querySelector(`#${id}_${index}`);

  //   const hrWidth = hrDiv!.getBoundingClientRect().width;
  //   const hrHeight = hrDiv!.getBoundingClientRect().height;
  //   const margin = { top: 10, bottom: 10, left: 20, right: 10 };

  //   //TODO:그림 그리기
  //   d3.select(`#${id}_${index} svg`).remove();

  //   const hrSvg: any = d3.select(`#${id}_${index} .chart`)
  //     .append("svg")
  //     .attr("class", "prd")
  //     .attr("viewBox", `0 0 ${hrWidth} ${hrHeight}`)
  //     .attr("width", hrWidth - margin.right / 2).attr("height", hrHeight);

  //   const hrG: any = hrSvg.append("g").attr("width", hrWidth - margin.right).attr("height", hrHeight - margin.bottom);
    
  //   const xHRScale: any = d3.scaleLinear().range([0, hrWidth - margin.left - margin.right]).nice();
  //   const yHRScale: any = d3.scaleLinear().range([hrHeight - margin.bottom - margin.top, margin.top + margin.bottom]).nice();

  //   if (data[data.length - 1].index < 13) {
  //     xHRScale.domain([0, 12]);
  //     data = data.filter((i: any) => i.index < 48)
  //   } else {
  //     xHRScale.domain([12, 24]);
  //     data = data.filter((i: any) => i.index >= 48)
  //   }
  //   // xHRScale.domain(d3.extent(data.hr, (d:any) => (d.index + 1) / 4));
  //   yHRScale.domain([d3.min(data, (d: any) => d.min), d3.max(data, (d: any) => d.max)]);

  //   const chart = hrG.append("g")
  //     .attr("class", "chart")
  //     .attr("width", hrWidth)
  //     .attr("height", hrHeight)
  //     .attr("transform", "translate(0, -5)");

  //   chart.append("g")
  //     .attr("class", "axis axis--x")
  //     .attr("width", hrWidth - margin.left - margin.right)
  //     .attr("stroke", "gray")
  //     .attr('transform', `translate(${margin.left - 1.5}, ${hrHeight - margin.bottom})`)
  //     .call(d3.axisBottom(xHRScale).tickSizeInner(0))
  //     .select(".domain").remove();

  //   let min: any;
  //   let max: any;
  //   min = d3.min(data, (d: any) => d.min);
  //   max = d3.max(data, (d: any) => d.max);
    
  //   chart.append("g")
  //     .attr("class", "axis axis--y")
  //     .attr("height", hrHeight - margin.bottom - margin.top)
  //     .attr("stroke", "gray")
  //     .attr("transform", `translate(${margin.left}, ${margin.top})`)
  //     .call(d3.axisLeft(yHRScale).tickSizeInner(0).tickValues([min, max]).tickFormat(x => `${x}`))
  //     .select(".domain").remove();

  //   if (min !== max) {
  //     chart
  //       .selectAll(".bar")
  //       .data(data)
  //       .enter().append("rect")
  //       .attr("class", "bar")
  //       .attr("x", (d: any) => xHRScale((d.index + 1) / 4))
  //       .attr("y", (d: any) => {
  //         if (d.max === d.min) {
  //           return yHRScale(0);
  //         }
  //         else {
  //           return yHRScale(d.max);
  //         }
  //       })
  //       .attr("transform", `translate(${margin.right + 5}, ${margin.bottom})`)
  //       .attr("width", "1px")
  //       .attr("fill", "gray")
  //       .attr("height", (d: any) => hrHeight - yHRScale(d.max) - margin.top - margin.bottom)
  //   }

  //   chart
  //     .selectAll("circle")
  //     .data(data)
  //     .enter()
  //     .append("circle")
  //     .attr("class", "circle")
  //     .attr("transform", `translate(${margin.right + 6.2}, ${margin.bottom})`)
  //     .attr("cx", (d: any) => xHRScale((d.index + 1) / 4))
  //     .attr("cy", (d: any) => yHRScale(d.avg))
  //     .attr("r", 1.5)
  //     .style("fill", "red");
  // }
}

export interface IData {
  val: number | undefined;
  ts: number;
}