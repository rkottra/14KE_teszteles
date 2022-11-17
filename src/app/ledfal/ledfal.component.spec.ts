import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedfalComponent } from './ledfal.component';

describe('LedfalComponent', () => {
  let component: LedfalComponent;
  let fixture: ComponentFixture<LedfalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedfalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LedfalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Kettes számrendszerbe átváltás (0)', () => {
    component.szam = 0;
    component.szamol(component.szam);
    expect(component.ledek[7]).toEqual(false);
    expect(component.ledek[6]).toEqual(false);
    expect(component.ledek[5]).toEqual(false);
    expect(component.ledek[4]).toEqual(false);
    expect(component.ledek[3]).toEqual(false);
    expect(component.ledek[2]).toEqual(false);
    expect(component.ledek[1]).toEqual(false);
    expect(component.ledek[0]).toEqual(false);
  });

  it('Kettes számrendszerbe átváltás (1)', () => {
    component.szam = 1;
    component.szamol(component.szam);
    expect(component.ledek[7]).toEqual(true);
    expect(component.ledek[6]).toEqual(false);
    expect(component.ledek[5]).toEqual(false);
    expect(component.ledek[4]).toEqual(false);
    expect(component.ledek[3]).toEqual(false);
    expect(component.ledek[2]).toEqual(false);
    expect(component.ledek[1]).toEqual(false);
    expect(component.ledek[0]).toEqual(false);
  });

  it('Kettes számrendszerbe átváltás (145)', () => {
    component.szam = 145;
    component.szamol(component.szam);
    expect(component.ledek[7]).toEqual(true);
    expect(component.ledek[6]).toEqual(false);
    expect(component.ledek[5]).toEqual(false);
    expect(component.ledek[4]).toEqual(false);
    expect(component.ledek[3]).toEqual(true);
    expect(component.ledek[2]).toEqual(false);
    expect(component.ledek[1]).toEqual(false);
    expect(component.ledek[0]).toEqual(true);
  });

  it('Kettes számrendszerbe átváltás (254)', () => {
    component.szam = 254;
    component.szamol(component.szam);
    expect(component.ledek[7]).toEqual(false);
    expect(component.ledek[6]).toEqual(true);
    expect(component.ledek[5]).toEqual(true);
    expect(component.ledek[4]).toEqual(true);
    expect(component.ledek[3]).toEqual(true);
    expect(component.ledek[2]).toEqual(true);
    expect(component.ledek[1]).toEqual(true);
    expect(component.ledek[0]).toEqual(true);
  });

  it('Kettes számrendszerbe átváltás (255)', () => {
    component.szam = 255;
    component.szamol(component.szam);
    expect(component.ledek[7]).toEqual(true);
    expect(component.ledek[6]).toEqual(true);
    expect(component.ledek[5]).toEqual(true);
    expect(component.ledek[4]).toEqual(true);
    expect(component.ledek[3]).toEqual(true);
    expect(component.ledek[2]).toEqual(true);
    expect(component.ledek[1]).toEqual(true);
    expect(component.ledek[0]).toEqual(true);
  });

  it('Kettes számrendszerbe átváltás (256)', () => {
    component.szam = 256;
    expect(()=>{
      component.szamol(component.szam)
    }).toThrowError('Out of range');
  });

  it('Kettes számrendszerbe átváltás (-1)', () => {
    component.szam = -1;
    expect(()=>{
      component.szamol(component.szam)
    }).toThrowError('Out of range');
  });

});
