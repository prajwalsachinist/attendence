import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivityComponent } from '../modal/activity/activity.component';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor(private matdialog:MatDialog) { }

  ngOnInit(): void {
    
  }

  toggle = true;
  status = "Approve";

  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? "Approve" : "Approved";
}
  
OpenPopup(){
this.matdialog.open(ActivityComponent,{width:'500px',height:'400px',enterAnimationDuration:'300ms',exitAnimationDuration:'300ms'});
}

  }



