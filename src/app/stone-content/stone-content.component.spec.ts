import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoneContentComponent } from './stone-content.component';

describe('StoneContentComponent', () => {
  let component: StoneContentComponent;
  let fixture: ComponentFixture<StoneContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoneContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoneContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
