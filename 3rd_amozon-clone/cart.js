// ================= CART =================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");

loadCart();

function loadCart() {

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <h2 style="text-align:center; margin-top:40px;">
                🛒 Your Cart is Empty
            </h2>
        `;

        totalPrice.innerText = "0";

        return;
    }

    cart.forEach((item, index) => {

        total += item.price * item.quantity;

        cartItems.innerHTML += `

        <div class="cart-item">

            <div>

                <h3>${item.name}</h3>

                <p>₹${item.price}</p>

            </div>

            <div class="quantity">

                <button onclick="decrease(${index})">-</button>

                <span>${item.quantity}</span>

                <button onclick="increase(${index})">+</button>

            </div>

            <h3>₹${item.price * item.quantity}</h3>

            <button class="remove-btn"
                    onclick="removeItem(${index})">
                Remove
            </button>

        </div>

        `;

    });

    totalPrice.innerText = total;

}

function increase(index) {

    cart[index].quantity++;

    saveCart();

}

function decrease(index) {

    if (cart[index].quantity > 1)
        cart[index].quantity--;
    else
        cart.splice(index, 1);

    saveCart();

}

function removeItem(index) {

    cart.splice(index, 1);

    saveCart();

}

function saveCart() {

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();

}