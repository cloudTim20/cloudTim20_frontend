import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-view-content',
  templateUrl: './view-content.component.html',
  styleUrls: ['./view-content.component.css']
})
export class ViewContentComponent {

  selectedImage: any;

  fileName: string = "mock";
  fileType: string = "mock";
  fileSize: string = "mock";
  creationTime: string = "mock";
  lastChangeTime: string = "mock";
  
  constructor(private router: Router, private imageService: ServiceService, private http: HttpClient) { }


  ngOnInit() {
    this.selectedImage = this.imageService.getSelectedImage();
    this.fileName = this.selectedImage.name

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

  deleteContent(){
    const selectedImage = this.imageService.getSelectedImage();

    if(selectedImage){
      this.imageService.deleteImage(selectedImage);
      this.router.navigate(['/view']);
    }
  }

  
  
readImageMetadata() {// nije potrebno ako imamo model za sliku koju saljemo i cuvamo/ laksi nacin <-------
  // const imageElement = this.myImageElement.nativeElement as HTMLImageElement;
  // const metadata: ImageMetadata | null = (imageElement as any).metadata;

  // if (metadata) {
  //   // Read metadata properties
  //   const fileSize = metadata.size;
  //   const creationDate = metadata.creationDate;
  //   // ...
  }


}
