import { Component, Input, OnInit } from '@angular/core';
import { MultiDataSet, Label, Colors } from 'ng2-charts';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss']
})
export class DoughnutComponent implements OnInit {

  @Input() title:string = "With out title";
  @Input() labels:string[] = [];
  @Input() data=[];
  @Input("colors") colorsInput=[]

  public doughnutChartLabels: Label[] = this.labels;
  public doughnutChartData: MultiDataSet = [];
  public colors:Colors[] = [{backgroundColor : []}];

  constructor() { }

  ngOnInit(): void {
    this.doughnutChartData.push(this.data);
    this.colors[0].backgroundColor = this.colorsInput;
  }

}
