import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
   MatToolbarModule, 
   MatIconModule,
   MatButtonModule,
   MatInputModule,
   MatCardModule,
   MatListModule,
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
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
  ],
  declarations: []
})
export class SharedModule { }
