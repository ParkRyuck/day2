
const readline = require('readline');

// 1ft 3.5$
// 300 * 200

console.log("1피트당 샷시의 가격은 얼마인가요?")
const perFeet = readline.prompt()


const perFeet = 3.5
const width = 300
const height = 200

// 창문 => 가로 * 2, 세로 * 2 => 전체 샷시 길이

const totalLength = (width * 2) + (height * 2)

// 길이(cm) => ft

const totalFeet = Math.ceil(totalLength / 30.48)

// console.log(totalFeet)

// 가격 계산

const totalPay = totalFeet * perFeet

console.log(`총 ${totalPay} 달러입니다.`)

