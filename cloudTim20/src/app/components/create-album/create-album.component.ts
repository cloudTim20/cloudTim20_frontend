import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css']
})
export class CreateAlbumComponent {

constructor(private service: ServiceService, private router: Router){}

addAlbum(albumName: string){
  this.service.addAlbum({name: albumName});
}

albumName: string = '';

onSubmit() {
  // Perform any action you want when the form is submitted
  console.log('Submitted album name:', this.albumName);
  this.addAlbum(this.albumName);
  this.router.navigate(['/main']);
}

}
