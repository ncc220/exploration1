import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
      <button nbButton hero status="warning" *ngIf="!value">{{ value }}</button>
      <button nbButton hero status="success" *ngIf="value == 'X'">{{ value}}</button>
      <button nbButton hero status="info" *ngIf="value == 'O'">{{ value}}</button>

  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent {

  buttonDisabled: boolean = false;
  @Input() value: 'X' | 'O';

}
