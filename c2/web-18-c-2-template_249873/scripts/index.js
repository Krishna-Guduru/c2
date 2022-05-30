// Add the coffee to local storage with key "coffee"
let url="https://masai-mock-api.herokuapp.com/coffee/menu"

function coffee(){
    fetch(url)
    .then(function(res){                
        return res.json()   
    })
    .then(function(res){

        let x=(res.menu.data)

        var coffee=JSON.parse(localStorage.getItem("coffee"))||[]
        coffee.push("coffeelist")


        var coffeelist= localStorage.setItem("coffee", JSON.stringify(x))
        coffee.forEach(function(elem){


        let box1=document.createElement("div")


        let img=document.createElement("img")
        img.src=elem.image


        let price=document.createElement("p")
        price.innerText=elem.price


        let btn=document.createElement("button")
        btn.innerText="add_to_bucket"
        btn.setAttribute="id","add_to_bucket"


        btn.addEventListener("click",function(){
            myfunction(menu)

        })
        box1.append(img,price,btn)
        document.getElementById("menu").append(box1)
        })     
        
         })
         function  myfunction(el){
             
         }
 }


 coffee()
