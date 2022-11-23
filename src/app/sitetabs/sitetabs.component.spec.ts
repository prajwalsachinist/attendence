import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitetabsComponent } from './sitetabs.component';

describe('SitetabsComponent', () => {
  let component: SitetabsComponent;
  let fixture: ComponentFixture<SitetabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitetabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SitetabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
