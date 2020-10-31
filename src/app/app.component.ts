import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  routeLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.routeLinks = [
          {
            label: 'Home',
            link: './Home',
            index: 0
        },
        {
            label: ' STUDY ABROAD',
            link: './StudyAbroad',
            index: 1
        }, {
            label: 'SERVICES',
            link: './Services',
            index: 2
        }, {
            label: 'CONTACT US',
            link: './ContactUs',
            index: 3
        }, {
            label: 'ABOUT US',
            link: './AboutUs',
            index: 4
        }
    ];
}

ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
  });
}
getActiveClass(indexOfRouteLink) {
  let tabsclass = 'mat-tab-link';
  if (this.activeLinkIndex === indexOfRouteLink) {
    tabsclass = 'mat-tab-link mat-tab-label-active';
  }

  return tabsclass;
}









  title = 'EduJet';
  navigateUrl(urlName: string){

  }
  
}
