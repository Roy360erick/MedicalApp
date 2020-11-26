import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics01Component } from './graphics01/graphics01.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const routes:Routes = [
  {
    path:'dashboard', 
    component:PagesComponent,
    children :[
      {path: '',component:DashboardComponent},
      {path: 'progress',component:ProgressComponent},
      {path: 'graphics01',component:Graphics01Component},
      {path: 'account-settings',component:AccountSettingsComponent},
    ]
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
