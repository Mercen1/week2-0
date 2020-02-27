// Logic Challenge - Balik Kata

function balikKata(kata) {
  var a='';
for(var b = kata.length-1; b >=0 ; b--){
      a = a + kata[b]; 
}
return a;

}
  
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); 
  console.log(balikKata('John Doe')); 
  console.log(balikKata('I am a bookworm'));
  console.log(balikKata('Coding is my hobby')); 
  console.log(balikKata('Super')); 