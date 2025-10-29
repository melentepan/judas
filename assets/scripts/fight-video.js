document.addEventListener('DOMContentLoaded', function () {
  const playButton = document.querySelector('.fight-play-button')
  const video = document.querySelector('.fight-video')

  if (playButton && video) {
    video.controls = false

    playButton.addEventListener('click', function () {
      if (video.paused) {
        video.play()
        playButton.style.display = 'none'
        video.controls = true
      }
    })

    video.addEventListener('click', function () {
      if (!video.paused) {
        video.pause()
        playButton.style.display = 'block'
        video.controls = false
      }
    })

    video.addEventListener('ended', function () {
      playButton.style.display = 'block'
      video.controls = false
    })

    video.addEventListener('play', function () {
      video.controls = true
    })

    video.addEventListener('pause', function () {
      if (playButton.style.display !== 'none') {
        video.controls = false
      }
    })
  }
})
