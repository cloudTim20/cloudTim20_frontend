import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { CreateAlbumComponent } from './components/create-album/create-album.component';
import { ViewContentComponent } from './components/view-content/view-content.component';
import { CreateContentComponent } from './components/create-content/create-content.component';
import { AlbumViewComponent } from './components/album-view/album-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'create', component: CreateContentComponent },
  { path: 'createalbum', component: CreateAlbumComponent },
  { path: 'view', component: ViewContentComponent },
  { path: 'album/:name', component: AlbumViewComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
