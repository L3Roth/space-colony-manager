import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuildingSelectionComponent } from './building-selection.component';

describe('BuildingSelectionComponent', () => {
  let component: BuildingSelectionComponent;
  let fixture: ComponentFixture<BuildingSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingSelectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BuildingSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
