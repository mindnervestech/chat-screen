import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftDialogContainerComponent } from './draft-dialog-container.component';

describe('DraftDialogContainerComponent', () => {
  let component: DraftDialogContainerComponent;
  let fixture: ComponentFixture<DraftDialogContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftDialogContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftDialogContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
