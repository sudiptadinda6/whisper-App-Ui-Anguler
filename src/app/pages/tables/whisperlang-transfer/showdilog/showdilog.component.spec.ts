import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdilogComponent } from './showdilog.component';

describe('ShowdilogComponent', () => {
  let component: ShowdilogComponent;
  let fixture: ComponentFixture<ShowdilogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowdilogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowdilogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
