import { Component, OnInit , Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  template: `
  <h2 mat-dialog-title>{{title}}</h2>
  <mat-dialog-content>
   {{content}}
  </mat-dialog-content>
  <mat-dialog-actions>

    <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->
    <button mat-button mat-raised-button type="button" color="primary" (click)="onClick(true)"> 确认</button>
    <button mat-button mat-dialog-close type="button" (click)="onClick(false)" >取消</button>

  </mat-dialog-actions>
  `,
  styles: []
})
export class ConfirmDialogComponent implements OnInit {
  title = '';
  content = '';
  constructor( 
    private dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit() {
    this.title = this.data.title;
    this.content = this.data.content
  }
  onClick (result:boolean) {
    this.dialogRef.close(result);
  }
}
