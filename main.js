// Do not change the code below.
const main = document.querySelector('main')
for (let i = 0; i < 100; i++) {
  const div = document.createElement('div')
  div.classList.add('cell')
  main.append(div)
}

// You may write your code here!
const currentColor = document.querySelector('section')
const palette = document.querySelectorAll('div.color')
palette.forEach(paletteDiv => {
  paletteDiv.addEventListener('click', () => {
    currentColor.style.background = paletteDiv.style.background
  })
})

const div = document.querySelectorAll('div.cell')
div.forEach(cell => {
  cell.addEventListener('click', () => {
    cell.style.background = currentColor.style.background
  })
})
