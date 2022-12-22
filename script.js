import confetti from 'https://cdn.skypack.dev/canvas-confetti';
const $ = elmt => document.querySelector(elmt)
const $A = elmts => document.querySelectorAll(elmts)
const $btn = $('button')
const $sections = $A('.section')
const observer = new IntersectionObserver(entries => {
  entries.forEach(element => {
    console.log(element)
    if (element.isIntersecting) {
      element.target.classList.add('animacion')
    } else {
      element.target.classList.remove('animacion')
    }
  })
})

$sections.forEach((element) => observer.observe(element))










// $btn.addEventListener('click', () => confetti({
//   angle: 20,
//   particleCount: 200,
//   spread: 360,
//   gravity: -0.6,
//   colors: ['#047C75', '#020419', '#D39126'],
//   scalar: 1.2,
// }))
