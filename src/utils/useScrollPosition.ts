import { useState } from 'react'

export const useScrollPosition = () => {
  const [previousScrollPosition, setPreviousScrollPosition] = useState<number>(0)
  const [scrollProgress, setScrollProgress] = useState<number>(0)
  const [scrollDirection, setScrollDireciton] = useState<'up' | 'down' | null>(null)

  const handleScroll = () => {
    const scrollContainer = window.document.documentElement
    const currentScrollPosition = scrollContainer.scrollTop

    const scrollableDistance = scrollContainer.scrollHeight - scrollContainer.clientHeight
    const scrollDistanceFromBottom = scrollableDistance - currentScrollPosition
    const scrollProgress = 1 - scrollDistanceFromBottom / scrollableDistance

    if (currentScrollPosition > previousScrollPosition) {
      // Scrolling down
      setScrollDireciton('down')
    } else if (currentScrollPosition < previousScrollPosition) {
      // Scrolling up
      setScrollDireciton('up')
    }

    setPreviousScrollPosition(currentScrollPosition)
    setScrollProgress(scrollProgress)
  }

  return {
    handleScroll,
    scrollDirection,
    scrollProgress,
  }
}
