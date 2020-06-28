import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlateAddComponent } from './plate-add/plate-add.component';
import { PlateEditComponent } from './plate-edit/plate-edit.component';
import { PlateGetComponent } from './plate-get/plate-get.component';

const routes: Routes = [
  {
    path: 'plate/create',
    component: PlateAddComponent
  },
  {
    path: 'edit/:id',
    component: PlateEditComponent
  },
  {
    path: 'plates',
    component: PlateGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }