$(document).ready(function(){

       setInterval(() => {
        var currentTime = moment ().format("dddd, MMMM Do YYYY, h:mm:ss a");
       $("#currentDay").text((currentTime), 1000);
