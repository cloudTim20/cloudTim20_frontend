import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { CreateAlbumComponent } from './components/create-album/create-album.component';
import { DeleteAlbumComponent } from './components/delete-album/delete-album.component';
import { DeleteContentComponent } from './components/delete-content/delete-content.component';
import { DownloadComponent } from './components/download/download.component';
import { ShareComponent } from './components/share/share.component';
import { UpdateContentComponent } from './components/update-content/update-content.component';
import { ViewContentComponent } from './components/view-content/view-content.component';
import { CreateContentComponent } from './components/create-content/create-content.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'create', component: CreateContentComponent },
  { path: 'createalbum', component: CreateAlbumComponent },
  { path: 'deletealbum', component: DeleteAlbumComponent },
  { path: 'delete', component: DeleteContentComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'share', component: ShareComponent },
  { path: 'view', component: ViewContentComponent },
  { path: 'update', component: UpdateContentComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
