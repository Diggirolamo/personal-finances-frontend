import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovoAssetComponent } from './nuovo-asset.component';

describe('NuovoAssetComponent', () => {
  let component: NuovoAssetComponent;
  let fixture: ComponentFixture<NuovoAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuovoAssetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuovoAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
