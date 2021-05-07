const newArr = [];
function writeCards(names, event){
    for (let i = 0; i < names.length; i++){
        newArr.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return newArr;
}

function countDown(number = 10){
    while (number >= 0){
        console.log(number--);
    }
    countDown;
}