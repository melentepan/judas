document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.header')
  let lastScrollTop = 0
  let ticking = false

  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > 100) {
      header.classList.add('visible')
    } else {
      header.classList.remove('visible')
    }

    lastScrollTop = scrollTop
    ticking = false
  }
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(handleScroll)
      ticking = true
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true })
})
