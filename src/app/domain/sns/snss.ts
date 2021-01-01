import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSlack } from '@fortawesome/free-brands-svg-icons';

import { Sns } from './sns.model';

export const SNSS: Sns[] = [
  {
    url: 'https://twitter.com/NextWebTechLLC',
    icon: faTwitter,
    name: 'Twitter',
  },
  {
    url: 'https://github.com/next-web-technology',
    icon: faGithub,
    name: 'GitHub',
  },
  {
    url: 'https://join.slack.com/t/next-web-technology/signup',
    icon: faSlack,
    name: 'Join Slack',
  },
];
