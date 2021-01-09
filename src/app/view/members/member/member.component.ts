import { Component, OnInit, Input } from '@angular/core';

import { Member } from '../../../domain/member/member.model';

@Component({
  selector: 'view-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
})
export class ViewMemberComponent implements OnInit {
  @Input()
  member: Member | null = null;

  goToLink(url: string): void {
    window.open(url, '_blank');
  }

  constructor() {}

  ngOnInit(): void {}
}
