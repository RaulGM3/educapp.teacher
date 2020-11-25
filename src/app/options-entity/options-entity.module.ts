import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionsEntityPageRoutingModule } from './options-entity-routing.module';

import { OptionsEntityPage } from './options-entity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionsEntityPageRoutingModule
  ],
  declarations: [OptionsEntityPage]
})
export class OptionsEntityPageModule {}
