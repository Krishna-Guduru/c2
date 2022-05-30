// On clicking remove button the item should be removed from DOM as well as localstorage.
let cart=JSON.parse(localStorage.getItem("coffee"))||[]
console.log(cart)
cart.map(function (menu,el,index){
    let box=document.createElement("div")
    let image=document.createElement("img")
    image.src=menu.image
    let price=document.createElement("p")
    price.innerText=menu.price
    let btn1=document.createElement("button")
    btn1.innerText="remove"
    btn1.setAttribute="id","remove_coffee"
    btn1.addEventListener("click",function(){
remove(menu,el,index)
    })
    box.append(image,price,btn1)
    document.getElementById("bucket").append(box)
})
function remove(menu,el,index){
    cart.splice(index,1)
        localStorage.setItem("coffee",JSON.stringify(cart))
        window.location.reload()
        
}
