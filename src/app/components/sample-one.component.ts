import { Component, Input, OnInit } from '@angular/core';

interface NameObject {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'sample-one',
  template: `
    <h1>Case #1: Having child components with logic</h1>
    <div>
      <block [name]="nameObject.firstName"></block>
      <block [name]="nameObject.lastName"></block>
    </div>
  `,
})
export class SampleOneComponent implements OnInit {
  @Input() fullName: string;

  nameObject: NameObject;

  ngOnInit(): void {
    this.transformToNameObject();
  }

  transformToNameObject(): void {
    this.nameObject = {
      firstName: this.fullName.split(' ')[0],
      lastName: this.fullName.split(' ').slice(-1)[0],
    };
  }
}
