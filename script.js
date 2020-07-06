$(document).ready(function(){

       setInterval(() => {
        var currentTime = moment ().format("dddd, MMMM Do YYYY, h:mm:ss a");
       $("#currentDay").text((currentTime), 1000);
       });
       
       setTimeout(()=>{
       var timeblocks= moment.duration().asHours(9,10,11,12,13,14,15,16,17);
       $("#timeblocks").text((timeblocks));
       });









});
