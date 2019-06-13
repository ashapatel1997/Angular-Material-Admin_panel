import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Route } from '@angular/router';
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

  // redirect to users page if form submission is canceled via dialog
  cancel() {
    this._router.navigateByUrl('/users');
    this._matDialog.closeAll();
  }
}
