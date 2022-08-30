$(document).ready(function (){
    //entire script
$("#currentDay").text(moment().format("dddd, MMMM Do"))
$('.saveBtn').on("click", function (){
    let value = $(this).siblings(".description").val()
    let time = $(this).parent().attr("id")
    localStorage.setItem(time, value)
})
$('#9 .description').val(localStorage.getItem("9"))
$('#10 .description').val(localStorage.getItem("10"))
$('#11 .description').val(localStorage.getItem("11"))
$('#12 .description').val(localStorage.getItem("12"))
$('#13 .description').val(localStorage.getItem("13"))
$('#14 .description').val(localStorage.getItem("14"))
$('#15 .description').val(localStorage.getItem("15"))
$('#16 .description').val(localStorage.getItem("16"))
$('#17 .description').val(localStorage.getItem("17"))

function checkTime () {
let currentTime = moment().hour()
$(".time-block").each(function (){
    let hour = parseInt ($(this).attr("id"))
    if (hour < currentTime) {
        $(this).removeClass("present")
        $(this).removeClass("future")
        $(this).addClass("past")
    }
    else if (hour === currentTime){
        $(this).removeClass("past")
        $(this).removeClass("future")
        $(this).addClass("present")
    }
    else {
        $(this).removeClass("past")
        $(this).removeClass("present")
        $(this).addClass("future")
    }
})
}

checkTime ()
setInterval(checkTime, 30000)
})