import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomestaticComponent } from './homestatic.component';

describe('HomestaticComponent', () => {
  let component: HomestaticComponent;
  let fixture: ComponentFixture<HomestaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomestaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomestaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
