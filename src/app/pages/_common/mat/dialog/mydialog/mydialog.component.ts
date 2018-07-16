import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-mat-mydialog',
  templateUrl: './mydialog.component.html',
  styleUrls: ['./mydialog.component.css']
})
export class MyDialogComponent implements OnInit {

  errMsg: string | boolean;
  successMsg: string | boolean;

  constructor(
    private dialogRef: MatDialogRef<MyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogInput: any,
  ) {
    this.errMsg = false;
    this.successMsg = false;
  }


  ngOnInit() {
  }



  dialogClose() {
    this.dialogRef.close();
  }

  close() {
    this.errMsg = false;
    this.successMsg = false;
  }


}
