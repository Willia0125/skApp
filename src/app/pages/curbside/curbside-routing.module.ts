import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurbsidePage } from './curbside.page';

const routes: Routes = [
  {
    path: '',
    component: CurbsidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurbsidePageRoutingModule {}
