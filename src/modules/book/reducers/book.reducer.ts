import { createReducer, on } from '@ngrx/store';
import { Book } from '../interfaces/book.interface';
import { BookApiActions } from '../actions/book.action';

export const initialState: ReadonlyArray<Book> = [];

export const bookReducer = createReducer(
  initialState,
  on(BookApiActions.retrievedBookList, (_state, { books }) => books)
);
