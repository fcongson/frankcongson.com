import { useCallback, useRef, useState } from 'react'

export const useScrollPosition = () => {
  const previousScrollPosition = useRef(0)
  const [scrollProgress, setScrollProgress] = useState<number>(0)
  const [scrollDirection, setScrollDireciton] = useState<'up' | 'down' | null>(null)

  const handleScroll = useCallback(() => {
    const scrollContainer = window.document.documentElement
    const currentScrollPosition = scrollContainer.scrollTop

    const scrollableDistance = scrollContainer.scrollHeight - scrollContainer.clientHeight
    const scrollDistanceFromBottom = scrollableDistance - currentScrollPosition
    const scrollProgress = 1 - scrollDistanceFromBottom / scrollableDistance

    if (currentScrollPosition > previousScrollPosition.current) {
      // Scrolling down
      setScrollDireciton('down')
    } else if (currentScrollPosition < previousScrollPosition.current) {
      // Scrolling up
      setScrollDireciton('up')
    }

    previousScrollPosition.current = currentScrollPosition
    setScrollProgress(scrollProgress)
  }, [])

  return {
    handleScroll,
    scrollDirection,
    scrollProgress,
  }
}
