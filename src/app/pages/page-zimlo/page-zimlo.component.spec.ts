import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageZimloComponent } from './page-zimlo.component';

describe('PageZimloComponent', () => {
  let component: PageZimloComponent;
  let fixture: ComponentFixture<PageZimloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageZimloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageZimloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
