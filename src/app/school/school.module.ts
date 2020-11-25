import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchoolPageRoutingModule } from './school-routing.module';

import { ConfirmationComponent } from './confirmation/confirmation.component';

import { SchoolPage } from './school.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchoolPageRoutingModule
  ],
  declarations: [SchoolPage, ConfirmationComponent],
  entryComponents: [ConfirmationComponent]
})
export class SchoolPageModule {}
