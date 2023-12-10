import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'counter',
    title: 'Counter',
    loadChildren: () =>
      import(
        'src/modules/counter/counter.module'
      ).then((m) => m.CounterModule),    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
