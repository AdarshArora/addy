// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
// var roster = []
var roster = []

// Create the functions for the tasks



// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array
  function addNew(){
    var name = prompt('What name would you like to add?')
    roster.push(name)
  }

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http:stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//
  function remove(){
    var name = prompt('Which name would you like to remove?')
    index = roster.indexOf(name);
    roster.splice(index,1);


  }

// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.
  function display(){
    console.log(roster);
  }

// Start by asking if they want to use the web app
var response = prompt('Would you like to use the roster web app: y/n?');
  if(response == 'n'){

    alert('You are not using the web app, thanks!');

  }

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
var option = prompt('Choose an operation to perform among: add, remove, display, quit')
while(option!=='quit'){
  if(option == 'add')
    addNew()
  if(option == 'remove')
    remove()
  if(option == 'display')
  display()

  var option = prompt('Choose an operation to perform among: add, remove, display, quit')
}



// Use if and else if statements to execute the correct function for each command.
