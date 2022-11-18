/*Level #4 Where do I belong (Video 21)

function getIndexToIns(arr, num) {
  let blong = 0;
      for(let i = 0; i < arr.length; i++){
      if(arr[i] < num ){
        blong ++;
      console.log(blong);
      }
      }
  return blong;
}

getIndexToIns([40, 60], 50);
___________________________________________________________
Level #4 splits array (Video 24)

function chunkArrayInGroups(arr, size) {
  let spl = [];
  let min = [];
  let max = 0;
  for(let i = 0; i < arr.length; i++){
    if(max === 0);{
    max = 0;
    min = [];
  }
    min.push(arr[i]);
    console.log(max, min);
    max ++;
  }
return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

function chunk(arr, size){
  let spl = [];
  let max = [];
  let min = 0;
  for (let i = 0; i < arr.length; i++){
    if(min === size){
      min = 0;
      spl.push(max);
      max = [];
    }
    max.push(arr[i])
      
      min ++;
  }
  spl.push(max);
  console.log(spl);
  return arr;
}

chunk(["a", "b", "c", "d", "e", "f", "g", "h", "i"], 3);*/

























