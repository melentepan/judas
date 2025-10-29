function isInViewport(element) {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

function isPartiallyInViewport(element) {
  const rect = element.getBoundingClientRect()
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight
  return rect.top < windowHeight && rect.bottom > 0
}

function addScrollClasses() {
  const textElements = document.querySelectorAll(
    'h1, h2, h3, h4, h5, h6, p, ul, li, div[class*="text"], div[class*="title"], div[class*="description"], ' +
      'span[class*="text"], span[class*="title"], .partner-item, .discord-text, ' +
      '.gate-title, .gate-number, .gate-action, .nightmare-title, .nightmare-text, ' +
      '.alpha-text, .studio-text, .closet-gate-title, .closet-main-title, ' +
      '.closet-subtitle, .closet-god-text, .closet-description, .closet-right-text, ' +
      '.closet-right-description, .update-text, .morpheus-caption, .project-subtitle, ' +
      '.project-description, .fear-lore, .fear-title h1, .fear-title h2, ' +
      '.gates-title-text, .remain-main-text, .remain-final-text, .fight-title, ' +
      '.participate-heading-1, .participate-heading-2, .participate-text p, ' +
      '.nft-title, .nft-description, .nft-description-small, .nft-brand-text, ' +
      '.token-title, .token-text, .history-title, .history-subtitle, ' +
      '.history-heading, .history-content p, .history-note, .footer-judas-title, ' +
      '.footer-column-header, .footer-link, .footer-copyright, .future-description, ' +
      '.performance-subtitle, .performance-text, .alfatest-title, .alfatest-description, ' +
      '.future-list, .performance-text ul, .performance-text li'
  )

  textElements.forEach((element, index) => {
    if (
      !element.classList.contains('scroll-fade-in') &&
      !element.classList.contains('skotch-text') &&
      !element.classList.contains('gates-title-text') &&
      !element.closest('.header')
    ) {
      element.classList.add('scroll-fade-in')

      if (index % 2 === 1) {
        element.classList.add('delay-1')
      } else if (index % 3 === 2) {
        element.classList.add('delay-2')
      }
    }
  })
}

function addBugReportScrollClasses() {
  const bugReportElements = document.querySelectorAll(
    '.bug-report-title, .bug-report-subtitle, .bulletin-title, ' +
      '.bulletin-intro, .bug-item, .bulletin-footer, .bulletin-gear-icon'
  )

  if (bugReportElements.length > 0) {
    bugReportElements.forEach((item) => {
      item.classList.add('scroll-fade-in')
    })
  }
}

function handleScrollAnimation() {
  const elements = document.querySelectorAll('.scroll-fade-in:not(.visible)')

  elements.forEach((element) => {
    if (isPartiallyInViewport(element)) {
      element.classList.add('visible')
    }
  })
}

document.addEventListener('DOMContentLoaded', () => {
  addScrollClasses()
  addBugReportScrollClasses()
  setTimeout(() => {
    handleScrollAnimation()
  }, 100)
})

window.addEventListener('scroll', handleScrollAnimation)

window.addEventListener('resize', handleScrollAnimation)
