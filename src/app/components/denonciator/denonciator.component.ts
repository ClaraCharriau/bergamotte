import { Component } from '@angular/core';
import { CLASSMATES, Person } from 'src/app/mocks/classmate.mocks';

@Component({
  selector: 'app-denonciator',
  templateUrl: './denonciator.component.html',
  styleUrls: ['./denonciator.component.css']
})
export class DenonciatorComponent {

  classmates: Person[] = CLASSMATES;

  randomPerson: {} = {
    id: 0,
    lastName: "Qui",
    genre: "Femme",
  };

  getRandomPerson() {
    this.randomPerson = CLASSMATES[Math.floor(Math.random()* CLASSMATES.length)];
    console.log(this.randomPerson);
    return this.randomPerson
  }

}
