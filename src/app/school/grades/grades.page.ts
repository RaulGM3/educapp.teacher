import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.page.html',
  styleUrls: ['./grades.page.scss'],
})
export class GradesPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {

  }

  onAddGrade () {
    this.router.navigateByUrl ('/school/grades/add-grade')
  }

}
