// Part 6 - Objects Exercise

////////////////////
// PROBLEM 1 //////
//////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  nameLength: function() {
    // var _length = this.name.length()
    console.log('Length of employees name is: '+this.name.length+' '+this.name);
     },
  oneLine: function() {
      alert('Name is '+this.name+', Job is '+this.job+', Age is '+this.age);
    },
  lastName: function() {
      // var n = this.name.split(' ')[1];

      console.log('last name: '+this.name.split(' ')[1]);
}
}

// Add a method called nameLength that prints out the
// length of the employees name to the console.


///////////////////
// PROBLEM 2 /////
/////////////////

// // Given the object:
// var employee = {
//   name: "John Smith",
//   job: "Programmer",
//   age: 31,
//
//
//   }
// }
//
// // Write program that will create an Alert in the browser of each of the
// // object's values for the key value pairs. For example, it should alert:

// Name is John Smith, Job is Programmer, Age is 31.



///////////////////
// PROBLEM 3 /////
/////////////////

// // Given the object:
// var employee = {
//   name: "John Smith",
//   job: "Programmer",
//   age: 31,
//
//
//
//   }
// }

// Add a method called lastName that prints
// out the employee's last name to the console.

// You will need to figure out how to split a string to an array.
// Hint: http://www.w3schools.com/jsref/jsref_split.asp
