import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent  {

  constructor( ) { }


  starshipImg: string = 'https://starwars-visualguide.com/assets/img/starships/9.jpg';

  characterImg: string = 'https://starwars-visualguide.com/assets/img/characters/13.jpg'

  filmImg: string = 'https://starwars-visualguide.com/assets/img/films/6.jpg' 

  planetImg: string = 'https://starwars-visualguide.com/assets/img/planets/8.jpg' 

}
