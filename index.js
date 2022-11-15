/*Level #4 Truncate a string (Video 17)*/


function truncateString(str, num) {
  let trunk = str.substring(0, num);
  if(num < str.length){
    trunk +="...";
    return trunk;
  }else{
    return str;
  }
  
}
  //for(let i = 1; i < str.length; i ++);
    
let result = truncateString("A-tisket a-tasket A green and yellow basket", 8);

console.log(result);

