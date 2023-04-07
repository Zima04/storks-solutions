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
      name: 'Vladislav Zinchuk',
      title: 'Developer',
      url: 'assets/images/team/vladislav_zinchuk.png'
    },
    {
      name: 'Alexey Zinchuk',
      title: 'Developer',
      url: 'assets/images/team/alexey_zinchuk.jpg'
    },
    {
      name: 'Konstantin Trush',
      title: 'Developer',
      url: 'assets/images/team/konstantin_trush.jpg'
    }, {
      name: 'Dmitriy Danilov',
      title: 'FE Lead',
      url: 'assets/images/team/dmitriy_danilov2.jpg'
    },
    {
      name: 'Maksim Aderikha',
      title: 'BE Lead',
      url: 'assets/images/team/maxim_adzeriha.jpg'
    },
    {
      name: 'Mikhail Chirich',
      title: 'Full-stack Developer',
      url: 'assets/images/team/mihail_chirich.jpg'
    },
    {
      name: 'Alexandr Kulinkovich',
      title: 'Full-stack Developer',
      url: 'assets/images/team/alexandr_kulinkovich.jpg'
    },
    {
      name: 'Maria Tsar',
      title: 'UI/UX Lead',
      url: 'assets/images/team/maria_tsar.jpg'
    },
    {
      name: 'Edhar Strelchanka',
      title: 'Developer',
      url: 'assets/images/team/edgar_strelchenko.jpg'
    },
    {
      name: 'Andrei Zhuk',
      title: 'FE Developer',
      url: 'assets/images/team/andrei_zhuk.jpg'
    },
    {
      name: 'Victoria Danilova',
      title: 'Developer',
      url: 'assets/images/viktoria_danilova.jpg'
    },
    {
      name: 'Andrei Gronsky',
      title: 'Developer',
      url: 'assets/images/person-3.png'
    },
  ];
}
