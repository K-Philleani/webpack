import { sum, mul } from './js/math.js'
const { dateFormat, priceFormat } =  require('./js/format.js')

console.log(sum(20, 30))
console.log(mul(20, 30))

console.log(dateFormat("1314"))
console.log(priceFormat("1314"))