/'use strict';
let result = 0;
let name1 = prompt('enter your name please');
alert('you are wilcome ' + name1);

let name2 = prompt('Is my name Mohammad?');
switch (name2.toUpperCase()) {
  case 'YES':
  case 'Y':
    result = result + 1;
    alert('whak about you ?');
    console.log(name2);
    break;
  case 'NO':
  case 'N':
    alert('nice try !!!');
    console.log(name2);
    break;
}

let size = prompt('Am I to Short?');
switch (size.toUpperCase()) {
  case 'YES':
  case 'Y':

    alert('Wrong');
    console.log(size);
    break;
  case 'NO':
  case 'N':
    result = result + 1;
    alert('You guessed it');
    console.log(size);
    break;
}

let major = prompt('Is my major software engineering?');
switch (major.toLowerCase()) {
  case 'yes':
  case 'y':
    result = result + 1;
    alert('It is Correct !');
    console.log(major);
    break;
  case 'no':
  case 'n':
    alert('Try Again!!');
    console.log(major);
    break;
}



let talent = prompt('Do I  singer?');
switch (talent.toLowerCase()) {
  case 'yes':
  case 'y':
    result = result + 1;
    alert('Let is sing !!!');
    console.log(talent);
    break;
  case 'no':
  case 'n':
    alert('Wrong choice !!!');
    console.log(talent);
    break;
}



let car = prompt('Is my car type American ?');
switch (car.toLowerCase()) {
  case 'yes':
  case 'y':
    alert('Did you like it ?');
    console.log(car);
    break;
  case 'no':
  case 'n':
    result = result + 1;
    alert('NOOOO!');
    console.log(car);
    break;
  default:
    console.log('default');
    alert('you lost 1 mark');

}

alert('You have 4 guesses, guess from 1-100');

let answer = 80;
let guess = prompt('what is my wight ?');

for (let i = 0; i < 4; i++) {
  
  if (answer === Number(guess)) 
  {
    alert('Your guess is true');
    result = result + 1;
    break;
    
  } else if (guess > answer){
    guess = prompt('you are very hight    Try Again');
    }
    else if (guess < answer){
    guess = prompt('you are very low    Try Again');
    
    }
  console.log(i);
  if (i=4){
  alert('you are false and this is true answer'+answer);

  }
  }


let mymove = ['lost', 'no string attached', 'cast away', '22 july', 'journey', 'jungle', 'fast furious', 'the notebook', 'rust creek', 'bloodsh'];


for (let a = 0; a < 6; a++) {
  let move = prompt('can you guess any of my  moves? \n you have (' + (6 - a) + ') attempit');

  for (let i = 0; i < mymove.length; i++) {
    if (move.toLowerCase() === mymove[i]) {
      result = result + 1;
      alert('you gused it ');
      console.log('hello');
      i = mymove.length;
      a = 6;
    }
  }

}


let allmove;
for (let i = 0; i < mymove.length; i++) {
  allmove = allmove + '\n' + mymove[i];

}
alert('my move are \n' + allmove);
alert('this is your mark   ( ' + result + ' )');

