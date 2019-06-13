import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig} from '@angular/material';
import { ImagesComponent } from '../images.component';
import { Images } from '../images';
import { ImagesService } from '../images.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CancelDialogComponent } from '../../dialog/cancel-dialog/cancel-dialog.component';
@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
})
export class AddImageComponent implements OnInit {

  constructor(private _matDialog: MatDialog, private _imagesService: ImagesService,
    private _router: Router, private _activatedRoute: ActivatedRoute) { }
  addImageGroup: FormGroup;

  //instance of the Images class
  image: Images;
 
  ngOnInit() {
     //form field validation 
    this.addImageGroup = new FormGroup(
      {
        imageUrlControl: new FormControl('', Validators.required),
        imageDescriptionControl: new FormControl('', Validators.required),
      }
    );

    this.image = new Images();
   
    //fetch image id from router link and get details if exists
    this._activatedRoute.paramMap.subscribe(e => {
      const imgId = +e.get('id');
      console.log(imgId);
      if (imgId) {
        this.getImg(imgId);
      }
    });
  }

  //open dialog for cancel the add-image form submission
  openDialog() {
   // const dialogConfig = new MatDialogConfig();
    //dialogConfig.position = { left: '40%', top: '20%' };
    this._matDialog.open(CancelDialogComponent);
  }

 

  //function call on save button click
  saveImage() {
    this._imagesService.saveImage(this.image);
    this._router.navigate(['images']);
  }


  /**
  * fetch details of the image selected for edit the content
  * @param imgId id of the image that is to be edited
  */
  getImg(imgId: number) {

    if (imgId === 0) {
      this.image = { id: null, imageUrl: null, imageDescription: null };
    }
    else {
      this.image = this._imagesService.getImage(imgId);
    }
  }
  
}
