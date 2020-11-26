import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarSettingsService {

  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      subMenu: [
        {
          title: 'Main',
          route: '/'
        },
        {
          title: 'Progress',
          route: 'progress'
        },
        {
          title: 'Graphics',
          route: 'graphics01'
        }
      ]
    }
  ];

  constructor() { }
}
