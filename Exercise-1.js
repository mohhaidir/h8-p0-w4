// ==== Logic Challenge - Angka Prima ====

/*
Diberikan sebuah function angkaPrima(angka) yang menerima satu parameter berupa angka. 
Function akan me-return true jika angka tersebut adalah bilangan prima. 
Jika tidak, return false.
*/

function angkaPrima(angka) {
    let numb = angka
    let result = true

    if(angka < 2){
        return false
    } else {
        for(let i = 2; i < angka; i++){
            if(numb%i == 0){
                result = false
                break
            }
        }
    }
    return result
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false