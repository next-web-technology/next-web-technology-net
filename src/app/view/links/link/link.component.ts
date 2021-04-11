import { Component, OnInit, Input } from '@angular/core';

import { Link } from '../../../domain/link/link.model';

@Component({
  selector: 'view-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css'],
})
export class ViewLinkComponent implements OnInit {
  @Input()
  link: Link | null = null;

  goToLink(url: string): void {
    window.open(url, '_blank');
  }

  constructor() {}

  ngOnInit(): void {}
}
