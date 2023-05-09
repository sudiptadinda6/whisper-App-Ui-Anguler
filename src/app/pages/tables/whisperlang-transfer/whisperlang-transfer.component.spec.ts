import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhisperlangTransferComponent } from './whisperlang-transfer.component';

describe('WhisperlangTransferComponent', () => {
  let component: WhisperlangTransferComponent;
  let fixture: ComponentFixture<WhisperlangTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhisperlangTransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhisperlangTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
