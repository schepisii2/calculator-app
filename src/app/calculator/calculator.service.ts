import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  getResult(a: number, b: number, operator: string){
    if (operator == '+') {
        return a + b;
    }
    else if (operator == '-') {
        return a - b;
    }
    else if (operator == '*') {
        return a * b;
    }
    else /*(operator == '/') */{
        return a / b;
    }
  }
  constructor() { }
}
