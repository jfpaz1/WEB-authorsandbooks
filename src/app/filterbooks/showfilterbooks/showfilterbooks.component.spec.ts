import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowfilterbooksComponent } from './showfilterbooks.component';

describe('ShowfilterbooksComponent', () => {
  let component: ShowfilterbooksComponent;
  let fixture: ComponentFixture<ShowfilterbooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowfilterbooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowfilterbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
