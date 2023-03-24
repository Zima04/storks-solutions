import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeScreenComponent {

}
