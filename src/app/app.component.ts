import { Component, OnInit, enableProdMode } from '@angular/core';

enableProdMode();

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
  title = 'app works';

  ngOnInit(){
    const customer: Person = {
      firstName:"Hector",
      lastName:"Zavala",
      sayHi: ()=> {
        return "Hi";
      }
    }

    console.log(customer.sayHi());

      const employee: Person = {
        firstName:"test",
        lastName:"employee",
        sayHi: ():string => {
          return "Hello!";
        }
      }
    
    console.log(employee.sayHi());
  }
}
