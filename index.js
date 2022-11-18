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
console.log(result);*/