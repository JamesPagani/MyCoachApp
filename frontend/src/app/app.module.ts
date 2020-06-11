import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
// comoponents
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { RoutinesComponent } from './components/routines/routines.component';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { MyRoutinesComponent } from './components/my-routines/my-routines.component';
import { MyNavMenuComponent } from './components/shared/my-nav-menu/my-nav-menu.component';
import { KeyvaluePipe } from './pipes/keyvalue.pipe';
import { ExerciseDetailComponent } from './components/exercise-detail/exercise-detail.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RoutinesComponent,
    ExercisesComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    EditProfileComponent,
    MyRoutinesComponent,
    MyNavMenuComponent,
    KeyvaluePipe,
    ExerciseDetailComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
