function xo(str) {
    var X= '';
    var a = str.length;
    var x=0;
    var o=0;
    for( var i=0; i<=a-1; i++){
        X =str[i];
        if (X==='x'){
            x++;
        }
        else if (X==='o'){
            o++;
        }
    }
    return x===o;
  }

  // TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true