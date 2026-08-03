const params = new URLSearchParams(window.location.search);

const name = params.get("name");
const price = params.get("price");
const image = params.get("image");

document.getElementById("productName").innerText = name;
document.getElementById("productPrice").innerText = "₹" + price;
document.getElementById("productImage").src = image;

document.getElementById("buyBtn").onclick = function(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let item = cart.find(p => p.name === name);

    if(item){
        item.quantity++;
    }else{
        cart.push({
            name,
            price: Number(price),
            quantity:1
        });
    }

    localStorage.setItem("cart",JSON.stringify(cart));

    alert("Added to Cart!");

};