import {ChangeDetectionStrategy, Component} from '@angular/core';
import * as AOS from "aos";

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamComponent {
  ngOnInit() {
  }
}
