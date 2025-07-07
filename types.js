const cart = [];
  const wishlist = [];

  const cartBox = document.getElementById("cartdiv");
  const cartItems = document.getElementById("cartList");
  const cartIcon = document.querySelector("#ord");

  const wishlistBox = document.getElementById("wishdiv");
  const wishlistItems = document.getElementById("wishList");
  const wishlistIcon = document.querySelector("#wi");

  
  cartIcon.addEventListener("click", () => {
    cartBox.style.display = cartBox.style.display === "none" ? "block" : "none";
    wishlistBox.style.display = "none";
  });

  wishlistIcon.addEventListener("click", () => {
    wishlistBox.style.display = wishlistBox.style.display === "none" ? "block" : "none";
    cartBox.style.display = "none";
  });

  document.querySelectorAll(".addtocart").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.parentElement;
      const name = card.querySelector("h2").innerText;
      const price = card.querySelector(".price").innerText;
      const imgSrc = card.querySelector("img").src;

      if (!cart.find(item => item.name === name)) {
        cart.push({ name, price, imgSrc });
        updateCart();
      } else {
        alert("Item already in cart!");
      }
    });
    // let prch=document.createElement("button")
    //   if(cart[0]!=undefined && prch)
    //   prch.id="prch"
    //   prch.textContent="PLACE ORDER"
    //   cart.push();
  });

  
  document.querySelectorAll(".addtowish").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.parentElement;
      const name = card.querySelector("h2").innerText;
      const price = card.querySelector(".price").innerText;
      const imgSrc = card.querySelector("img").src;

      if (!wishlist.find(item => item.name === name)) {
        wishlist.push({ name, price, imgSrc });
        updateWishlist();
      } else {
        alert("Item already in wishlist!");
      }
    });
  });

  function updateCart() {
    cartItems.innerHTML = "";
    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <img src="${item.imgSrc}" width="50" />
        ${item.name} - ${item.price}
        <button onclick="removeFromCart(${index})">Remove</button>
      `;
      cartItems.appendChild(li);
    });
  }

  function updateWishlist() {
    wishlistItems.innerHTML = "";
    wishlist.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <img src="${item.imgSrc}" width="50" />
        ${item.name} - ${item.price}
        <button onclick="removeFromWishlist(${index})">Remove</button>
      `;
      wishlistItems.appendChild(li);
    });
  }

  window.removeFromCart = function(index) {
    cart.splice(index, 1);
    updateCart();
  };

  window.removeFromWishlist = function(index) {
    wishlist.splice(index, 1);
    updateWishlist();
  };