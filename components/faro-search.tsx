'use client'

import { useRef } from 'react'

export function FaroSearch() {
  const fieldRef = useRef<HTMLInputElement>(null)

  function apply(raw: string) {
    const query = raw.trim().toLowerCase()
    const tags = document.querySelectorAll<HTMLElement>('[data-fr9k-tag]')
    let shown = 0
    tags.forEach((tag) => {
      const hay = `${tag.dataset.fr9kTag || ''} ${tag.textContent || ''}`.toLowerCase()
      const hit = query.length === 0 || hay.includes(query)
      tag.hidden = !hit
      if (hit) shown += 1
    })
    const empty = document.getElementById('fr9k-empty')
    if (empty) empty.hidden = shown !== 0
  }

  return (
    <form
      className="fr9k-search"
      role="search"
      action="#fr9k-tags"
      onSubmit={(event) => {
        event.preventDefault()
        const query = fieldRef.current?.value.trim().toLowerCase() ?? ''
        apply(query)
        if (!query) return
        const first = document.querySelector<HTMLAnchorElement>('[data-fr9k-tag]:not([hidden])')
        const href = first?.getAttribute('href')
        if (href) {
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }}
    >
      <label className="fr9k-search-label font-sans" htmlFor="fr9k-q">
        Поиск по сайту
      </label>
      <input
        ref={fieldRef}
        id="fr9k-q"
        className="fr9k-field font-sans"
        type="search"
        name="q"
        placeholder="зеркало, играть, сайт"
        autoComplete="off"
        enterKeyHint="search"
        onChange={(event) => apply(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' && (event.nativeEvent.isComposing || event.keyCode === 229)) {
            event.preventDefault()
          }
        }}
      />
    </form>
  )
}
