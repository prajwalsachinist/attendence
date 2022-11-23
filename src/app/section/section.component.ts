import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

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

