let cart = [];

  function addToCart(productName, price) {
    // Add item to the cart array
    cart.push({ name: productName, price: price });

    // Update the UI
    renderCart();
  }

  function renderCart() {
    let cartItems = document.getElementById("cart-items");
    let total = 0;

    // Clear existing cart display
    cartItems.innerHTML = "";

    // Loop through cart and display each item
    cart.forEach((item, index) => {
      total += item.price;
      let li = document.createElement("li");
      li.innerText = `${item.name} - ₹${item.price}`;
      cartItems.appendChild(li);
    });

    // Update total
    document.getElementById("cart-total").innerText = total;
  }