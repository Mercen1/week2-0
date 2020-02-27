
//1. Menyusun Barisan Bintang

var row1 =5;

for( var i = 1  ; i <= row1; i++ ) {

    var star = '*'
    console.log(star) ;
}


console.log( '----------------------------------------------' )
// 2. Menyusun Barisan Bintang Dengan Nested Looping

var row2 = 5;

for( var i = 1  ; i <= row2; i++ ) {

    var star = ''
    for ( j=1 ; j <= row2 ; j++ ){
        star += '*';
    }

    
    console.log(star) ;
}

console.log( '----------------------------------------------' )
// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var row3 = 5;

for (var i = row3; i >=1; i--) {
	var star = '';

	for (var j = i; j <= row3; j++) {
		star +='*'
	}
	console.log(star);
}

