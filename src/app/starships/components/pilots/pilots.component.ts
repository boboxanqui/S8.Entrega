import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../../services/data.service';

import { Pilot, Starship } from '../../interfaces/interfaces';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.css']
})
export class PilotsComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ starshipName }) => {
      this.starship = this.dataService.starshipArr.find(ship => ship.name === starshipName.replace('%20', ' '))!
      this.starship.pilots.forEach( pilotUrl => {
        this.httpService.getPilotByUrl(pilotUrl).subscribe( pilot => {
          this.pilots.push(pilot)
        } )
      })
    })    
  }

  starship!: Starship;
  pilots: Pilot[] = [];
  charactersUrl: string = 'https://starwars-visualguide.com/assets/img/characters/'

  pilotImg(pilot: Pilot): string{
    const pilotId = this.dataService.getId(pilot.url)
    return `${this.charactersUrl}${pilotId}.jpg`
  }

}
