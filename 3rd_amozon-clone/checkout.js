let cart = JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

cart.forEach(item => {

    total += item.price * item.quantity;

});

document.getElementById("checkoutTotal").innerText = total;

document
.getElementById("checkoutForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("🎉 Order Placed Successfully!");

    localStorage.removeItem("cart");

    window.location.href="index.html";

});