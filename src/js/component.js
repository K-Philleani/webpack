
function component() {
  const element = document.createElement('div')
  element.innerHTML = ["Hello", "Webpack"].join()
  element.className = 'content'
  return element
}


document.body.appendChild(component())