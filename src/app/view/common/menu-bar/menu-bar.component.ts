import { Component, OnInit } from '@angular/core';

import { MENUS } from '../../../domain/menu/menus';

@Component({
  selector: 'view-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class ViewMenuBarComponent implements OnInit {
  menus = MENUS

  constructor() { }

  ngOnInit(): void {
  }

}
