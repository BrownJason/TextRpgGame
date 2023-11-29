import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import classes from '../../documents/classes.json';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-class-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './class-component.component.html',
  styleUrl: './class-component.component.css'
})
export class ClassComponentComponent implements OnInit {
  ngOnInit(): void {
  }

  classtype: any;

  onSubmit(classform: NgForm) {
    alert("You have selected: " + classform.value.classtype);
    console.log(classform.value.classtype);
  }

  public classesList: {name:string, stats:[{name:string, value: BigInteger}], abilities:[]}[] = classes;
}
