import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
// Header creates extra spacing which makes it scroll to right

  constructor() { }

  ngOnInit() {
  }

}
