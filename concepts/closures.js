
//create a closure
function outerFunc(outer){
    console.log(outer);
    return function innerFunc(inner) {
        console.log(inner)
        console.log(`but i have access to the ${outer}`)
    }
}

const outerVar = outerFunc("I am the outer Func");
const innerVar = outerVar('I am the inner Func:');
innerVar;

//create currying
function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

const firstNum = add(1);
const secondNum = firstNum(2);
const thirdNum = secondNum(3);
console.log(thirdNum)

//create partial application in es6
const partialyApply = (funcName, ...someArgs) => {
    return (...moreArgs) => {
        return funcName(...someArgs, ...moreArgs);
    }
}

let sum = (a, b ,c) => a + b + c;
const add10 = partialyApply(sum, 10);
const result = add10(12, 13);
console.log(result);