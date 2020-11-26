import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics01Component } from './graphics01/graphics01.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graphics01Component,
    PagesComponent,
    AccountSettingsComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    CommonModule,
    SharedModule,
    ComponentsModule
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Graphics01Component,
    PagesComponent,
    AccountSettingsComponent
  ]
})
export class PagesModule { }
