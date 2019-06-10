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

  hide: boolean = true; //boolean value to hide or show the sub options
  itemHideShow(index: number)
  {
   
    if (index === 1 || index === 2)
    {
      this.arrowPosition = true;
      this.hide = true;
      
    }
    if (index === 3) {
       this.arrowPosition = !this.arrowPosition;
        this.hide = !this.hide;
    }
   
  }

 
}
