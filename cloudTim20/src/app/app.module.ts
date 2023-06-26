import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { ViewContentComponent } from './components/view-content/view-content.component';
import { UpdateContentComponent } from './components/update-content/update-content.component';
import { DeleteContentComponent } from './components/delete-content/delete-content.component';
import { CreateAlbumComponent } from './components/create-album/create-album.component';
import { DeleteAlbumComponent } from './components/delete-album/delete-album.component';
import { ShareComponent } from './components/share/share.component';
import { DownloadComponent } from './components/download/download.component';
import { CreateContentComponent } from './components/create-content/create-content.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NavbarComponent,
    MainComponent,
    ViewContentComponent,
    UpdateContentComponent,
    DeleteContentComponent,
    CreateAlbumComponent,
    DeleteAlbumComponent,
    ShareComponent,
    DownloadComponent,
    CreateContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
