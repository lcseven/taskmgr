import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  items: string[];
  ngOnInit() {
     const nums = [1,2,3,4,5,6,7,8,9,10];
     this.items = nums.map(d => `avatar${d}`)
  }

}
