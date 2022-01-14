import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listFrom: string[] = ["Java", "Spring", "JavaEE", "JavaFx", "Typescript", "Angular", "Javascript", "Bootstrap"];

  listTo: string[] = [];

  private dragValue?: string;

  drag(event: any) {
    this.dragValue = event.target.innerText;
    console.log(this.dragValue)
  }

  // To add data from from list to to list
  //  To cut data from list

  drop(event: any) {
    if (event.target.id == 'to' && this.dragValue) {
      this.listTo.push(this.dragValue);
      this.listFrom = this.listFrom.filter(a => a != this.dragValue);
      this.dragValue = undefined;
    }
  }

  dragTo(event:any){
     this.dragValue = event.target.innerText;
  }

   dropTo(event:any){
     if(event.target.id == 'from' && this.dragValue){
          this.listFrom.push(this.dragValue);
          this.listTo = this.listTo.filter(a=> a != this.dragValue);
          this.dragValue = undefined;
     }
   }

}
