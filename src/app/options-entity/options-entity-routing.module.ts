import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionsEntityPage } from './options-entity.page';

const routes: Routes = [
  {
    path: '',
    component: OptionsEntityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionsEntityPageRoutingModule {}
