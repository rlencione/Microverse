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
Level 4 Seek and destroy (Video 31)*/

function destroy(arr){
  let input = arguments[0];
  let output = [];
  let destroyer = [];

  
  for(let i = 0; i < arguments.length; i++){
    destroyer.push(arguments[i]);
     
  }
  console.log(destroyer);
  for(let i = 0; i < input.length; i++){
    if(destroyer.includes (input[i]) === false){
        output.push()
    } 
  }
  return arr;
}

destroy([1,2,3,1,2,3], 2,3,5,5,2);