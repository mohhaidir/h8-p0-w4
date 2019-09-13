// ==== Logic Challenge - Naik Angkot ====

/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. 
Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    let asal = 0
    let tujuan = 0
    let ongkos = 0
    let output = []

    for (let i = 0; i < arrPenumpang.length; i++) {
        for (let j = 0; j < rute.length; j++) {
            if (arrPenumpang[i][1] == rute[j]) {
                asal = j
            } else if (arrPenumpang[i][2] == rute[j]) {
                tujuan = j
            }
        }
        ongkos = (tujuan - asal) * 2000
        // console.log(tujuan)
        // console.log(asal)
        var obj = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: ongkos
        }
        output.push(obj)
    }
    return output
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]