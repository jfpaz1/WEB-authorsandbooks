import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterbooksComponent } from './filterbooks.component';

describe('FilterbooksComponent', () => {
  let component: FilterbooksComponent;
  let fixture: ComponentFixture<FilterbooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterbooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
