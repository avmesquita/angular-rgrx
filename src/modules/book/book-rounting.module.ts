import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookMainComponent } from './components/book-main/book-main.component';


const routes: Routes = [
  {
    path: '',
    title: 'Books',
    component: BookMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
