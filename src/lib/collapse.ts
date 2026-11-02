function revealHeading(details: HTMLDetailsElement) {
  if (details.open) return
  const heading = details.querySelector('summary')
  if (!heading) return
  const top = heading.getBoundingClientRect().top
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const scrollRegion = details.closest('[data-collapse-scroll]')
  if (scrollRegion instanceof HTMLElement) {
    const regionBounds = scrollRegion.getBoundingClientRect()
    if (top < regionBounds.top + 12 || heading.getBoundingClientRect().bottom > regionBounds.bottom - 12) {
      scrollRegion.scrollTo({
        top: Math.max(0, scrollRegion.scrollTop + top - regionBounds.top - 12),
        behavior: reduced ? 'auto' : 'smooth',
      })
    }
    return
  }
  const navigationBottom = document.querySelector('.site-navigation')?.getBoundingClientRect().bottom ?? 0
  if (top >= navigationBottom + 12 && top <= window.innerHeight - 60) return
  window.scrollTo({
    top: Math.max(0, window.scrollY + top - navigationBottom - 16),
    behavior: reduced ? 'auto' : 'smooth',
  })
}

export function returnToCollapsedHeading(event: Event) {
  if (!(event.currentTarget instanceof HTMLElement)) return
  const details = event.currentTarget.closest('details')
  if (!(details instanceof HTMLDetailsElement) || !details.open) return
  requestAnimationFrame(() => revealHeading(details))
}

export function collapseFromButton(event: Event) {
  if (!(event.currentTarget instanceof HTMLElement)) return
  const details = event.currentTarget.closest('details')
  if (!(details instanceof HTMLDetailsElement)) return
  details.open = false
  details.querySelector('summary')?.focus({ preventScroll: true })
  requestAnimationFrame(() => revealHeading(details))
}
