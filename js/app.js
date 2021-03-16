'use strict';

let name1 = prompt('enter your name please');
alert ('you are wilcome '+name1);

let name2 = prompt('Is my name Mohammad?');
switch (name2.toUpperCase())
{
case 'YES':
case 'Y':
  alert('whak about you ?');
  console.log(name2);
  break;
case 'NO':
case 'N':
  alert('nice try !!!');
  console.log(name2);
  break;
}

let  size = prompt('Am I to Short?');
switch (size.toUpperCase())
{
case 'YES':
case 'Y':
  alert('Wrong');
  console.log(size);
  break;
case 'NO':
case 'N':
  alert('You guessed it');
  console.log(size);
  break;
}

let major = prompt('Is my major software engineering?');
switch (major.toLowerCase())
{
case 'yes':
case 'y':  
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
switch (talent.toLowerCase())
{
case 'yes':
case 'y':
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
switch (car.toLowerCase())
{
case 'yes':
case 'y':
  alert('Did you like it ?');
  console.log(car);
  break;
case 'no':
case 'n':
  alert('NOOOO!');
  console.log(car);
  break;
default:
  console.log('default');
  alert('default');
} 