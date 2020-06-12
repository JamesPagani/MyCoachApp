import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNavMenuComponent } from './my-nav-menu.component';

describe('MyNavMenuComponent', () => {
  let component: MyNavMenuComponent;
  let fixture: ComponentFixture<MyNavMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNavMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
