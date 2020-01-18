// ==== Logic Challenge - Mencari Modus ====

/*
Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. 
Function akan me-return modus dari array atau deret angka tersebut. 
Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. 
Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. 
Jika modus tidak ditemukan, function akan me-return -1. 
Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). 
Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.
*/

function cariModus(arr) {
    let result = []
    let counter = []

    for (let i = 0; i < arr.length; i++) {
        let status = false
        if (result.length == 0) {
            result.push(arr[i])
            counter.push(1)
        } else {
            for (let j = 0; j < result.length; j++) {
                if (arr[i] == result[j]) {
                    status = true
                    counter[j] += 1
                }
            }
            if (status == false) {
                result.push(arr[i])
                counter.push(1)
            }
        }
    }
    for (let k = 0; k < counter.length; k++) {
        for (let l = k + 1; l < counter.length; l++) {
            if (counter[k] < counter[l]) {
                let temp = result[k]
                result[k] = result[l]
                result[l] = temp
            }
        }
    }
    if (result.length == 1) {
        return -1
    } else if (arr.length == counter.length) {
        return -1
    } else {
        return result[0]
    }
}
// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1