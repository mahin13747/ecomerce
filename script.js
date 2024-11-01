const addBtn = document.querySelector('.addBtn');
const cartSidebar = document.querySelector('.cart-sidebar');
const cartList = document.querySelector('#cart-list');

let cart = [];

addBtn.addEventListener('click', () => {
    const product = {
        name: 'LG 1.5 Ton 5 Star AI 6 in 1 Super Convertible Smart WiFi Inverter Split AC, PS-Q19GWZF (Copper Condenser, 4 Way Swing, Anti-Allergy Filter, Ocean Black Fins, 2022 Launch)',
        price: '₹44,490.00',
        color: 'Red',
    };

    cart.push(product);

    updateCart();
});

function updateCart() {
    cartList.innerHTML = '';

    cart.forEach((product, index) => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            <h4>${product.name}</h4>
            <p>Price: ${product.price}</p>
            <p>Color: ${product.color}</p>
            <button class="deleteBtn" data-index="${index}">Delete</button>
        `;

        cartList.appendChild(cartItem);
    });

    cartSidebar.style.display = 'block';

    // Add event listener to delete button
    const deleteButtons = document.querySelectorAll('.deleteBtn');

    deleteButtons.forEach((deleteButton) => {
        deleteButton.addEventListener('click', () => {
            const index = deleteButton.dataset.index;

            cart.splice(index, 1);

            updateCart();
        });
    });
}

let stars = 
    document.getElementsByClassName("star");
let output = 
    document.getElementById("output");
 
// Funtion to update rating
function gfg(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
    output.innerText = "Rating is: " + n + "/5";
}
 
// To remove the pre-applied styling
function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}

function increaseQuantity() {
    let quantity = document.getElementById('quantity');
    if (quantity.value < 20) quantity.value++;
}

function decreaseQuantity() {
    let quantity = document.getElementById('quantity');
    if (quantity.value > 1) quantity.value--;
}

const hamburgerMenu = document.querySelector('.hamburger-menu');
const navbarMenu = document.querySelector('.products ul');

hamburgerMenu.addEventListener('click', () => {
  navbarMenu.classList.toggle('visible');
});