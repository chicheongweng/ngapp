import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadpaymeComponent } from './downloadpayme.component';

describe('DownloadpaymeComponent', () => {
  let component: DownloadpaymeComponent;
  let fixture: ComponentFixture<DownloadpaymeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadpaymeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadpaymeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
