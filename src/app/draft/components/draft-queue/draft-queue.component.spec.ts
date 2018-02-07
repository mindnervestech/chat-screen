import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftQueueComponent } from './draft-queue.component';

describe('DraftQueueComponent', () => {
  let component: DraftQueueComponent;
  let fixture: ComponentFixture<DraftQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
