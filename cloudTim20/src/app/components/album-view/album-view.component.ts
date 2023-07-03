import { Component } from '@angular/core';
import { Album } from '../models/album';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-album-view',
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.css']
})
export class AlbumViewComponent {

  name: string | null = "";

  images: any[] = [
    { src: 'assets/banana.jpg', name: 'Banana' },
    { src: 'assets/brain.jpg', name: 'Brain' },
    { src: 'assets/bulb.jpg', name: 'Bulb' },
    { src: 'assets/carboard.jpg', name: 'Carboard' },
    { src: 'assets/chicken.jpg', name: 'Chicken' },
    { src: 'assets/dice.jpg', name: 'Dice' },
    { src: 'assets/dog.jpg', name: 'Dog' },
    { src: 'assets/light.jpg', name: 'Light' },
    { src: 'assets/tree.jpg', name: 'Tree' },
    { src: 'assets/banana.jpg', name: 'Banana' },
    { src: 'assets/brain.jpg', name: 'Brain' },
    { src: 'assets/bulb.jpg', name: 'Bulb' },
    { src: 'assets/carboard.jpg', name: 'Carboard' },
    { src: 'assets/chicken.jpg', name: 'Chicken' },
    { src: 'assets/spiral.gif', name: 'Spiral' },
    { src: 'assets/dice.jpg', name: 'Dice' },
    { src: 'assets/leo.gif', name: 'Leo' },
    { src: 'assets/dog.jpg', name: 'Dog' },
    { src: 'assets/leo.gif', name: 'Leo' },
    { src: 'assets/light.jpg', name: 'Light' },
    { src: 'assets/tree.jpg', name: 'Tree' },
    { src: 'assets/Wow-gif.gif', name: 'WoW' },
    { src: 'assets/spiral.gif', name: 'Spiral' },
    { src: 'assets/planet.gif', name: 'Planet' },
    { src: 'assets/leo.gif', name: 'Leo' },
    { src: 'assets/uvod.pdf', name: 'UvodPDF'}
  ];

  imageClicked: number | null = null;
  selectedImage: any | null = null;

  constructor(private route: ActivatedRoute, private imageService: ServiceService,private router: Router, private http: HttpClient) { }
  

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name');
  }

  onImageClick(index: number) {
    this.imageClicked = index;
    this.selectedImage = this.images[index];
    this.imageService.setSelectedImage(this.selectedImage);
    this.viewDetails();
  }
  deleteAlbum(){
    const selectedAlbum = this.imageService.getSelectedAlbum();

    if(selectedAlbum){
      this.imageService.deleteAlbum(selectedAlbum.name);
      this.router.navigate(['/main']);
    }
  }

  viewDetails() {
    const selectedImage = this.imageService.getSelectedImage();

    if (selectedImage) {
      this.router.navigate(['/view']);
    } else {
      this.router.navigate(['/main']);
    }
  }
}


