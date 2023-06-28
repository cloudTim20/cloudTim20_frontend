import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent {

  selectedFile: File | null = null;
  fileName: string = "";
  fileType: string = "";
  fileSize: string = "";
  creationTime: string = "";
  lastChangeTime: string = "";


  fileForm = new FormGroup({
    file: new FormControl()
  });
  
  constructor(private service: ServiceService) {}

  uploadFile() {
      console.log("file upload");
      if (this.selectedFile) {
        this.service.uploadFile(this.selectedFile).subscribe(
          response => { // Handle the response from the server
          },
          error => {// Handle any errors
          }
        );
      }
    }

  handleFileChange(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      console.log('File type:', this.selectedFile.type);
    }

    if (this.selectedFile) {
      this.fileName = this.selectedFile.name;
      this.fileType = this.selectedFile.type;
      this.fileSize = this.service.formatBytes(this.selectedFile.size);
      this.creationTime = this.service.formatDate(this.selectedFile.lastModified);
      this.lastChangeTime = this.service.formatDate(this.selectedFile.lastModified);
    }

    
  }



}
