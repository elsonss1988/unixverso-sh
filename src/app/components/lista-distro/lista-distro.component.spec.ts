import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDistroComponent } from './lista-distro.component';

describe('ListaDistroComponent', () => {
  let component: ListaDistroComponent;
  let fixture: ComponentFixture<ListaDistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDistroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
