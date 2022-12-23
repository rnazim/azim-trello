import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageZimloComponent } from './pages/page-zimlo/page-zimlo.component';

const routes: Routes = [
  {
    path: 'zimlo',
    component: PageZimloComponent
  },
  {
    path: '',
    redirectTo: 'zimlo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
