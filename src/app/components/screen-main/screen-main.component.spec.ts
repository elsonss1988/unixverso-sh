import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenMainComponent } from './screen-main.component';

describe('ScreenMainComponent', () => {
  let component: ScreenMainComponent;
  let fixture: ComponentFixture<ScreenMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
