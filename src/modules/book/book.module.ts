import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRoutingModule } from './book-rounting.module';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { bookReducer } from './reducers/book.reducer';
import { collectionReducer } from './reducers/collection.reducer';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookCollectionComponent } from './components/book-collection/book-collection.component';
import { BookMainComponent } from './components/book-main/book-main.component';

@NgModule({
  declarations: [
    BookMainComponent,
    BookListComponent,
    BookCollectionComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    HttpClientModule,    
    StoreModule.forRoot({ books: bookReducer, collection: collectionReducer }),    
    /*
    StoreModule.forFeature(
      'books', { book: bookReducer  }
    ),
    StoreModule.forFeature(
      'collection', { collection: collectionReducer }
    )*/
  ]
})
export class BookModule { }
