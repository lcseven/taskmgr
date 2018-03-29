import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggle = new EventEmitter<void>();
  @Output() toogleDarkTheme = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  openSildebar() {
    this.toggle.emit();
  }
  onChange(checked: boolean) {
    console.log(checked)
    this.toogleDarkTheme.emit(checked);
  }
}
