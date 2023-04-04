import {Component} from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-workflow-page',
  templateUrl: './workflow-page.component.html',
  styleUrls: ['./workflow-page.component.scss'],
})
export class WorkflowPageComponent {
  events: any[];

  constructor() {
    this.events = [
      {
        title: 'Requirement elicitation',
        status: '01',
        isLeft: true,
        isSprintAction: false,
        icon: 'assets/icons/how_it_works/case_icon.svg',
        color: '#9C27B0',
        description: 'We collect all functional requirements and provide rough estimates, costs, and scope.'
      },
      {
        title: 'Contract negotiation',
        status: '02',
        isLeft: false,
        isSprintAction: false,
        icon: 'assets/icons/how_it_works/contract_icon.svg',
        color: '#673AB7',
        description: 'We discuss all the contract terms, setting the cooperation and pricing models.'
      },
      {
        title: 'Design and prototyping',
        status: '03',
        isLeft: true,
        isSprintAction: false,
        icon: 'assets/icons/how_it_works/brush_icon.svg',
        color: '#FF9800',
        description: 'The team works on the concept of the solution and provides a visual representation.'
      },
      {
        title: 'Architecture building',
        status: '04',
        isLeft: false,
        isSprintAction: false,
        icon: 'assets/icons/how_it_works/architecture_icon.svg',
        color: '#607D8B',
        description: 'The team offers an optimal architectural solution that will be easily expanded in the future.'
      },
      {
        title: 'Iteration grooming',
        status: '05',
        isLeft: true,
        isSprintAction: true,
        icon: 'assets/icons/how_it_works/grooming_icon.svg',
        color: '#607D8B',
        description: 'The team participates in the process of discussions, explanations, clarifications of a future feature or product'
      },
      {
        title: 'Iteration planning',
        status: '06',
        isLeft: false,
        isSprintAction: true,
        icon: 'assets/icons/how_it_works/planning_icon.svg',
        color: '#607D8B',
        description: 'The team makes a division of stories and tasks for optimal iterations for continuous implementation and delivery.'
      },
      {
        title: 'Daily meeting',
        status: '07',
        isLeft: true,
        isSprintAction: true,
        icon: 'assets/icons/how_it_works/daily_icon.svg',
        color: '#607D8B',
        description: 'Team members report progress daily. In case of questions, they receive a quick answer and continue development.'
      },
      {
        title: 'Coding',
        status: '08',
        isLeft: false,
        isSprintAction: true,
        icon: 'assets/icons/how_it_works/code_icon.svg',
        color: '#607D8B',
        description: 'Developers implement software code according to existing requirements.'
      },
      {
        title: 'Unit testing',
        status: '09',
        isLeft: true,
        isSprintAction: true,
        icon: 'assets/icons/how_it_works/unit-test_icon.svg',
        color: '#607D8B',
        description: 'Developers cover new functionality with tests to ensure the high quality of the product.'
      },
      {
        title: 'Quality assurance',
        status: '10',
        isLeft: false,
        isSprintAction: true,
        icon: 'assets/icons/how_it_works/qa_icon.svg',
        color: '#607D8B',
        description: 'QA engineers conduct checks for correctness, absence of errors, compliance with the requirements of the developed features.'
      },
      {
        title: 'Solution deployment',
        status: '11',
        isLeft: true,
        isSprintAction: false,
        icon: 'assets/icons/how_it_works/deployment_icon.svg',
        color: '#607D8B',
        description: 'DevOps engineers implement continuous integration, deployment and delivery processes.Each subsequent iteration of deployment and delivery will be automated.'
      },
      {
        title: 'Maintenance and support',
        status: '12',
        isLeft: false,
        isSprintAction: false,
        icon: 'assets/icons/how_it_works/support_icon.svg',
        color: '#607D8B',
        description: 'Our team guarantees the quality of the developed product and is ready to support it in the future.'
      },
    ];
  }

  ngOnInit(){
    AOS.refresh();
  }
}
