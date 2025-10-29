document.addEventListener('DOMContentLoaded', function () {
  const parallaxLayers = document.querySelectorAll('.parallax-layer')

  const layerSpeeds = {
    'layer-0': 0,
    'layer-1': 0.3,
    'layer-2': 0.5,
    'layer-3': 0.7,
    'layer-4': 0.9,
  }

  let mouseX = 0
  let mouseY = 0

  function updateMouseParallax() {
    parallaxLayers.forEach((layer, index) => {
      const layerClass = layer.className.split(' ')[1]
      const speed = layerSpeeds[layerClass] || 0

      if (speed === 0) {
        layer.style.transform = 'translate3d(0, 0, 0)'
        return
      }
      const moveX = mouseX * speed * 40
      const moveY = mouseY * speed * 40

      layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`
    })
  }

  document.addEventListener('mousemove', function (e) {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2

    updateMouseParallax()
  })
  updateMouseParallax()
})
