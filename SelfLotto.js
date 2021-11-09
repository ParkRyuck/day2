

const brr = []

while (true) {

    //숫자를 생성 1 - 60 사이의 숫자
    const num = parseInt(Math.random() * 60) + 1
    console.log(num)

    //검사
    const index = brr.indexOf(num)

    console.log(`NUM: ${num}     INDEX: ${index}`)

    if(index >= 0) {
        continue
    }

    const newlength = brr.push(num)


    if(newlength === 6) {
        break
    }
}

    console.log(brr)

console.log("---------------------------------------")

const brr2 = []

for (let i = 1; i <= 60 ; i++) {

    brr2.push(i)

}

for (let i = 0; i < 6; i++) {



}