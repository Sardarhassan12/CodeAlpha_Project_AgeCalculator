let typed = new Typed(".auto-type", {
    strings : ["Days", "Months", "Years"],
    typeSpeed : 250,
    backSpeed : 250,
    loop : true
})
function checkCurrentDate(){
    const currentDateInput= new Date();
    const cDate = currentDateInput.getDate();
    const cMonth = currentDateInput.getMonth()+1;
    const cYear = currentDateInput.getFullYear(); 
    return{
        currentDate : cDate,
        currentMonth : cMonth,
        currentYear : cYear,
        fullCdate : currentDateInput
    } 
}


function checkBirthDate(){
    let selectedDate = document.querySelector("#selected-date");
    const birthDateInput= new Date(selectedDate.value);
    const bDate = birthDateInput.getDate();
    const bMonth = birthDateInput.getMonth()+1;
    const bYear = birthDateInput.getFullYear();
    return{
        birthDate : bDate,
        birthMonth : bMonth,
        birthYear : bYear,
        fullBdate : birthDateInput
    }
    
}

function calculate(){
    //Accessing functions
    let {currentDate, currentMonth, currentYear, fullCdate} = checkCurrentDate();
    let {birthDate, birthMonth, birthYear, fullBdate} = checkBirthDate();
    if(fullBdate > fullCdate){
        alert("please Enter right date");
        location.reload(); 
        return;
    }
    console.log(currentDate, currentMonth, currentYear);
    console.log(birthDate, birthMonth, birthYear);

    let yearDisplay = document.getElementById("year-display-area");
    let monthDisplay = document.getElementById("month-display-area");
    let dateDisplay = document.getElementById("day-display-area");

    let yearDifference = currentYear - birthYear;
    let dateDiff = 0;
    let monthDiff = 0;
    
    //First Condition    
    if(currentMonth < birthMonth){
        //calculating month & year
        yearDifference = yearDifference-1;
        monthDiff = (12-(birthMonth - currentMonth));
        
        if(currentDate < birthDate){
            //calculating date & month
            monthDiff = monthDiff - 1;
            dateDiff = 30-(birthDate - currentDate); 

        }else if(currentDate > birthDate){ 
            //calculating date & month
            dateDiff = currentDate - birthDate;

        }
    }
     //Second Condition    
    else if(currentMonth > birthMonth){
            //calculating month & year
            monthDiff = currentMonth- birthMonth;
            yearDifference = yearDifference;

            if(currentDate < birthDate){
                //calculating date & month
                monthDiff = monthDiff - 1;
                dateDiff = 30-(birthDate - currentDate);
                
            }else if(currentDate > birthDate){
                //calculating date & month
                dateDiff= currentDate - birthDate;
                
            }
    }
    else{
        if(currentDate < birthDate){
            //calculating date
            dateDiff = 30-(birthDate - currentDate);
            
        }else if(currentDate > birthDate){
            //calculating date
            dateDiff= currentDate - birthDate;
            
        }
    }
    
    //displaying year & date & month
    yearDisplay.innerHTML = yearDifference;
    monthDisplay.innerHTML = monthDiff;
    dateDisplay.innerHTML = dateDiff;
   
}
