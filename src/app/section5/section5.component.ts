import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section5',
  templateUrl: './section5.component.html',
  styleUrls: ['./section5.component.css']
})
export class Section5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toggle = true;
  status = "Approve";

  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? "Approve" : "Approved";
}
}
