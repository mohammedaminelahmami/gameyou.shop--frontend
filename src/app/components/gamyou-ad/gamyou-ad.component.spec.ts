import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamyouAdComponent } from './gamyou-ad.component';

describe('GamyouAdComponent', () => {
  let component: GamyouAdComponent;
  let fixture: ComponentFixture<GamyouAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamyouAdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamyouAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
