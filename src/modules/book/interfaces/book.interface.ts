import { VolumeInfo } from "./volume-info.interface"

export interface Book {
    kind: string
    id: string
    etag: string
    selfLink: string
    volumeInfo: VolumeInfo
    //saleInfo: SaleInfo
    //accessInfo: AccessInfo
    //searchInfo: SearchInfo
}