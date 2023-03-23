import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
