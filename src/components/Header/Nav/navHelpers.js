export function scaleElement(e, scale, coordinates) {
  e.style.setProperty('--origin', coordinates)
  e.style.setProperty('--scale', scale)
}

export function handleMouseEnter(event, e) {
  if (!e.classList.contains('active')) {
    const rect = e.getBoundingClientRect()
    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top
    const percentX = (mouseX / e.offsetWidth) * 100
    const percentY = (mouseY / e.offsetHeight) * 100
    const coordinates = `${percentX}% ${percentY}%`
    scaleElement(e, 1, coordinates)
  }
}

export function handleMouseLeave(event, e) {
  const rect = e.getBoundingClientRect()
  const mouseX = event.clientX - rect.left
  const mouseY = event.clientY - rect.top
  const constrainedX = Math.max(0, Math.min(mouseX, e.offsetWidth))
  const constrainedY = Math.max(0, Math.min(mouseY, e.offsetHeight))
  const percentX = (constrainedX / e.offsetWidth) * 100
  const percentY = (constrainedY / e.offsetHeight) * 100
  const coordinates = `${percentX}% ${percentY}%`
  scaleElement(e, 0, coordinates)
}