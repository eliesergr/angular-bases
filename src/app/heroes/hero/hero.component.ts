import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'iroman';
  public age:  number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeName(): void {
    this.name = "superman";
  }

  changeAge(): void {
    this.age = 25;
  }

  resetForm(): void {
    this.name = 'iroman';
    this.age = 45;
    document.querySelectorAll('h1')!.forEach( elem => {
      // elem.innerHTML = '<h1>From Angular</h1>';
    })
  }

}
