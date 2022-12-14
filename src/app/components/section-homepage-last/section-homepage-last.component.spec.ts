import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHomepageLastComponent } from './section-homepage-last.component';

describe('SectionHomepageLastComponent', () => {
  let component: SectionHomepageLastComponent;
  let fixture: ComponentFixture<SectionHomepageLastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionHomepageLastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionHomepageLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
