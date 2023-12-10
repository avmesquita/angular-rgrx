import { ListPrice } from "./list-price.interface";
import { Offer } from "./offer.interface";
import { RetailPrice } from "./retail-price.interface";

export interface SaleInfo {
    country: string
    saleability: string
    isEbook: boolean
    listPrice: ListPrice
    retailPrice: RetailPrice
    buyLink: string
    offers: Offer[]
}
