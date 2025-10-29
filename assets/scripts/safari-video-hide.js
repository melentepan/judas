;(function () {
  const ua = navigator.userAgent
  const isSafari =
    /Safari/.test(ua) &&
    !/Chrome|CriOS|FxiOS|EdgiOS|YaBrowser|YaApp|GSA/.test(ua)
  if (isSafari) {
    const videos = document.querySelectorAll('.bottom-fixed-video')
    videos.forEach((video) => {
      video.style.display = 'none'
    })

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () {
        const videos = document.querySelectorAll('.bottom-fixed-video')
        videos.forEach((video) => {
          video.style.display = 'none'
        })
      })
    }
  }
})()
