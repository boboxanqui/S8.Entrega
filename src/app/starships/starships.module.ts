import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrimeNgModule } from '../prime-ng.module';


import { StarshipsListComponent } from './pages/starships-list/starships-list.component';
import { StarshipComponent } from './pages/starship/starship.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { PilotsComponent } from './components/pilots/pilots.component';


@NgModule({
  declarations: [
    StarshipsListComponent,
    StarshipComponent,
    WelcomeComponent,
    PilotsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrimeNgModule,
    InfiniteScrollModule,
  ],
  exports: [
    StarshipsListComponent
  ]
})
export class StarshipsModule { }
