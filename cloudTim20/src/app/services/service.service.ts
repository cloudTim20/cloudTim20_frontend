import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Album } from '../components/models/album';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http: HttpClient) { }
//---------------------------------------------upload to server
  uploadFile(file: File): Observable<any>
  {
       const formData = new FormData();
       formData.append('file', file);
       return this.http.post('your-upload-endpoint', formData);
  }

  //--------------------------------------------------------shared image for navbar buttons
  private selectedImage: any = null;

  setSelectedImage(image: any) {
    this.selectedImage = image;
  }

  getSelectedImage() {
    return this.selectedImage;
  }

  //-----------------------------------------------------------utility metadata functions
  formatBytes(bytes: number): string {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
  
  formatDate(timestamp: number): string {
    const date = new Date(timestamp);
    return date.toLocaleString();
  }

  //--------------------------------------add albums

  albums: Album[] = [
    { name: 'Album 1' },
    { name: 'Album 2' },
    { name: 'Album 3' },
  ];

  addAlbum(album: Album) {
    this.albums.push(album);
  }

  deleteAlbum( name: string)
  {
    this.albums = this.albums.filter((item) => item.name !== name);
  }

  private selectedAlbum: any = null;

  setSelectedAlbum(album: any) {
    this.selectedAlbum = album;
  }

  getSelectedAlbum() {
    return this.selectedAlbum;
  }

  //--------------------------------------------------------delte image
  deleteImage(selectedImage: any)
  {
    throw new Error('Method not implemented.');
  }
}
