/*Level 4 Sum all numbers in a range (Video 27)

function sumAll(arr) {
  let menor = arr[0];
  let maior = arr[1];
  let sol = 0;
  
  if(menor > maior){
  menor = arr[1];
  maior = arr[0];
  }   
  
  for (let i = menor; i <= maior; i ++){
    sol += i;
  }
  return sol;
}

let result = sumAll([5, 10]);
console.log(result);
______________________________________________________________________
Level 4 Seek and destroy (Video 31)
function destroy(arr){
  let input = arguments[0];
  let output = [];
  let destroyer = [];

  
  for(let i = 1; i < arguments.length; i++){
    destroyer.push(arguments[i]);
     
  }
 //console.log(destroyer);
  
  for(let i = 0; i < input.length; i++){
    if(destroyer.includes (input[i]) === false){
        output.push(input[i]);
      
    } 
  console.log(destroyer);
    console.log(input[i]);
  }
  return output;
}

let causo = destroy([1,2,3,8, 9, 1,2,3], 2,3,5,5,2);
console.log(causo);
_______________________________________________________________
Level 4 Pig Latin Hint (Video 36)

function translatePig(str){
  let cons =["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","x","y","z"];
  let vog = ["a","e","i","o","u"];
  let wrd = str.split([""]);
  
  for(let i = 0; i < str.length; i++){
    
  }
  console.log(wrd.length);
  return str;
}

translatePig("sardinha");
__________________________________________________________________________
Level level6 day 1 video 3

function getSecondLargest(nums){
  let size = nums.length;
  let sec = nums[0];
  for(let i = 0; i < size; i++){
    if(nums[i] > sec)
      sec = nums[i]; 
  }
  let secMin = nums[0];
  for(let i = 0; i < size; i++){
    if(nums[i] > secMin && nums[i] < sec)
      secMin = nums[i];
  }
  return secMin;
}


let result = getSecondLargest([2,3,6,6,5]);
console.log(result);
_____________________________________________________________________
Level level6 day 1 video 4
function vowelsAndConsonants(s){
  let cons=["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","x","y","z"];
  let vog = ["a","e","i","o","u"];
  let vowel = "";
  let con = "";
  let wrd = s.split([""]);
  for(let i = 0; i < wrd.length; i++){
  if(vog.includes(wrd[i])){
    vowel = (wrd[i]);
    console.log(vowel);
  }
  }
    for(let i = 0; i < wrd.length; i++){    if(cons.includes(wrd[i])){
    con = (wrd[i]);
    console.log(con);
  }
}
}
let letter = vowelsAndConsonants("javascriptloops");
_____________________________________________________________
Level level6 day 1 video 5*/















