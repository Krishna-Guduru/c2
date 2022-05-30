// 0 seconds : Your order is accepted 
// 3 seconds : Your order is being Prepared 
// 8 seconds : Your order is being packed  
// 10 seconds : Your order is out for delivery 
// 12 seconds : Order delivered



document.querySelector("button").addEventListener("click",alert)
function alert(e){
    event.preventDefault(e)
    console.log(alert("your order is accepted"))
}
    setTimeout(function(){
        alert("Your order is accepted")
    },3000)
    setTimeout(function(){
        alert("Your order is being packed")
    },8000)
    setTimeout(function(){
        alert("Your order is out for delivery")
    },10000)
    setTimeout(function(){
        alert("Order delivered")
    },12000)


