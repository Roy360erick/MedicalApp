import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Colors } from 'ng2-charts';

@Component({
  selector: 'app-graphics01',
  templateUrl: './graphics01.component.html',
  styleUrls: ['./graphics01.component.scss']
})
export class Graphics01Component implements OnInit {


  title : string = 'First Graphic'
  labels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  data = [350, 450, 100];
  colors = ['#9E120E','#FF5800','#FFB4F4'];

  constructor() { }

  ngOnInit(): void {
  }

}
