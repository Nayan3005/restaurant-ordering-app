import { menuArray } from "./data.js";
window.addEventListener('load', render)
const loginForm = document.getElementById('modal')
let addedHtml = ''
let totalHtml = ''
let total = 0
let pizza =0, burger =0, beer =0
document.addEventListener('click', function(e){
    if(e.target.dataset.button){
        handleAddClick(e.target.dataset.button)
    }else if (e.target.dataset.remove){
        handleRemoveClick(e.target.dataset.remove)
    }
    else if (e.target.id === "complete-btn"){
        handleCompleteClick()
    }
})
loginForm.addEventListener('submit', function(e){
    e.preventDefault()
    const loginFormData = new FormData(loginForm)
    const name = loginFormData.get('name')
    handlePayClick(name)
})

// function handleRemoveClick(id){

// }

function handleCompleteClick(){
    modal.style.display = "flex"
}
function handlePayClick(name){
    modal.style.display = 'none'
    console.log(name)
}


function handleAddClick(id){
        menuArray.forEach(function(menu){
            if("food-"+menu.id === id){
                total+=menu.price 
                addedHtml   += `
                <div class = "cart">
                    <div class="cart-left">
                        <h1 class="cart-food-name">${menu.name}</h1>
                        <button data-remove="food-${menu.id}" type="button" id="cart-remove" class="cart-remove">remove</button>
                    </div>
                    <h2 class="cart-food-price">$${menu.price}</h2>
                </div>
                `
            }
        })
    
    totalHtml = `<h1 class="order">Your Order</h1>`+addedHtml+
        `<div class = "total">
            <h1>Total Price: </h1>
            <h1>$${total}</h1>
        </div>
        <div class="complete-order">
            <button id="complete-btn" class="complete-btn">complete order</button>
        </div>
        `
    document.getElementById('cart').innerHTML = totalHtml
    
}

function render(){
    let mainHtml = ''
    menuArray.forEach(function(menu){
       mainHtml+=  `
            <div class="food-main" id=food-${menu.id}>
                <div class="left">
                    <img class="food-img" src="./images/${menu.name}.png"/>
                    <div class="food-about">        
                        <h2>${menu.name}</h2>
                        <p>${menu.ingredients}</p>
                        <h2>$${menu.price}</h2>
                    </div>
                </div>
                <div class="right">
                    <button class="add-btn" data-button="food-${menu.id}" type="button">+</button>
                </div>
            </div>
        `
    })
    document.getElementById("food").innerHTML = mainHtml
}
