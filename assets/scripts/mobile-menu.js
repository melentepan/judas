document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.header-container')
  let mobileToggle = document.querySelector('.mobile-menu-toggle')

  if (!mobileToggle && header) {
    mobileToggle = document.createElement('button')
    mobileToggle.className = 'mobile-menu-toggle'
    mobileToggle.setAttribute('aria-label', 'Toggle mobile menu')
    mobileToggle.innerHTML = `
      <span></span>
      <span></span>
      <span></span>
    `
    header.appendChild(mobileToggle)
  }

  const navigation = document.querySelector('.navigation')

  if (mobileToggle && navigation) {
    mobileToggle.addEventListener('click', function () {
      mobileToggle.classList.toggle('active')
      navigation.classList.toggle('active')
      document.body.style.overflow = navigation.classList.contains('active')
        ? 'hidden'
        : ''
    })

    const navLinks = document.querySelectorAll('.nav-link, .header-social-link')
    navLinks.forEach((link) => {
      link.addEventListener('click', function () {
        mobileToggle.classList.remove('active')
        navigation.classList.remove('active')
        document.body.style.overflow = ''
      })
    })

    document.addEventListener('click', function (event) {
      if (
        !navigation.contains(event.target) &&
        !mobileToggle.contains(event.target) &&
        navigation.classList.contains('active')
      ) {
        mobileToggle.classList.remove('active')
        navigation.classList.remove('active')
        document.body.style.overflow = ''
      }
    })
  }
})
