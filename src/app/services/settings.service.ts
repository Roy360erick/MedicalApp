import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private link = document.querySelector("#theme");

  constructor() {
    let theme = localStorage.getItem('theme');

    if(theme != null){
    this.link.setAttribute('href',theme);
    }else{
      const url = `./assets/css/colors/default-dark.css`
    }
   }
   
   changeTheme(theme:string){
    
    const url = `./assets/css/colors/${theme}.css`
    this.link.setAttribute('href',url);
    localStorage.setItem('theme',url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme(){
    const links = document.querySelectorAll('.selector');

    links.forEach(elem => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnUrlTheme = `./assets/css/colors/${btnTheme}.css`;
      const currentLink = this.link.getAttribute('href');
      if( btnUrlTheme === currentLink ){
        elem.classList.add('working');
      }
    });
  }

}
