import { Component, Input } from '@angular/core';
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

  constructor(private imageService: ServiceService) { }

  ngOnInit() {
    this.selectedImage = this.imageService.getSelectedImage();
    this.fileName = this.selectedImage.name

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
