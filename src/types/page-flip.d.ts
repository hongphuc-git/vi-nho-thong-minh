declare module 'page-flip/dist/js/page-flip.module.js' {
  export interface PageFlipSettings {
    width: number
    height: number
    size: 'fixed' | 'stretch'
    usePortrait: boolean
    autoSize: boolean
    drawShadow: boolean
    maxShadowOpacity: number
    flippingTime: number
    useMouseEvents: boolean
    showPageCorners: boolean
    mobileScrollSupport: boolean
    startPage: number
  }

  export class PageFlip {
    constructor(element: HTMLElement, settings: PageFlipSettings)
    loadFromHTML(pages: HTMLElement[]): void
    updateFromHtml(pages: HTMLElement[]): void
    turnToPage(page: number): void
    flipNext(corner?: 'top' | 'bottom'): void
    flipPrev(corner?: 'top' | 'bottom'): void
    update(): void
    getSettings(): PageFlipSettings
    getRender(): { finishAnimation(): void }
    on(event: string, callback: (event: { data: unknown }) => void): PageFlip
    off(event: string): void
    destroy(): void
  }
}
