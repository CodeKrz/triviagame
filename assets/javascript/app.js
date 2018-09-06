var currenttime = 60
var total = 0
$('input').click(function() {
    if(total === 3) {
        lose();
    }
})


$("#right1").click(function(){
total++
    alert("guessright")
    $(".wrong1").prop('disabled', 'true')
    $("#right1").prop('disabled', 'true')
})
$(".wrong1").click(function(){
    total++
    alert("guesswrong")
    $(".wrong1").prop('disabled', 'true')
    $("#right1").prop('disabled', 'true')
})
$("#right2").click(function(){
    total++
    alert("guessright")
    $(".wrong2").prop('disabled', 'true')
    $("#right2").prop('disabled', 'true')
})
$(".wrong2").click(function(){
    total++
    alert("guesswrong")
    $(".wrong2").prop('disabled', 'true')
    $("#right2").prop('disabled', 'true')
})
$("#right3").click(function(){
    total++
    alert("guessright")
    $(".wrong3").prop('disabled', 'true')
    $("#right3").prop('disabled', 'true')
})
$(".wrong3").click(function(){
    total++
    alert("guesswrong")
    $(".wrong3").prop('disabled', 'true')
    $("#right3").prop('disabled', 'true')
})
var interval = setInterval(time, 1000)
function time(){
    if(time === 0){
        lose()
    }
    currenttime-- 
    $('#timer').text(currenttime)








}
function lose(){alert('you lose')
    
} 