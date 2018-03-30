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

  ],
  declarations: []
})
export class SharedModule { }
