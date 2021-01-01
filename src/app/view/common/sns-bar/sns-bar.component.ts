import { Component, OnInit } from '@angular/core';

import { SNSS } from '../../../domain/sns/snss';

@Component({
  selector: 'view-sns-bar',
  templateUrl: './sns-bar.component.html',
  styleUrls: ['./sns-bar.component.css']
})
export class ViewSnsBarComponent implements OnInit {
  snss = SNSS

  goToLink(url: string): void {
    window.open(url, "_blank")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
