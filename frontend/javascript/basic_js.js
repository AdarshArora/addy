var firstName = prompt('Enter your First Name: ');
var lastName = prompt('Enter your Last Name: ');
var age = prompt('Enter Your Age: ');
var height = prompt('Enter Your Height(in cms): ');
var pet = prompt('Enter name of Pet: ');
alert('Thanks for your time!')

var name = null;
// var lname = null;
var agecond = null;
var heightcond = null;
var petcond = null;

if(firstName[0]===lastName[0]){
  name = true;
}
  else {
    name = false;
}

  if(age>20 && age<30){
    agecond = true;
  }
    else {
      agecond = false;
    }

    if(height>=170){
      heightcond = true;
    }
    else {
      heightcond = false;
    }

      if(pet[pet.length-1] ==='y'){
        petcond = true;
      }
      else {
        petcond = false;
      }

if (name && agecond && heightcond && petcond) {
  console.log('Welcome Soldier, you\'re on a mission!!');
}
  else {
      console.log('You are a common man :p');
    }



var dog = 'danny';

console.log(dog[dog.length-1]);
