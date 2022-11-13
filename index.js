/*Level #3 Constrcting arrays whit subarrrays (video #17)

let biger = [];
let extctr = 1
for(let i = 0; i < 3; i++){
  let little = [];
  for(let j = 0; j < 3; j++){
    little.push(extctr);
    extctr++;
    console.log(little);
  }
  biger.push(little);
}
____________________________________________________________
  
Level #3 functions (video #19)

function somar(){
  let x = 3;
  let y = 5;
  console.log(x+y);
}
somar();

function sum(){
  let a=2;
  let b=5;
  return a+b;
}
let ret = sum();
console.log(ret)

function soma(a, b){
  console.log(a+b);
}
soma(8, 18);
soma(2, 9);

function juice(ingre_1, ingre_2, ingre_3){
  console.log("My juice has,", ingre_1,",", ingre_2, "and", ingre_3, ",Nice juice!")
}
juice('laranja', 'maçã', 'pera');
juice('laranja', 'pera');
______________________________________________________________

Level #3 Return functions output (video #21)

function ret(k, f){
  return k * f;
}
let result = ret(20, 10);
let moreresult = ret(20, 10) + ret(10, 10);

console.log(result);
console.log(moreresult);
_____________________________________________________________

Level #3 Reverse and translate arrays (video #23)

function reverse(arr){
  let output = [];
  for(let i = arr.length -1; i >= 0; i--){
    output.push(arr[i]);
}
    return output;
}

let result = reverse([1,2,3,4,5,6,9,7,8]);
console.log(result);

function binary(ary){
  let output = [];
   for(let i = 0; i < ary.length; i++){
     if(ary[1] === 1){
       output.push('one');
     }
     if(ary[i] === 0){
       output.push('zero');
    }
   } 
   return output
}

let ring = binary([0,1,1,0,0,1]);
console.log(ring);*/
