import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() handleMenuClick = new EventEmitter<string>(); 
  collapsed = true;

  onMenuClick = (option: string) => {
    this.handleMenuClick.emit(option);
  }
}
