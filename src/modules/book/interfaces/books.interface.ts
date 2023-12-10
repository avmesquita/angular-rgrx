import { Book } from "./book.interface"

export interface Books {
    kind: string
    totalItems: number
    items: Book[]
}