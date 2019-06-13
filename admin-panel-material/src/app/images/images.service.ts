import { Injectable } from '@angular/core';
import { Images } from './images';


@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor() { }

  imageList: Images[] =
    [
      { id: 1, imageUrl: 'assets/admin.png', imageDescription: 'Guide to the Galaxy has a few things to say on the subject of towels.' },
      { id: 2, imageUrl: 'assets/img-1.jpg', imageDescription: 'description 2' }
     
     
    ]

  getImages(): Images[] {
    return this.imageList;
  }
}
