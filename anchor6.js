
//1. Melakukan Looping Menggunakan While
console.log('LOOPING PERTAMA')

var i =2;
while ( i <= 20) {
    console.log (i +' '+ '-' + ' ' + 'I love coding');

    i +=2 ;
}


console.log('LOOPING KEDUA')

var j = 20;
while ( j>=0){
    console.log (j +' '+ '-' + ' ' + 'I will become fullstack developer');
    j -= 2;
}



console.log('----------------------------------------')
// 2. Melakukan Looping Menggunakan For
console.log('LOOPING PERTAMA')

for(var i = 1; i <= 20 ; i ++ ){
    console.log (i +' '+ '-' + ' ' + 'I love coding')
}

console.log('LOOPING KEDUA')

for(var j = 20; j >= 1 ; j --){
    console.log (j +' '+ '-' + ' ' + 'I will become fullstack developer');
}

console.log('----------------------------------------')
//3. Angka Ganjil dan Genap
for ( var i=1 ; i <= 100 ; i ++){
    if ( i % 2 ==0 ){
        console.log('GENAP');
    }
    else {
        console.log('GANJIL');
    }
    
}

console.log('----------------------------------------')
// Pertambahan counter 2
for ( var j=1; j <= 100; j += 2){
    if ( j % 3 == 0){
        console.log(j + ' ' + 'Kelipatan 3');
    }
    else {
    }
}
console.log('----------------------------------------')
// Pertambahan counter 5
for ( var k=1; k <= 100; k += 5){
    if ( k % 6 == 0){
        console.log(k + ' ' + 'Kelipatan 6');
    }
    else {
    }
}
console.log('----------------------------------------')
// Pertambahan counter 9
for ( var l=1; l <= 100; l += 9){
    if ( l % 10 == 0){
        console.log( l + ' ' + 'Kelipatan 10');
    }
    else {
    }
}
