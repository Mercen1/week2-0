//Logic Challenge - Konversi Menit

function konversiMenit(menit) {
    var a = menit /60 ;
    c= menit % 60;

  if( menit >= 60){
      b = Math.floor(a) ;
  }
  else if ( menit < 60 ){
      b = 0;
  }

  if(String(c).length === 1){
      c = '0'+ c;
  }
  else{
      c=c;
  }
  

  return b+':'+c;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00