import {Component} from '@angular/core';

import * as AOS from 'aos';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-workflow-page',
  templateUrl: './workflow-page.component.html',
  styleUrls: ['./workflow-page.component.scss'],
})
export class WorkflowPageComponent {
  events: any[];

  constructor(public translateService: TranslateService) {
    this.events = [
      {
        title: 'requirement_elicitation_title',
        status: '01',
        isLeft: true,
        isSprintAction: false,
        icon: 'assets/icons/how_it_works/case_icon.svg',
        color: '#9C27B0',
        description: 'requirement_elicitation_desc'
      },
      {
        title: 'contract_negotiation_title',
        status: '02',
        isLeft: false,
        isSprintAction: false,
        icon: 'assets/icons/how_it_works/contract_icon.svg',
        color: '#673AB7',
        description: 'contract_negotiation_desc'
      },
      {
        title: 'design_prototyping_title',
        status: '03',
        isLeft: true,
        isSprintAction: false,
        icon: 'assets/icons/how_it_works/brush_icon.svg',
        color: '#FF9800',
        description: 'design_prototyping_desc'
      },
      {
        title: 'architecture_building_title',
        status: '04',
        isLeft: false,
        isSprintAction: false,
        icon: 'assets/icons/how_it_works/architecture_icon.svg',
        color: '#607D8B',
        description: 'architecture_building_desc'
      },
      {
        title: 'iteration_grooming_title',
        status: '05',
        isLeft: true,
        isSprintAction: true,
        icon: 'assets/icons/how_it_works/grooming_icon.svg',
        color: '#607D8B',
        description: 'iteration_grooming_desc'
      },
      {
        title: 'iteration_planning_title',
        status: '06',
        isLeft: false,
        isSprintAction: true,
        icon: 'assets/icons/how_it_works/planning_icon.svg',
        color: '#607D8B',
        description: 'iteration_planning_desc'
      },
      {
        title: 'daily_meeting_title',
        status: '07',
        isLeft: true,
        isSprintAction: true,
        icon: 'assets/icons/how_it_works/daily_icon.svg',
        color: '#607D8B',
        description: 'daily_meeting_desc'
      },
      {
        title: 'coding_title',
        status: '08',
        isLeft: false,
        isSprintAction: true,
        icon: 'assets/icons/how_it_works/code_icon.svg',
        color: '#607D8B',
        description: 'coding_desc'
      },
      {
        title: 'unit_testing_title',
        status: '09',
        isLeft: true,
        isSprintAction: true,
        icon: 'assets/icons/how_it_works/unit-test_icon.svg',
        color: '#607D8B',
        description: 'unit_testing_desc'
      },
      {
        title: 'quality_assurance_title',
        status: '10',
        isLeft: false,
        isSprintAction: true,
        icon: 'assets/icons/how_it_works/qa_icon.svg',
        color: '#607D8B',
        description: 'quality_assurance_desc'
      },
      {
        title: 'solution_deployment_title',
        status: '11',
        isLeft: true,
        isSprintAction: false,
        icon: 'assets/icons/how_it_works/deployment_icon.svg',
        color: '#607D8B',
        description: 'solution_deployment_desc'
      },
      {
        title: 'maintenance_support_title',
        status: '12',
        isLeft: false,
        isSprintAction: false,
        icon: 'assets/icons/how_it_works/support_icon.svg',
        color: '#607D8B',
        description: 'maintenance_support_desc'
      },
    ];
  }

  ngOnInit() {
    AOS.refresh();
  }
}
