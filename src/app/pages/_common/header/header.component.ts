import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MyDialogComponent } from '../mat/dialog/mydialog/mydialog.component';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  dialogRef: MatDialogRef<MyDialogComponent>;
  msg: string;

  constructor(
    private dialog: MatDialog,
  ) {
  }


  dialog_open(): void {
    this.dialogRef = this.dialog.open(MyDialogComponent, {
      width: '40%',
      data: {dialogType: 'Add', dialogMsg: 'This is my dialog.'}
    });

    this.dialogRef.afterClosed().subscribe((dialogOut: any) => {
      console.log('dialog closed: ', dialogOut);
      this.msg = 'Dialog closed !!!';

      setTimeout(() => {
        this.msg = '';
      }, 2100);
    });
  }

}
