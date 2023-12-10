import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'counter',
    title: 'Counter',
    loadChildren: () =>
      import(
        'src/modules/counter/counter.module'
      ).then((m) => m.CounterModule),    
  },
  {
    path: 'books',
    title: 'Books',
    loadChildren: () =>
      import(
        'src/modules/book/book.module'
      ).then((m) => m.BookModule),    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
