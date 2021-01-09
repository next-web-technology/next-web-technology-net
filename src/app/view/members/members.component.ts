import { Component, OnInit } from '@angular/core';

import { MEMBERS } from '../../domain/member/members';

@Component({
  selector: 'view-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class ViewMembersComponent implements OnInit {
  members = MEMBERS;

  goToLink(url: string): void {
    window.open(url, '_blank');
  }

  constructor() {}

  ngOnInit(): void {}
}
