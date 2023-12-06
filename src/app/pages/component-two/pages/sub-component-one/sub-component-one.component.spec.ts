import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubComponentOneComponent } from './sub-component-one.component';

describe('SubComponentOneComponent', () => {
  let component: SubComponentOneComponent;
  let fixture: ComponentFixture<SubComponentOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubComponentOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubComponentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
