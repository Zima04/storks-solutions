import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {TeamPageComponent} from "./pages/team-page/team-page.component";
import {WorkflowPageComponent} from "./pages/workflow-page/workflow-page.component";
import {ContactsPageComponent} from "./pages/contacts-page/contacts-page.component";

const routes: Routes = [
  {
    path: 'main',
    component: MainPageComponent
  },
  {
    path: 'team',
    component: TeamPageComponent
  },
  {
    path: 'workflow',
    component: WorkflowPageComponent
  },
  {
    path: 'contacts',
    component: ContactsPageComponent,
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
