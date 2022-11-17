import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lampa',
  templateUrl: './lampa.component.html',
  styleUrls: ['./lampa.component.css']
})
export class LampaComponent implements OnInit {

  @Input() isOn: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  click() {
    this.isOn = !this.isOn;
  }

}
