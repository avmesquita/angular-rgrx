import { Book } from "./interfaces/book.interface";

export interface BookState {
    books: ReadonlyArray<Book>;
    collection: ReadonlyArray<string>;
}