import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/components/register/register.component';
import { MainContainerComponent } from './films/components/main-container/main-container.component';
import { CanActivateFilmsGuard } from './auth/guards/can-activate-films.guard';
import { LogCanActivateGuard } from './auth/guards/log-can-activate.guard';

const routes: Routes = [
  { path: '', redirectTo: '/films', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, canActivate: [LogCanActivateGuard] },
  { path: 'films', component: MainContainerComponent, canActivate: [CanActivateFilmsGuard]},
  { path: '**', redirectTo: '/films' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
