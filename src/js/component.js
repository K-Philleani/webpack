import '../css/index.css'
import '../css/component.less'


function component() {
  const element = document.createElement('div')
  element.innerHTML = ["Hello", "Webpack"].join()
  element.className = 'content'

  const imgEl = new Image()
  imgEl.src = require('../img/logo_01.jpg')
  element.appendChild(imgEl)

  const bgDivEl = document.createElement('div')
  bgDivEl.style.width = 200 + 'px'
  bgDivEl.style.height = 200 + 'px'
  bgDivEl.className = 'bg-image'
  bgDivEl.style.backgroundColor = "red"
  element.appendChild(bgDivEl)

  return element
}


document.body.appendChild(component())