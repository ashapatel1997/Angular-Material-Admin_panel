import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent {
  title = 'admin-panel-material';
 
  openSidenav: boolean = false;  //boolean value to open or close sidenav
  arrowPosition: boolean = true; //boolean valu to change arrow of list
  hide: boolean = false; //boolean value to hide or show the sub options

  /** to hide or show sub options */
  itemHideShow()
  {
        this.arrowPosition = !this.arrowPosition;
        this.hide = !this.hide;
  }

 
}
