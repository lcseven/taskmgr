import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
   MatToolbarModule, 
   MatIconModule,
   MatButtonModule,
   MatInputModule,
   MatCardModule,
   MatListModule,
   MatSliderModule,
   MatSlideToggleModule,
   MatGridListModule,
   MatDialogModule,

    } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDialogModule,

  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDialogModule,

  ],
  declarations: []
})
export class SharedModule { }
