$(document).ready(function(){
    setInterval(() => {
        var currentTime = moment ().format("dddd, MMMM Do YYYY, h:mm:ss a");
       $("#currentDay").text((currentTime), 1000);
       });
    
    $(".saveBtn").on("click",function(){
        var textInput= $(this).siblings(".description").val();
        console.log(textInput);
        var time= $(this).parent().attr("id");
        
        localStorage.setItem(time,textInput);
        event.preventDefault();
    })
    //this creates the function of being able to compare the time of the current spot on the calendar to the actual time. This will allow the color blocks
    function colorHour(){
        //getting our current number of hours through moment. js
        var currentHour= moment ().hour();
        $(".time-block").each(function(){
            //for each time block we are going to do this: 
            var hourBlock= parseInt($(this).attr("id").split("-"));//this will give the id of the hour block
            if (hourBlock < currentHour){
                $(this).addClass("past");
            } else if (hourBlock === currentHour){
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }//calling colorHour
        colorHour();

    //set up an interval to check if the time needs to be updated
    var interval= setInterval(colorHour,30000);

        //loading any saved data from local storage 
        //targeting ID if 9AM and specifically the items in description of 9 AM
        //when building out rest of time use this but with the correct time
       $("#9AM .description").val(localStorage.getItem("9AM"));
       $("#10AM .description").val(localStorage.getItem("10AM"));
       $("#11AM .description").val(localStorage.getItem("11AM"));
       $("#12PM .description").val(localStorage.getItem("12PM"));
       $("#1PM .description").val(localStorage.getItem("1PM"));
       $("#2PM .description").val(localStorage.getItem("2PM"));
       $("#3PM .description").val(localStorage.getItem("3PM"));
       $("#4PM .description").val(localStorage.getItem("4PM"));
       $("#5PM .description").val(localStorage.getItem("5PM"));
         
});

