import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Starship } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';

import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {

    this.showImg = true;

    this.activatedRoute.params.subscribe(({ starshipName }) => {
      this.starship = this.dataService.starshipArr.find(ship => ship.name === starshipName.replace('%20', ' '))!
      this.id = this.dataService.getId(this.starship.url);
      this.starshipImg = `${this.imagesUrl}${this.id}.jpg`

    })
  }

  starship!: Starship;
  starshipImg: string = '';
  id: string = ''
  imagesUrl: string = 'https://starwars-visualguide.com/assets/img/starships/'
  showImg: boolean = true;
  randomGif: string = ''

  showError(){
    this.showImg = false;
    this.getGif()
  }

  getGif() {
    const randomGif = Math.floor( Math.random() *20 );
   
    this.httpService.getGifs().subscribe( resp => 
      this.randomGif = resp.data[randomGif].images.downsized.url
    )
  }


}
