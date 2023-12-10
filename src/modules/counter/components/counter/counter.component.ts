import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { decrement, increment, reset } from '../../actions/counter.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');    
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
