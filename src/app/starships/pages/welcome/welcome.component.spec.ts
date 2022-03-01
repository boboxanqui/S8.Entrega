import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '../../services/http.service';

import { WelcomeComponent } from './welcome.component';

// describe('WelcomeComponent', () => {
//   let component: WelcomeComponent;
//   let fixture: ComponentFixture<WelcomeComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ WelcomeComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(WelcomeComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

describe('Content Cards', () => {

  it('Component loading', () => {
    const component = new WelcomeComponent( );
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(WelcomeComponent);
  })

})
