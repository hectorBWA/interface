import { Component } from '@angular/core';

interface Person{
  firstName: string;
  lastName: string;

  sayHi(): string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  ngOnInit(){
    const customer: Person = {
      firstName:"Hector",
      lastName:"Zavala",
      sayHi(){

      }
    }
  }
}
