import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ListaTutorialesComponent } from './lista-tutoriales/lista-tutoriales.component';
import { AgregarTutorialComponent } from './agregar-tutorial/agregar-tutorial.component';
import { TutorialDetallesComponent } from './tutorial-detalles/tutorial-detalles.component';
import { SearchImagesComponent } from './search-images/search-images.component';
import { ListaIniciativaComponent } from './lista-iniciativa/lista-iniciativa.component';
import { FormIniciativaComponent } from './form-iniciativa/form-iniciativa.component';
import { HomeComponent } from './vistas/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'mod', component: BoardModeratorComponent },
  // { path: 'tutoriales', component: ListaTutorialesComponent },
  // { path: 'tutoriales/:id', component: TutorialDetallesComponent },
  // { path: 'agregar', component: AgregarTutorialComponent },
  { path: 'listaIniciativas', component: ListaIniciativaComponent },
  { path: 'listaIniciativas/form', component: FormIniciativaComponent },
  { path: 'listaIniciativas/form/:idIniciativa', component: FormIniciativaComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


