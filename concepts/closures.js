
//create a closure
function outerFunc(outer){
    console.log(outer);
    return function innerFunc(inner) {
        console.log(inner)
        console.log(`but i have access to the ${outer}`)
    }
}

const outerVar = outerFunc("Outer Func");
const innerVar = outerVar('Inner');
innerVar;

//create currying

//create partial application