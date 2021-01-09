import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { Member } from './member.model';

export const MEMBERS: Member[] = [
  {
    name: '松岡靖典',
    photo: 'yasunori-matsuoka.jpg',
    snss: [
      {
        url: 'https://github.com/YasunoriMATSUOKA',
        icon: faGithub,
        name: 'GitHub',
      },
      {
        url: 'https://twitter.com/salaryman_tousi',
        icon: faTwitter,
        name: 'Twitter',
      },
    ],
  },
];
