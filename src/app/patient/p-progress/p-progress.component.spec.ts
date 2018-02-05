import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PProgressComponent } from './p-progress.component';

describe('PProgressComponent', () => {
  let component: PProgressComponent;
  let fixture: ComponentFixture<PProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
