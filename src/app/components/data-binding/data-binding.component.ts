import { Component, input , signal} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
//basic data types in TS - TS is strongly typed language
//string, number, boolean, date

courseName : string = "Angular 18";
stateName:string = "Maharashtra";
inputType = "checkbox";
rollNo: number = 123;
isIndian: boolean = true;
currentDate: Date = new Date();
myClassName: string = "bg-primary";

firstName = signal("Shubham Thombare");

constructor(){
  // this.inputType = 123;
}

showAlert(message: string){
 alert(message);
}

changeCourseName(){
  this.courseName="React JS";
  this.firstName.set("Test Person");
}

}
