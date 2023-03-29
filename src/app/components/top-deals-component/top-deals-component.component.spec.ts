import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDealsComponentComponent } from './top-deals-component.component';

describe('TopDealsComponentComponent', () => {
  let component: TopDealsComponentComponent;
  let fixture: ComponentFixture<TopDealsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopDealsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopDealsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
