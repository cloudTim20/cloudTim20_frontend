import { Component, OnInit } from '@angular/core';
import { Album } from '../models/album';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  albums: Album[] = [];
  albumClicked: number | null = null;
  selectedAlbum: any | null = null;

  constructor(private router: Router, private service: ServiceService){}

  ngOnInit(): void
  {
    this.albums = this.service.albums;
  }

  openAlbum(name: string){
    this.router.navigate(['album/:'+name]);
  }

  onAlbumClick(index: number) {
    this.albumClicked = index;
    this.selectedAlbum = this.albums[index];
    this.service.setSelectedAlbum(this.selectedAlbum);
  }
}
