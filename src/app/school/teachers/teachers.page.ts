import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.page.html',
  styleUrls: ['./teachers.page.scss'],
})
export class TeachersPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  
  onAddTeacher () {
    this.router.navigateByUrl ('school/teachers/add-teacher');
  }
}
