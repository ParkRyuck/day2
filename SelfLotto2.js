

const brr = []

for (let i = 1; i <= 60; i++) {

    brr.push(i)

}

console.log(brr)


for (let i = 0; i < 6; i++) {

    const idx = Math.random() * brr.length
    // 0 ~ 89

    console.log(brr.splice(idx,1))
}


const brr2 = []

while (true) {

    //숫자를 생성 1 - 60 사이의 숫자
    brr2.push(parseInt(Math.random() * 60) + 1)


}
