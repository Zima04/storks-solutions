import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamPageComponent {


  public teamMembers: Array<{ name: string, title: string,url?: string }> = [
    {
      name: 'Marina Ushko',
      title: 'Ceo&Founder',
      url: 'assets/images/person-1.png'
    },
    {
      name: 'Alekcandra  Monara',
      title: 'CTO',
      url: 'assets/images/person-2.png'
    },
    {
      name: 'Vladislav  Togba',
      title: 'FE lead',
      url: 'assets/images/person-3.png'
    }, {
      name: 'Jacon Smith',
      title: 'BE lead',
      url: 'assets/images/person-4.png'
    },
    {
      name: 'Marina Ushko',
      title: 'Developer',
      url: 'assets/images/person-1.png'
    },
    {
      name: 'Alekcandra  Monara',
      title: 'Developer',
      url: 'assets/images/person-2.png'
    },
    {
      name: 'Vladislav  Togba',
      title: 'Developer',
      url: 'assets/images/person-4.png'
    },
    {
      name: 'Jacon Smith',
      title: 'Developer',
      url: 'assets/images/person-3.png'
    },
    {
      name: 'Marina Ushko',
      title: 'Developer',
      url: 'assets/images/person-1.png'
    },
    {
      name: 'Alekcandra  Monara',
      title: 'Developer',
      url: 'assets/images/person-2.png'
    },
    {
      name: 'Vladislav  Togba',
      title: 'Developer',
      url: 'assets/images/person-4.png'
    },
    {
      name: 'Jacon Smith',
      title: 'Developer',
      url: 'assets/images/person-3.png'
    },
  ];
}
