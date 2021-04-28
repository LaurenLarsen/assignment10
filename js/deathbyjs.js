//STEP 1
function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order("Lauren")); 

//STEP 2
function uppercase(str)
{
  let array = str.split(' ');
  let newArray = [];
    
  for(var x = 0; x < array.length; x++){
    newArray.push(array[x].charAt(0).toUpperCase()+array[x].slice(1));
  }
  return newArray.join(' ');
}
console.log(uppercase("the cow jumped over the moon")); 

//STEP 3
function vowelCount(str1)
{
  let vowelList = 'aeiouAEIOU';
  let countVowels = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowelList.indexOf(str1[x]) !== -1)
    {
        countVowels += 1;
    }
  
  }
  return countVowels;
}
console.log(vowelCount("the cow jumped over the moon")); 

//STEP 4
function randomString(X)
{
let words = "";
let letterList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for(let i=0; i < X; i++ )
{  
words += letterList.charAt(Math.floor(Math.random() * letterList.length));
}
return words;
}
console.log(randomString(22)); 

//STEP 5
function longestName(countryName)
  {
  return countryName.reduce(function(lname, country) 
  {
    return lname.length > country.length ? lname : country;
  }, 
"");
}
console.log(longestName([ "Belize", "Egypt", "France", "Japan"]));
