import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZimloNavbarComponent } from './zimlo-navbar.component';

describe('ZimloNavbarComponent', () => {
  let component: ZimloNavbarComponent;
  let fixture: ComponentFixture<ZimloNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZimloNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZimloNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
