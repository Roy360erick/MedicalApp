import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incremental',
  templateUrl: './incremental.component.html',
  styleUrls: ['./incremental.component.scss']
})
export class IncrementalComponent implements OnInit{

  @Input("value") progress:number = 50;
  @Input("btnClass") className:string = "btn btn-primary";
  @Output("value") resultValue:EventEmitter<number> = new EventEmitter();

  constructor() { }
  ngOnInit(): void {
    this.className = `btn ${this.className}`
  }

  get getPorcetaje(){
    return `${this.progress}%`;
  }

  onChange(value : number){
    if(value >= 100){
      this.progress = 100;
    }else if (value <= 0){
      this.progress = 0;
    }else{
      this.progress = value;
    }

    this.resultValue.emit(value);
  }

  changeValue(value:number){
    if(this.progress >= 100 && value >=0){
      this.resultValue.emit(100);
      return this.progress = 100;
    }

    if(this.progress <= 0 && value <0){
      this.resultValue.emit(0);
      return this.progress = 0;
    }

    this.resultValue.emit(this.progress);
    this.progress = this.progress + value;
  }
}
