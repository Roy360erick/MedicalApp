import { Component, OnInit } from '@angular/core';
import { SidebarSettingsService } from 'src/app/services/sidebar-settings.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuItems : any [];

  constructor(private sideBarSettings:SidebarSettingsService) { 

    this.menuItems = sideBarSettings.menu;
    
  }

  ngOnInit(): void {
  }

}
