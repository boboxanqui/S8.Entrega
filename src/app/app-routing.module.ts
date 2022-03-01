import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';
import { StarshipComponent } from './starships/pages/starship/starship.component';
import { StarshipsListComponent } from './starships/pages/starships-list/starships-list.component';
import { WelcomeComponent } from './starships/pages/welcome/welcome.component';

const routes: Routes = [

  {
    path: 'welcome',
    component: WelcomeComponent,
    data: { animation: 'isLeft'}
  },
  {
    path: 'starships',
    component: StarshipsListComponent,
    canLoad: [ AuthGuard ],
    canActivate: [ AuthGuard ],
    data: { animation: 'isRight'}
  },
  {
    path: 'starship/:starshipName',
    component: StarshipComponent
  },
  {
    path:'**',
    redirectTo: 'welcome'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
