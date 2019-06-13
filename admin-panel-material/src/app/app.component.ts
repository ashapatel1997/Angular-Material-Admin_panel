import { Component,OnInit ,ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: { '(window:resize)': 'onResize($event)' }
  
})
export class AppComponent {
  title = 'admin-panel-material';
 
  openSidenav: boolean;  //boolean value to open or close sidenav
  mode: string ; //mode of sidenav (over,side)
  arrowPosition: boolean = true; //boolean valu to change arrow of list
  hide: boolean = false; //boolean value to hide or show the sub options
  showToggle: string;  //show or hide menu icon based on screen size
  activeLink: string; //apply active class to parent is sub option is selected
  public innerWidth: any; //width of the window 

  
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.changeLayout(this.innerWidth);
  }
  
  /** to hide or show sub options
  n is index of list item
*/
  itemHideShow(n:number)
  {
    if (n === 1 || n === 2) {
      this.arrowPosition = true;
      this.hide = false;
      this.activeLink = '';
     
      
    }
    else {
      this.arrowPosition = !this.arrowPosition;
      this.hide = !this.hide;
    }
   
  }

  
  activeParent() {
    this.activeLink = 'active';
  }

  onResize(event)
  {
    this.innerWidth = window.innerWidth;// window width
    this.changeLayout(this.innerWidth);
  }
  
  changeLayout(width: any) {
    if (width <= 768) {
       this.showToggle = 'show';
      this.mode = 'over';
      this.openSidenav = false;
      
    }
    else {
       this.showToggle = 'hide';
      this.mode = 'side';
      this.openSidenav = true;
      
    }
  }
  
}
