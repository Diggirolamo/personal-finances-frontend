import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAssetComponent } from './lista-asset.component';

describe('ListaAssetComponent', () => {
  let component: ListaAssetComponent;
  let fixture: ComponentFixture<ListaAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaAssetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
