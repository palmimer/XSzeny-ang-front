import { Component, OnInit } from '@angular/core';
import { PersonData } from '../mockperson-data';

@Component({
  selector: 'app-work-flows',
  templateUrl: './work-flows.component.html',
  styleUrls: ['./work-flows.component.css']
})
export class WorkFlowsComponent implements OnInit {

  mockPerson: PersonData = {
    prefix: null,
    firstName: "Pál",
    secondName: null,
    lastName: "Marsi",
    postfix: null,
    birthDate: new Date('1965/12/30'),
    birthPlace: "Heves",
    mothersName: "Darázs Katalin",
    taj: parseInt('025425550', 9),
    taxId: parseInt('4458963221', 10),
    marritalStatus: "házas"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
