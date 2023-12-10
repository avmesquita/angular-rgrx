import { ImageLinks } from "./image-links.interface"
import { IndustryIdentifier } from "./industry-identifier.interface"
import { PanelizationSummary } from "./panelization-summary.interface"
import { ReadingModes } from "./reading-modes.interface"

export interface VolumeInfo {
    title: string
    authors: string[]
    publisher: string
    publishedDate: string
    description: string
    industryIdentifiers: IndustryIdentifier[]
    readingModes: ReadingModes
    pageCount: number
    printType: string
    categories: string[]
    maturityRating: string
    allowAnonLogging: boolean
    contentVersion: string
    panelizationSummary: PanelizationSummary
    imageLinks: ImageLinks
    language: string
    previewLink: string
    infoLink: string
    canonicalVolumeLink: string
}
