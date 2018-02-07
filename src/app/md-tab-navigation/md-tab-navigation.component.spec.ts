import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdTabNavigationComponent } from './md-tab-navigation.component';

describe('MdTabNavigationComponent', () => {
  let component: MdTabNavigationComponent;
  let fixture: ComponentFixture<MdTabNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdTabNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdTabNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
