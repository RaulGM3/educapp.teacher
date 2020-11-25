import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.page.html',
  styleUrls: ['./subjects.page.scss'],
})
export class SubjectsPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {

  }

  onAddSubject () {
    this.router.navigateByUrl ('school/subjects/add-subject');
  }
}
