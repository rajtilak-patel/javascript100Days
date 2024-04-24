// create #tag string using javascript example #MyNameIsRajtilak

let str = "my name is rajtilak patel"

function generateHash(str){
    let data = str.split(" ").map((value)=>value.replace(value[0],value[0].toUpperCase())).join("");

    let value = str.split(" ").map((value)=>value.charAt(0).toUpperCase() + value.slice(1)).join("");
    console.log('#'+value)
    return `#${data}`;

}
console.log(generateHash(str)) ;