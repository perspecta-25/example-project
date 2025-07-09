// Cart functionality for main page
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId, productName, productPrice, productImage) {
    const product = {
        id: productId,
        name: productName,
        price: parseFloat(productPrice),
        image: productImage
    };

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showToast('Продуктът е добавен в количката!');
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) {
        cartCount.textContent = totalItems;
    }
}

function showToast(message) {
    // Simple alert for now, you can enhance this
    alert(message);
}

// Update cart count on page load
document.addEventListener('DOMContentLoaded', function () {
    updateCartCount();
});

var element = document.querySelector('.btn-add-to-cart');

element.addEventListener("click", function (e) {
    alert('something');
    var id = e.target.dataset.id;

    addToCart(id, "asdsa", "10", "/asdsad/sad");
}, false);