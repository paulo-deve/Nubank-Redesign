const btn = document.querySelector('.btn.btn-call')
btn.onmousemove = (e) => {
  const x = e.pageX - btn.offsetLeft
  const y = e.pageY - btn.offsetTop
  btn.style.setProperty('--x', `${x}px`)
  btn.style.setProperty('--y', `${y}px`)
}

const btnMobile = document.querySelector('.btn.btn-mobile')
const hamburger = document.querySelector('.fas.fa-bars')
const nav = document.querySelector('.nav')

btnMobile.addEventListener('click', (e) => {
  e.preventDefault()
  nav.classList.toggle('active')
  hamburger.classList.toggle('fa-times')
})