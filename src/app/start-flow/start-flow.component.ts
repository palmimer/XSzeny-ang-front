import { Component, Input, OnInit } from '@angular/core';
import { PersonData } from '../mockperson-data';

@Component({
  selector: 'app-start-flow',
  templateUrl: './start-flow.component.html',
  styleUrls: ['./start-flow.component.css']
})
export class StartFlowComponent implements OnInit {

  @Input()
  person: PersonData;
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

  openVacationForm(fizNelkuli?: boolean): void {
    // TODO megnyitni a szabadságigénylő űrlap komponenst
  }
}
