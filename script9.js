const addBtn = document.querySelector('.addBtn');
const cartSidebar = document.querySelector('.cart-sidebar');
const cartList = document.querySelector('#cart-list');

let cart = [];

addBtn.addEventListener('click', () => {
    const product = {
        name: 'Dell Vostro 15 Business Laptop Windows 11& 13th gen Intel core -15.6 FH',
        price: '₹44,490.00',
        color: 'Ash',
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




