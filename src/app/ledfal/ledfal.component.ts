import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ledfal',
  templateUrl: './ledfal.component.html',
  styleUrls: ['./ledfal.component.css']
})
export class LedfalComponent implements OnInit {

  public szam:number = 0;
  

  public ledek: boolean[] = [false, false, false,false, false, false,false, false];

  constructor() { 
    this.szam = Math.floor(Math.random()*256.0);
    this.szamol(this.szam);
  }

  szamol(szam:number) {
    if (szam > 255) throw new RangeError("Out of range");
    if (szam < 0) throw new RangeError("Out of range");
    
    for (let index = 0; index < 8; index++) {
      this.ledek[index] = false;
    }
    let seged = szam;
    let i = 7;
    while (seged >= 1) {
      let maradek = seged % 2;
      
      this.ledek[i] = maradek == 1;
      seged = Math.floor(seged / 2);
      i--;
    }
  }

  ngOnInit(): void {
  }

}
