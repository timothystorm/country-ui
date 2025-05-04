import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionalEntitiesListComponent } from './regional-entities-list.component';

describe('RegionaEntitiesListComponent', () => {
  let component: RegionalEntitiesListComponent;
  let fixture: ComponentFixture<RegionalEntitiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegionalEntitiesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionalEntitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
