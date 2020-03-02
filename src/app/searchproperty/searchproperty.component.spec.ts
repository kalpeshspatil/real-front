import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchpropertyComponent } from './searchproperty.component';

describe('SearchpropertyComponent', () => {
  let component: SearchpropertyComponent;
  let fixture: ComponentFixture<SearchpropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchpropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
