// ==== Logic Challenge - Faktor Persekutuan Terbesar ====

/*
Diberikan sebuah function fpb(angka1, angka2) yang menerima dua parameter angka. 
Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar). 
FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut.
*/

function fpb(angka1, angka2) {
    let temp1 = []
    let temp2 = []
    let result = []
    let finalResult = []

    for (let i = 0; i < angka1; i++) {
        if (angka1 % i == 0) {
            temp1.push(i)
        }
    }

    for (let j = 0; j < angka2; j++) {
        if (angka2 % j == 0) {
            temp2.push(j)
        }
    }

    for (let k = 0; k < temp1.length; k++) {
        for (let l = 0; l < temp2.length; l++) {
            if (temp1[k] == temp2[l]) {
                result.push(temp1[k])
            }
        }
    }

    for (let m = 0; m < result.length; m++) {
        if (temp1[m] > temp2[m]) {
            finalResult = result[m]
        } else {
            finalResult = result[m]
        }
    }
    return finalResult
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1