let cart = [];
let total = 0;
function addToCart(name, price){

    cart.push({name, price});
    total += price;

    document.getElementById("count").innerText = cart.length;

    displayCart();
}

function displayCart(){

    let list = document.getElementById("cart");

    list.innerHTML = "";

    cart.forEach((item,index)=>{

        list.innerHTML += `
        <li>
            ${item.name} - ₹${item.price}
            <button onclick="removeItem(${index})">Remove</button>
        </li>
        `;
    });

    document.getElementById("total").innerText = total;
}

function removeItem(index){

    total -= cart[index].price;

    cart.splice(index,1);

    document.getElementById("count").innerText = cart.length;

    displayCart();
}
