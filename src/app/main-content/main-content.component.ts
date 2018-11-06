import { Component, OnInit } from '@angular/core';

interface IStudent {
  id?: number;
  firstName: string;
  lastName: string;
  course: string;
}

@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {


  students: Array<IStudent> = [];

  constructor() {
    this.students[0] = {
      id: 1,
      firstName: 'Alan',
      lastName: 'Portillo',
      course: 'Programming'
    };
    this.students[1] = {
      id: 1,
      firstName: 'Aaron',
      lastName: 'Rodgers',
      course: 'Swimming'
    };
    this.students[2] = {
      id: 1,
      firstName: 'Tom',
      lastName: 'Hanks',
      course: 'Drama'
    };
    this.students[3] = {
      id: 1,
      firstName: 'Barack',
      lastName: 'Obama',
      course: 'Politics'
    };

  }
  ngOnInit() {
  }

  addStudent() {
    const student: IStudent = {
      id: 1,
      firstName: 'Mike',
      lastName: 'Tyson',
      course: 'Boxing'
    };
    this.students.push(student);
  }

}
