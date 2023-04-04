import {ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  public isTop: boolean = false;
  public isTablet: boolean = false;

  @HostListener('window:scroll', ['$event'])
  changeHeaderBackground(event: any) {
    this.isTop = window.pageYOffset !== 0;
  }

  siteLanguage = 'English';
  public currentLang: string = 'EN';

  languageList = [
    {code: 'en', label: 'English'},
    {code: 'ru', label: 'Russian'},
    {code: 'bel', label: 'Belarus'},
  ];

  public links: Array<{ url: string, title: string }> = [
    {
      url: '/workflow',
      title: 'how_it_works'
    },
    {
      url: '/team',
      title: 'team'
    },
    {
      url: '/contacts',
      title: 'contacts'
    }
  ]

  constructor(private translate: TranslateService, private breakpointObserver: BreakpointObserver, private cdr: ChangeDetectorRef) {
    this.breakpointObserver.observe([
      "(max-width: 768px)"
    ]).subscribe((result: BreakpointState) => {
      this.isTablet = !result.matches;
      this.cdr.markForCheck();
    });
  }

  public changeSiteLanguage(localeCode: string): void {

    const selectedLanguage = this.languageList.find((language) => language.code === localeCode)?.label.toString();

    if (selectedLanguage) {
      this.siteLanguage = selectedLanguage;
      this.translate.use(localeCode);
    }

    const currentLanguage = this.translate.currentLang;
    this.currentLang = currentLanguage.toUpperCase();
  }
}
