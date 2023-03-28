import {ChangeDetectionStrategy, Component, HostListener} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  isTest = false;

  @HostListener('window:scroll', ['$event'])
  doSomething(event: any) {

    // console.log("Scroll Event", window.pageYOffset);
    this.isTest = window.pageYOffset !== 0;
    console.log(this.isTest);
  }


  siteLanguage = 'English';
  public currentLang: string = 'EN';

  languageList = [
    {code: 'en', label: 'English'},
    {code: 'ru', label: 'Russian'},
    {code: 'bel', label: 'Belarus'},
  ];

  constructor(private translate: TranslateService) {
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
