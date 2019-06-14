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
  id: number;
  imageList: Images[];
  dataSource: any;
  constructor(private _router: Router, private _dialogRef: MatDialogRef<DeleteConfirmDialogComponent>, private _matDialog: MatDialog, private _imageService: ImagesService,
    @Inject(MAT_DIALOG_DATA) data) {

    this.id = data.id;
    this.imageList = data.imageList;
    this.dataSource = data.dataSource;
  }
 
  ngOnInit() {
   
  }

  //delete() {
   
  //  this._imageService.deleteImage(this.id);
  //  console.log("length of array=", this.imageList.length);
  //  this.dataSource = new MatTableDataSource(this.imageList);
  //  console.log("length of data source=", this.dataSource.data);
  //  this._matDialog.closeAll();
  //}


  cancel() {
    this._dialogRef.close(false);
  }

}
