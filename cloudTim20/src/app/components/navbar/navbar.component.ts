import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router, private imageService: ServiceService, private http: HttpClient) { }

  viewDetails() {
    const selectedImage = this.imageService.getSelectedImage();

    if (selectedImage) {
      this.router.navigate(['/view']);
    } else {
      this.router.navigate(['/main']);
    }
  }

  deleteAlbum(){
    const selectedAlbum = this.imageService.getSelectedAlbum();

    if(selectedAlbum){
      this.imageService.deleteAlbum(selectedAlbum.name);
      this.router.navigate(['/main']);
    }
  }

  deleteContent(){
    const selectedImage = this.imageService.getSelectedImage();

    if(selectedImage){
      this.imageService.deleteImage(selectedImage);
      this.router.navigate(['/view']);
    }
  }

  downloadFile() {
    const fileUrl = 'assets/banana.jpg'; // Replace with the actual file URL
    this.http.get(fileUrl, { responseType: 'blob' })
      .subscribe((blob: Blob) => {
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = 'filename.ext'; // Replace with the desired file name and extension
        downloadLink.click();
      });
  }
}
