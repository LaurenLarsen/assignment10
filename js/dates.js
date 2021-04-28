//STEP 1
 let getDaysInMonth = function(month,year) {
   return new Date(year, month, 0).getDate();
  };
  console.log(getDaysInMonth(6, 2019));
  console.log(getDaysInMonth(9, 2020)); 


//STEP 2
let monthName = function(dt){
    monthList = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
      return monthList[dt.getMonth()];
    };
    console.log(monthName(new Date("02/02/2020")));
    console.log(monthName(new Date("06/04/1989")));
//STEP 3
let itIsTheWeekend =  function(date1){
    let dt = new Date(date1);
     
    if(dt.getDay() == 6 || dt.getDay() == 0)
       {
        return "weekend";
        } else {
            return "Not A Weekend";
        }
}
console.log(itIsTheWeekend('June 4, 1989')); 


//STEP 4
let yesterday =  function(date1){
    let dt = new Date(date1);
  return new Date((dt.setDate(dt.getDate()-1))).toString();
}
console.log(yesterday('April 27, 2021')); 


//STEP 5
let dayName = function(dt){
  monthList = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
    return monthList[dt.getMonth()];
  };
  console.log(dayName(new Date("02/02/2020")));
  


  