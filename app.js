num = 0;
var htmlNum = document.getElementById("output-num")

function incrementOperator(){
    num++
    htmlNum.innerHTML = num
}
function decrementOperator(){
   num--
   htmlNum.innerHTML = num
}

function resetOperator(){
    num = 0;
    htmlNum.innerHTML = num
}