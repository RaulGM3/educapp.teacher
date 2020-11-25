import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { ConfirmationComponent } from './confirmation/confirmation.component';

@Component({
  selector: 'app-school',
  templateUrl: './school.page.html',
  styleUrls: ['./school.page.scss'],
})
export class SchoolPage implements OnInit {
  userId = 1;

  constructor(
    private router: Router,
    private modalCtrl: ModalController,
  ) {

  }

  ngOnInit() {
  }

  goTo (url) {
    this.router.navigateByUrl (url);
  }

  openModal() {
    this.modalCtrl
      .create({
        component: ConfirmationComponent,
        componentProps: { catId: this.userId }
      })
      .then(modalEl => {
        modalEl.present();
      });
  }
}
