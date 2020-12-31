import { Component, OnInit } from '@angular/core';

import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSlack } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'view-sns-bar',
  templateUrl: './sns-bar.component.html',
  styleUrls: ['./sns-bar.component.css']
})
export class ViewSnsBarComponent implements OnInit {
  snss = [
    {
      url: "https://twitter.com/NextWebTechLLC",
      icon: faTwitter,
      name: "Twitter",
    },
    {
      url: "https://github.com/next-web-technology",
      icon: faGithub,
      name: "GitHub",
    },
    {
      url: "https://join.slack.com/t/next-web-technology/signup",
      icon: faSlack,
      name: "Slack",
    }
  ]

  goToLink(url: string): void {
    window.open(url, "_blank")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
