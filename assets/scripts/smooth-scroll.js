document.addEventListener('DOMContentLoaded', function () {
  // Получаем все якорные ссылки
  const anchorLinks = document.querySelectorAll('a[href^="#"]')
  const header = document.querySelector('.header')

  anchorLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href')

      // Пропускаем пустые якоря и ссылки только с #
      if (href === '#' || href === '') {
        return
      }

      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        e.preventDefault()

        // Получаем высоту header
        const headerHeight = header ? header.offsetHeight : 80
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        })
      }
    })
  })

  // Обработка якорных ссылок при загрузке страницы с hash
  if (window.location.hash) {
    setTimeout(function () {
      const hash = window.location.hash.substring(1)
      const targetElement = document.getElementById(hash)

      if (targetElement) {
        const headerHeight = header ? header.offsetHeight : 80
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        })
      }
    }, 100)
  }
})

