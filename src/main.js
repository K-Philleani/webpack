import { sum, mul } from './js/math.js'
const { dateFormat, priceFormat } =  require('./js/format.js')
import './js/component'

console.log(sum(20, 30))
console.log(mul(20, 30))

console.log(dateFormat("1314"))
console.log(priceFormat("1314"))


let test = () => {
  console.log("test");
}
test()

let a = 20