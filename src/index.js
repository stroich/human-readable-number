module.exports = function toReadable (number) {
    const numbers =['zero','one', 'two','three', 'four','five','six','seven','eight', 'nine','ten',
        'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    const  numbersMultiples = ['hundred','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety','one hundred']
    if (number<20){
        return numbers[number]
    }else if (number>=20&&number<=100){
        if (number%10===0){
            return numbersMultiples[number/10]
        }else{
            const arrNumber = String(number).split("").map(element=>+element)
            return (`${numbersMultiples[arrNumber[0]]} ${numbers[arrNumber[1]]}`)

        }
    }else {
        const arrNumber = String(number).split("").map(element=>+element)
        if (number%10===0 && number%100!==0){
            return (`${numbers[arrNumber[0]]} ${numbersMultiples[0]} ${numbersMultiples[arrNumber[1]]}`)
        }else if (number%100===0){
            return (`${numbers[arrNumber[0]]} ${numbersMultiples[0]}`)
        }else if (arrNumber[1]===1){
            return (`${numbers[arrNumber[0]]} ${numbersMultiples[0]} ${numbers[number-(arrNumber[0]*100)]}`)
        }else if(arrNumber[1]===0){
            return (`${numbers[arrNumber[0]]} ${numbersMultiples[0]} ${numbers[arrNumber[2]]}`)
        }
        else{
            return (`${numbers[arrNumber[0]]} ${numbersMultiples[0]} ${numbersMultiples[arrNumber[1]]} ${numbers[arrNumber[2]]}`)
        }
    }

}
