import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteBranchNovaComponent } from './componente-branch-nova.component';

describe('ComponenteBranchNovaComponent', () => {
  let component: ComponenteBranchNovaComponent;
  let fixture: ComponentFixture<ComponenteBranchNovaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponenteBranchNovaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponenteBranchNovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
