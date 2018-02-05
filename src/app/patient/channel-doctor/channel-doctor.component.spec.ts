import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelDoctorComponent } from './channel-doctor.component';

describe('ChannelDoctorComponent', () => {
  let component: ChannelDoctorComponent;
  let fixture: ComponentFixture<ChannelDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
