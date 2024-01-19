import { Component } from '@angular/core';
import { StudentDetail } from '../student-detail';
import { CommonModule } from '@angular/common';
import { NgIconComponent} from '@ng-icons/core';
import { heroPencilSquare} from '@ng-icons/heroicons/outline';
import { DetailRowComponent } from "../detail-row/detail-row.component";

@Component({
    selector: 'app-student-detail',
    standalone: true,
    templateUrl: './student-detail.component.html',
    styleUrl: './student-detail.component.css',
    imports: [CommonModule, NgIconComponent, DetailRowComponent]
})
export class StudentDetailComponent {
  edit = heroPencilSquare;




  students: StudentDetail[] =[
    {
      id:"121",
      firstName:"Soumik",
      lastName:"Dutta",
      contact: "01749169779",
      address: "Dhaka",
      department: "CSE"
    },
    {
      id:"122",
      firstName:"Soumik",
      lastName:"Dutta",
      contact: "01749169779",
      address: "Dhaka",
      department: "CSE"
    },
    {
      id:"43wrewr",
      firstName:"Soumik",
      lastName:"Dutta",
      contact: "01749169779",
      address: "Dhaka",
      department: "CSE"
    },
    {
      id:"43wrewr",
      firstName:"Soumik",
      lastName:"Dutta",
      contact: "01749169779",
      address: "Dhaka",
      department: "CSE"
    },
    {
      id:"43wrewr",
      firstName:"Soumik",
      lastName:"Dutta",
      contact: "01749169779",
      address: "Dhaka",
      department: "CSE"
    },
    {
      id:"43wrewr",
      firstName:"Soumik",
      lastName:"Dutta",
      contact: "01749169779",
      address: "Dhaka",
      department: "CSE"
    }
  ] 
}
