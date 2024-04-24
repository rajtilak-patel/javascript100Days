// find the longest string 

let str = "This is my first javascript project and is 100 days challenge";

function findlongestString(str){
   let data = str.split(" ").sort((a,b)=>{
      return b.length-a.length;
   });
   return data.at(0);
}
console.log(findlongestString(str));