import { Component, OnInit } from '@angular/core';
import { getDate } from 'date-fns'

@Component({
  selector: 'app-silderbar',
  templateUrl: './silderbar.component.html',
  styleUrls: ['./silderbar.component.scss']
})
export class SilderbarComponent implements OnInit {
  today = 'day';
  constructor() { }

  ngOnInit() {
    this.today = `day${getDate(new Date())}`
  }

}
