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

  ],
  declarations: []
})
export class SharedModule { }
