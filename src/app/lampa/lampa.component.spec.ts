import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LampaComponent } from './lampa.component';

describe('LampaComponent', () => {
  let component: LampaComponent;
  let fixture: ComponentFixture<LampaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LampaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LampaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Lámpa kezdőértéke jó-e (nem világít, hamis értékű)', ()=> {
    expect(component.isOn).toBeFalse();
  });

  it('Kattintás esemény jól működik-e (váltja-e az isOn változó értékét)', ()=> {
    component.isOn = false;
    component.click();
    expect(component.isOn).toBeTrue();

    component.isOn = true;
    component.click();
    expect(component.isOn).toBeFalse();
  });
});
