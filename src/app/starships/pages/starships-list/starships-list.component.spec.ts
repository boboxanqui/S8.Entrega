import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '../../services/http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { StarshipsListComponent } from './starships-list.component';

describe('StarshipsListComponent', () => {
  let component: StarshipsListComponent;
  let fixture: ComponentFixture<StarshipsListComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ StarshipsListComponent ],
  //     providers: [HttpService, DataService]
  //   })
  //   .compileComponents();
  // });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService]
    }).compileComponents()
  })
  
  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const httpService: HttpService = TestBed.inject(HttpService)
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Starship Array must be empty', () => {
    const array = component.starshipArr;
    expect(array.length).toBe(0);
  })

  it('Starhip Array must be initialized after onInit (1s delay)', () => {
    const array = component.starshipArr;
    component.ngOnInit()
    setTimeout(() => {
      expect(array.length).toBeGreaterThan(0);
    }, 1000)
  })

  it('Add items to Starship Array on scroll'), () => {
    const array = component.starshipArr;
    component.ngOnInit()
    component.nextPage()
    expect(array.length).toBeGreaterThan(10);
  }

});
