const items = document.getElementById('items')

document.getElementById('search').addEventListener('input', e => {
  const value = e.target.value

  for (let i = 0; i < items.children.length; i++) {
    const isVisible = items.children[i].textContent.includes(value)
    items.children[i].classList.toggle("hide", !isVisible)
    console.log(items.children[i].classList)
  }
})