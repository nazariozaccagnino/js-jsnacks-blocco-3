//snack 1

// let numbers = [];
// let i = 0;

// while(i < 50){
//     let userNumber = parseInt(prompt('Inserisci un numero'));
//     numbers.push(userNumber)
//     i += userNumber
    
//     console.log(userNumber)    
//  i++
// }
// console.log(numbers, 'array')


//snack 2
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let n = parseInt(prompt('Inserisci un numero'));

function createArrays(){
    let numbers = getRndInteger(1, 100);
    let empty = [];
    empty.push(numbers);
    

}