import { Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { tickFormat } from 'd3';
import { first } from 'rxjs/operators';
import { WebsocketService } from '../../../../service/websocket.service';

@Component({
  selector: 'app-static-form',
  templateUrl: './static-form.component.html',
  styleUrls: ['./static-form.component.css']
})
export class StaticFormComponent implements OnInit {

  @Input() index: number = 0;
  @Input() title: string = "";
  @Input() deviceInfos: any = {};

  constructor(private wsService: WebsocketService) { }

  ngOnInit(): void {
    this.wsService.subject.subscribe(observer => {
      if (observer.dv === this.deviceInfos.deviceAddress) {
        if (observer.trendData) {
          this.drawRateChart(observer.trendData[`${this.title}`], this.index, this.title)
        }
      }
    })
  }

  drawRateChart(data: any, index: number, id: string) {
    if (id === "temp") {
      for (let i = 0; i < data.length; i++) {
        data[i].min /= 10;
        data[i].avg /= 10;
        data[i].max /= 10;
      }
    }
    const hrDiv = document!.querySelector(`#${id}_${index}`);

    const hrWidth = hrDiv!.getBoundingClientRect().width;
    const hrHeight = hrDiv!.getBoundingClientRect().height;
    const margin = { top: 10, bottom: 10, left: 20, right: 10 };

    d3.select(`#${id}_${index} svg`).remove();

    const hrSvg: any = d3.select(`#${id}_${index} .chart`)
      .append("svg")
      .attr("class", "prd")
      .attr("viewBox", `0 0 ${hrWidth} ${hrHeight}`)
      .attr("width", hrWidth - margin.right / 2).attr("height", hrHeight);

    const hrG: any = hrSvg.append("g").attr("width", hrWidth - margin.right).attr("height", hrHeight - margin.bottom);

    const xHRScale: any = d3.scaleLinear().range([0, hrWidth - margin.left - margin.right]).nice();
    const yHRScale: any = d3.scaleLinear().range([hrHeight - margin.bottom - margin.top, margin.top + margin.bottom]).nice();

    let firstIndex;
    let lastIndex;
    if (data.length <= 12 * 4) {
      if (firstIndex === 0) {
        firstIndex = 96;
      } else {
        firstIndex = data[0].index;
      }
        lastIndex = firstIndex + 12 * 4;
    } else {
      firstIndex = data[data.length - 12 * 4].index;
      lastIndex = data[data.length - 1].index;
    }
    xHRScale.domain([Math.floor(firstIndex / 4), Math.ceil(lastIndex / 4)]);
    
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
      .call(d3.axisBottom(xHRScale).tickSizeInner(0).tickFormat((d: any) => d = d > 24 ? d - 24 : d))
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
      .select(".domain").remove()

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
        .attr("transform", `translate(${margin.right + 2}, ${margin.bottom})`)
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
      .attr("transform", `translate(${margin.right + 2.6}, ${margin.bottom})`)
      .attr("cx", (d: any) => xHRScale((d.index + 1) / 4))
      .attr("cy", (d: any) => yHRScale(d.avg))
      .attr("r", 1.5)
      .style("fill", "red");
  }

}
