//STEP 1
let enterName = prompt("Please enter your name");
alert("Your Name Has " + enterName.length + " Letters");

//STEP 2
let enterYourName = prompt("Please enter your name");
let pickANumber = prompt("Pick a number dependet on the letters in your name");
alert("The Number You Picked Is the Letter: " + enterYourName.charAt(pickANumber)); 

//STEP 3
let yourFirstName = prompt("Please Enter Your First Name");
let yourLastName = prompt("Please Enter Your Last Name");
alert("Your Name is: " + yourFirstName.concat(yourLastName)); 

//STEP 4
let sayingDog = "The quick brown fox jumps over the lazy dog";
alert('The Index For The Word Fox is: ' + sayingDog.indexOf('fox')); 

//STEP 5
let sayingFox = "The quick brown fox jumps over the lazy fox";
alert('The Index For The Word Fox is: ' + sayingFox.lastIndexOf('fox')); 

//STEP 6
let sayingReplace = "The quick brown fox jumped over the lazy dog";
let userName = prompt("Please Enter Your First Name");
alert(sayingReplace.replace("the lazy dog", userName));

//STEP 7
let sayingSearch = "The quick brown fox jumped over the lazy dog";
let enterAWord = prompt("Enter A Word");
alert(sayingSearch.search(enterAWord));

//STEP 8
let old_string = "The quick brown fox jumped over the lazy dog";
let new_string = old_string.slice(32,44);
alert(new_string);

//STEP 9
let sayingUpperCase = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
let sayingWithoutSpace = sayingUpperCase.trim();
alert(sayingWithoutSpace.toLowerCase()); 

//STEP 10
let capFirstLetter = "the quick brown fox jumps over the lazy dog";
alert(capFirstLetter.charAt(0).toUpperCase() + capFirstLetter.slice(1)); 

