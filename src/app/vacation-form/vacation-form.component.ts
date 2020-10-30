import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { _MatTabBodyBase } from '@angular/material/tabs';
import { PersonData } from '../mockperson-data';

@Component({
  selector: 'app-vacation-form',
  templateUrl: './vacation-form.component.html',
  styleUrls: ['./vacation-form.component.css']
})
export class VacationFormComponent implements OnInit {

  @Input()
  actualPerson: PersonData;
  @Output()
  vacationFormData: any;
  title = "Normál szabadság kérelem";
  today = new Date();
  fromDate: Date = this.today;
  untilDate: Date = this.today;
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  fizetesNelkuli= false;

  constructor(

  ) { }

  ngOnInit(): void {
  }

}
