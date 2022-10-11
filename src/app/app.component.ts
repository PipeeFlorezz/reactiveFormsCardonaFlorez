import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TercerDesafio';

  public Athletes: any[];

  constructor(){
    this.Athletes = [];
  }

  sendAthlete(event: any){
    console.log(event);
    this.Athletes.push(event);
  }
}
