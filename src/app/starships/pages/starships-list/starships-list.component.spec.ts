import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from '../../services/data.service';
import { HttpService } from '../../services/http.service';

import { StarshipsListComponent } from './starships-list.component';

describe('StarshipsListComponent', () => {
  let component: StarshipsListComponent;
  let fixture: ComponentFixture<StarshipsListComponent>;
  let httpClient: jasmine.SpyObj<HttpClient>;
  let httpService: HttpService;
  let dataService: jasmine.SpyObj<DataService>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarshipsListComponent ],
      providers: [HttpService, DataService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Starship Array must be empty', () => {
    // httpClient = jasmine.createSpyObj('HttpClient', ['get'])
    // const thisComponent = new StarshipsListComponent( httpClient, dataService )
    const array = component.starshipArr;
    expect(array.length).toEqual(0);
  })

  it('Starhip Array must be initialized after onInit', () => {
    const array = component.starshipArr;
    component.ngOnInit()
    expect(array.length).toBeGreaterThan(0);

  })



});
 