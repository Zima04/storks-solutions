import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {NgxTranslateModule} from "./translate/translate.module";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import {HeaderComponent} from "./components/header/header.component";
import {StripeComponent} from "./components/stripe/stripe.component";
import {ServicesComponent} from "./components/services/services.component";
import {CooperationComponent} from "./components/cooperation/cooperation.component";
import {TechnologyComponent} from "./components/technology/technology.component";
import {ContactsComponent} from "./components/contacts/contacts.component";
import {FooterComponent} from "./components/footer/footer.component";
import { TeamComponent } from './components/team/team.component';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StripeComponent,
    ServicesComponent,
    CooperationComponent,
    TechnologyComponent,
    ContactsComponent,
    FooterComponent,
    WelcomeScreenComponent,
    MainPageComponent,
    TeamPageComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTranslateModule,
    BsDropdownModule.forRoot(),
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
