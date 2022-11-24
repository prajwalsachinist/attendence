import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  constructor(private Ref:MatDialogRef<ActivityComponent> ) { }

  ngOnInit(): void {
  }

  ClosePopup(){
this.Ref.close();
  }

  


}
