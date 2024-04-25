//letter count problem
let str = "masaiSchooliIIsGreattoLearnCOding";
let char = "M";
const letterCount = (str,char)=>{

     str = str.toLowerCase();
     char = char.toLowerCase()

     let data = str.split("").reduce((acc,curr)=>{
        if(curr == char){
            acc++;
        }
        return acc;
        },0)
  return data;
}

console.log(letterCount(str,char));