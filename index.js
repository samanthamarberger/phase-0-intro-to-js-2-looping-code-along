// Code your solutions in this file

const arrayOfThankYou = [];
function writeCards(names, event) {
    for(let i = 0; i < names.length; i++) {
        let thankYou = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        arrayOfThankYou.push(thankYou);
    }
    return arrayOfThankYou;
}

function countDown(integer) {
    while (integer >= 0) {
        console.log(integer);
        integer--;
    }

}