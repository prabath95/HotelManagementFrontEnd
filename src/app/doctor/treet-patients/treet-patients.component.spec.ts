import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreetPatientsComponent } from './treet-patients.component';

describe('TreetPatientsComponent', () => {
  let component: TreetPatientsComponent;
  let fixture: ComponentFixture<TreetPatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreetPatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreetPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
