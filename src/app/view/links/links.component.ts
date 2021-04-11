import { Component, OnInit } from '@angular/core';

import { LINKS } from '../../domain/link/links';

@Component({
  selector: 'view-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css'],
})
export class ViewLinksComponent implements OnInit {
  links = LINKS;

  constructor() {}

  ngOnInit(): void {}
}
