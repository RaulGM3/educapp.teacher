import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options-entity',
  templateUrl: './options-entity.page.html',
  styleUrls: ['./options-entity.page.scss'],
})
export class OptionsEntityPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  goTo (str) {
    this.router.navigateByUrl ('/' + str);
  }
}
