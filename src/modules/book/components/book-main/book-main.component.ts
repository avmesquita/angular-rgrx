import { Component, OnInit } from '@angular/core';
import { selectBookCollection, selectBooks } from '../../selectors/book.selectors';
import { BookActions, BookApiActions } from '../../actions/book.action';
import { GoogleBooksService } from '../../services/google-books.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-book-main',
  templateUrl: './book-main.component.html',
  styleUrl: './book-main.component.scss'
})
export class BookMainComponent implements OnInit {

  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  onAdd(bookId: string) {
    this.store.dispatch(BookActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BookActions.removeBook({ bookId }));
  }

  constructor(private booksService: GoogleBooksService, private store: Store) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) =>
        this.store.dispatch(BookApiActions.retrievedBookList({ books }))
      );
  }

}
