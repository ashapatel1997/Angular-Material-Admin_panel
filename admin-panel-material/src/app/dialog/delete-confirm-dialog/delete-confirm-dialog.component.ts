import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ImagesService } from '../../images/images.service';
import { inject } from '@angular/core/testing';
import { Images } from '../../images/images';
@Component({
  selector: 'app-delete-confirm-dialog',
  templateUrl: './delete-confirm-dialog.component.html',
  styleUrls: ['./delete-confirm-dialog.component.scss']
})
export class DeleteConfirmDialogComponent implements OnInit {
 
  constructor() {}
 
  ngOnInit() {
   
  }

  

}
