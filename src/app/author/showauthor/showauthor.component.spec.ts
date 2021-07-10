import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowauthorComponent } from './showauthor.component';

describe('ShowauthorComponent', () => {
  let component: ShowauthorComponent;
  let fixture: ComponentFixture<ShowauthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowauthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowauthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
