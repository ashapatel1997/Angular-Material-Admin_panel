import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-cancel-dialog',
  templateUrl: './cancel-dialog.component.html',
  styleUrls: ['./cancel-dialog.component.scss']
})
export class CancelDialogComponent implements OnInit {

  constructor(private _router: Router, private _matDialog: MatDialog) { }

  ngOnInit() {
  }
  url: string; //to store current route URL
  
  cancel() {

    //fetch current route url
    this.url = this._router.url;

   //if route url starts with "/images" then navinagtio to images page
    if (this.url.startsWith("/images")) {
      this._router.navigateByUrl('/images');
    }

    //if route url starts with "/users" then navinagtio to users page
    if (this.url.startsWith("/users")) {
      this._router.navigateByUrl('/users');
    }

    //close dialog
    this._matDialog.closeAll();
  }
}
