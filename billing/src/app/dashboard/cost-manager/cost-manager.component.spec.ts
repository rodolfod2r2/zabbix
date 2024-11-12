import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostManagerComponent } from './cost-manager.component';

describe('CostManagerComponent', () => {
  let component: CostManagerComponent;
  let fixture: ComponentFixture<CostManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
