import { ListPrice2 } from "./list-price2.interface"
import { RetailPrice2 } from "./retail-price2.interface"

export interface Offer {
    finskyOfferType: number
    listPrice: ListPrice2
    retailPrice: RetailPrice2
}