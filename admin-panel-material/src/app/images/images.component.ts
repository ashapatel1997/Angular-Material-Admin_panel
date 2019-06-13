import { Component, OnInit, ViewEncapsulation,ViewChild } from '@angular/core';
import { ImagesService } from './images.service';
import { Images } from './images';

import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
  
})

export class ImagesComponent implements OnInit {
  


  constructor(private _imageService: ImagesService,
    private _router: Router, private _activatedRoute: ActivatedRoute) { }
  imageList: Images[];//array of images
  displayedColumns: string[]; //string array to display columns in table
  dataSource; //mat-table data source for images array
  
  fetchImage: Images; //fetch image to display in slider
  imgUrl = '';
  imgDescription = '';
  index = 0; //deleted image index
  disabledLeft: boolean; //left slider button
  disabledRight: boolean; //right slider button
  imageIndex: number; //image index 
  length: number; //images array length

  /*array length is not zero then count=true and show table,
  if length is zero then count = false and hide table*/
  count: boolean;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {

    //if length of array is zero then display default image and disable slider buttons
    if (this._imageService.getLength() == 0) {
      this.count = false;
      this.imgUrl = 'assets/image-not-available.png';
      this.imgDescription = '';
      this.disabledLeft = true;
      this.disabledRight = true;
    }

    //else display first image in slider
    else {
      this.count = true;
      this.imageList = this._imageService.getImages();
      this.displayedColumns = ['imageUrl', 'imageDescription', 'editOrDelete'];
      this.dataSource = this.imageList;
     
      this.fetchImage = this._imageService.getFetchedImage(0);

      this.imageIndex = 1;

      this.length = this.imageList.length;
      this.getNextImage(this.imageIndex);
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
  }
  //delete image
  deleteImage(id: number) {
    
    this.index = this._imageService.deleteImage(id);
    //refresh data source after deleteing image from table 
    this.dataSource = new MatTableDataSource(this.imageList);   

    this.length = this.imageList.length;

    //if images are not availabe, then display default image
    if (this.length == 0) {
      this.count = false;
      this.imgUrl = 'assets/image-not-available.png';
      this.imgDescription = '';
    }
    else {
      this.imageIndex = 1;
      this.getNextImage(this.imageIndex);
    }
  }

  //edit selected image
  editImage(id: number) {
    this._router.navigate(['images/edit-image', id]);
  }


  //  /**
  //   * get next or privious image index
  //   * @param n is +1(if user clicks on right slider button) or
  //   *              -1 (if user clicks on left slider button)
  //   */

  getNext(n) {
    this.imageIndex += n;
    this.getNextImage(this.imageIndex);
  }

  /**get next or previous image to display in slider
      * 
      * @param imageIndex is index+1 
  */

  getNextImage(imageIndex: number) {

    //disable left slider button if index is 0
    if ((imageIndex - 1) == 0) {
      this.disabledLeft = true;
    }
    else {
      this.disabledLeft = false;
    }

    //disable both slider button if index is 0 and array length is 1
    if ((imageIndex - 1) == 0 && this.length == 1) {
      this.disabledLeft = true;
      this.disabledRight = true;
    }

    //disable right slider button if index is array length
    if ((imageIndex) == this.length) {
      this.disabledRight = true;
    }
    else {
      this.disabledRight = false;
    }

    this.fetchImage = this._imageService.getFetchedImage(this.imageIndex - 1);
    this.imgUrl = this.fetchImage.imageUrl;
    this.imgDescription = this.fetchImage.imageDescription;
  }
}
