import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
 
  }

  starshipImg: string = 'https://starwars-visualguide.com/assets/img/starships/9.jpg';

  characterImg: string = 'https://starwars-visualguide.com/assets/img/characters/13.jpg'

  filmImg: string = 'https://starwars-visualguide.com/assets/img/films/6.jpg' 

  planetImg: string = 'https://starwars-visualguide.com/assets/img/planets/8.jpg' 

}
