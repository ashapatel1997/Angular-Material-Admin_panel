import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ImagesService } from './images.service';
import { Images } from './images';



@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
  
})

export class ImagesComponent implements OnInit {

  constructor(private _imageService: ImagesService) { }
  imageList: Images[];
  displayedColumns: string[];
  dataSource;
  ngOnInit() {
    this.imageList = this._imageService.getImages();
    console.log(this.imageList);

    this.displayedColumns = ['imageUrl', 'imageDescription','editOrDelete'];
    this.dataSource = this.imageList;
  }

  //test
  description: string = "Guide to the Galaxy has a few things to say on the subject of towels. A towel, it says, is about the most massively useful thing an interstellar hitch hiker can have.";

 

}
