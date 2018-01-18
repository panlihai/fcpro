import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyscomponentComponent } from './syscomponent.component';

describe('FstitleComponent', () => {
  let component: SyscomponentComponent;
  let fixture: ComponentFixture<SyscomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SyscomponentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
