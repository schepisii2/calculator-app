import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent /*implements OnInit*/ {

  a: number = 0;
  b: number = 0;
  operator: string = "";
  result;
  
  constructor(service: CalculatorService){
    this.result = service.getResult(this.a, this.b, this.operator);
  }

}
