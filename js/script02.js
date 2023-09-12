console.log(11111)
console.log(22222);
console.log(33333);console.log(4444);console.log(5555);
//variable ตัวแปร
var a = 100
let b = 200
console.log(a+b)
//scope Block scope คือขอบเขตการทำงาน
{
    let e = 900
    {
        var c = 300
        let d = 400
        //console.log(a)
       //console.log(b)
       //console.log(c)
        //console.log(d)
    }
    console.log(a)
    console.log(b)
    console.log(c)
    //console.log(d)
}
//console.log(a)
//console.log(b)
//console.log(c)
//console.log(d)

//constant ค่าคงที่
const DATA_A1 = 52
const INF01 = "WOW"
const INF02 = "WO"
console.log(INF01+ '@@@' + INF02)
console.log('SAU\nDTI\t\t2023')
console.log('I LOVE "SAU"')
console.log("I LOVE 'SAU'")
console.log("สวัสดี %s %d",INF01,DATA_A1)

{
    {
        const INF03 = 'Wee'
        console.log(INF03)
    }
    //console.log()
}
//console.log()
//logowindow + alt + 96
console.log('Welcome')
let yname = 'สมชาย'
let year = 2000
let age = 15
console.log('สวัสดี'+ yname + 'คุณเกิดปี' + year + 'อายุ' + age + 'ปี'+ (20*5))

console.log(`สวัสดี ${yname} คุณเกิดปี ${year} อายุ ${age} ปี ${(20*5)}`)

let data = `      Southeast Asia Univercity     `

console.log(data)
console.log(data.length)
console.log(data.trim())
console.log(data.trim().length)
console.log(data.toLocaleUpperCase())
console.log(data.toLocaleLowerCase())
console.log(data.substring(10))


let data2 = `Welcome To`
console.log(data.substring(5))
console.log(data.substring(3, 9))
console.log(data.replace(`To`,`To Thailand`))
console.log(data.replace(`e`,`XXX`))
console.log(data.replaceAll(`e`,`XXX`))


