let value1;
let value2;
let opertor;
console.log(opertor)
function calculate(firstV, secondV, opertorS) {
    if(opertorS === "+") {
    return firstV + secondV
    } else if (opertorS === "-") {
    return firstV - secondV
    } else if (opertorS === "X") {
    return firstV * secondV
    } else if (opertorS === "/") {
    return firstV / secondV
    } 
}

const nums = document.querySelectorAll(".num")

nums.forEach(num => {num.addEventListener("click", () => {
    
    if(value1 !== undefined && opertor === undefined) {
        value1 = String(value1) + String(event.target.innerText)
    }
    if(value1 === undefined && opertor === undefined) {
        value1 = event.target.innerText
    }
    console.log(value1)
})})