import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddGradePageRoutingModule } from './add-grade-routing.module';

import { AddGradePage } from './add-grade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddGradePageRoutingModule
  ],
  declarations: [AddGradePage]
})
export class AddGradePageModule {}
