// ==== Logic Challenge - Digit Perkalian Minimum ====

/*
Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. 
Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut, 
Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. 
Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.
*/

function digitPerkalianMinimum(angka) {
    let temp = ''
    let result = []

    for (let i = 0; i <= angka; i++) {
        if (angka % i == 0) {
            temp += i
            temp += angka / i
            result.push(Number(temp))
        }
        temp = ''
    }

    // <--- sort manual --->
    
    for (let j = 0; j < result.length; j++) {
        for (let k = j + 1; k < result.length; k++) {
            if (result[j] > result[k]) {
                let tempSementara = result[j]
                result[j] = result[k]
                result[k] = tempSementara
            }
        }
    }
    return String(result[0]).length
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2