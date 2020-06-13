import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { UsersComponent } from "./components/users/users.component";
import { RoutinesComponent } from './components/routines/routines.component';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { MyRoutinesComponent } from './components/my-routines/my-routines.component';
import { ExerciseDetailComponent } from './components/exercise-detail/exercise-detail.component';
import { ExercisesListCoachComponent } from './components/exercises-list-coach/exercises-list-coach.component';
import { RoutinesListCoachComponent } from './components/routines-list-coach/routines-list-coach.component';
import { RoutinesListTraineeComponent } from './components/routines-list-trainee/routines-list-trainee.component';
import { AJoinRoutineExerciseComponent } from './components/a-join-routine-exercise/a-join-routine-exercise.component';
import { RoutinesCoachComponent } from './components/routines-coach/routines-coach.component';
import { ExercisesCoachComponent } from './components/exercises-coach/exercises-coach.component';

import { AuthGuard } from "./guards/auth.guard";

const ROUTES: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'admin/users', component: UsersComponent, canActivate:[AuthGuard] },
	{ path: 'admin/routines', component: RoutinesComponent, canActivate:[AuthGuard] },
	{ path: 'admin/exercises', component: ExercisesComponent, canActivate:[AuthGuard] },
	{ path: 'admin/routine-list', component: MyRoutinesComponent, canActivate:[AuthGuard] },
	{ path: 'login', component: LoginComponent, canActivate:[AuthGuard] },
	{ path: 'register', component: RegisterComponent, canActivate:[AuthGuard] },
	{ path: 'edit-profile', component: EditProfileComponent, canActivate:[AuthGuard] },
	{ path: 'exercise-detail/:id', component: ExerciseDetailComponent, canActivate:[AuthGuard] },
	{ path: 'coach/routine-list', component: RoutinesListCoachComponent, canActivate:[AuthGuard] },
	{ path: 'coach/exercise-list', component: ExercisesListCoachComponent, canActivate:[AuthGuard] },
	{ path: 'coach/routines', component: RoutinesCoachComponent, canActivate:[AuthGuard] },
	{ path: 'coach/exercises', component: ExercisesCoachComponent, canActivate:[AuthGuard] },
	{ path: 'trainee/routine-list', component: RoutinesListTraineeComponent, canActivate:[AuthGuard] },
	{ path: '',   redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', component: HomeComponent }
  ];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }