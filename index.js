let names = prompt( 'What is your name?').toUpperCase() .trim() 
let age= prompt( 'How old are you?').trim()
let cash = prompt ('How much money you have?')

if (names[0] === 'A' && age >20 && age <=40 && cash >100){
    alert('Welcome')
} else {
    alert ('Godbye see you')
}

// 5


let number = [1, 2, 3, 4, 5, 6] 
let all = +prompt ('how many of you?')
if (number.length + all <=10){
    alert('enter')
} else {
    alert ('come out')
}
