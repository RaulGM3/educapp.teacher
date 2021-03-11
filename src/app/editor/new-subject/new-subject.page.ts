import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { SubjectService } from '../../subject.service';

@Component({
  selector: 'app-new-subject',
  templateUrl: './new-subject.page.html',
  styleUrls: ['./new-subject.page.scss'],
})
export class NewSubjectPage implements OnInit {
  form: FormGroup;
  errorMessage;
  degrees = ['Colegio', 'Instituto', 'Formación Profesional', 'Grado', 'Master', 'Doctorado'];

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      description: new FormControl('', {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      degree: new FormControl('', {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }

  onSubmit () {

  }

}
