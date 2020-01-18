// ==== Logic Challenge - Mengurutkan Abjad ====

/*
Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter berupa string. 
Function tersebut akan mengembalikan string baru yang telah diubah urutan abjadnya dari a hingga z. 
Contohnya, halo akan menjadi ahlo. 
Kamu tidak perlu memikirkan apabila ada simbol ataupun angka didalam string tersebut.
*/

// - Cara Cepat -

function urutkanAbjad(str) {
    return str = str.split('').sort().join('')
}

// - Cara Manual -

function urutkanAbjad(str) {
    let abc = 'abcdefghijklmnopqrstuvwxyz'

    let temp = ''
    for (let i = 0; i < abc.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (abc[i] == str[j]) {
                temp += abc[i]
            }
        }
    }
    return temp
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'