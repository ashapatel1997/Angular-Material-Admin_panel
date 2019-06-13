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
  url: string;
  
  cancel() {
  
    this.url = this._router.url;
   
    if (this.url.startsWith("/images")) {
      this._router.navigateByUrl('/images');
    }

    if (this.url.startsWith("/users")) {
      this._router.navigateByUrl('/users');
    }
    this._matDialog.closeAll();
  }
}
