let cart = [];
let btn=document.createElement("button");
btn.textContent="Remove";
  function addToCart(productName, price) {
    // Add item to the cart array
    cart.push({ name: productName, price: price, remove: btn });

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
      // let additem=document.getElementsByClassName[index]("sale");
      // let cartpop=document.getElementById("cartList");
      // cartpop.appendChild(additem);
    });

    // Update total
    document.getElementById("cart-total").innerText = total;
  }
  let cartDiv=document.getElementById("cartdiv")
