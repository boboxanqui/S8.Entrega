import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { Starship, StarshipPage } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.css']
})
export class StarshipsListComponent implements OnInit {

  constructor(
    private httpService: HttpService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.httpService.getStarshipsList().subscribe( resp => {
      setTimeout( () => {
        this.starshipPage = resp;
        this.starshipArr = resp.results;
        this.dataService.addStarship(resp.results)
      }, 500)
    })
  }

  starshipArr: Starship[] = [];
  starshipPage!: StarshipPage;



  nextPage(){
    this.httpService.getNextStarshipPage( this.starshipPage ).subscribe( resp => {
      if( this.starshipArr.length < 36 ){
        this.starshipPage = resp;
        this.starshipArr.push( ...resp.results );
        this.dataService.addStarship(resp.results);
      }   
    })
  }

 

}
