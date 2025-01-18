function loadCartItems() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartList = document.querySelector(".list-group");
  if (!cartList) return;

  cartList.innerHTML = "";

  cart.forEach((product, index) => {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.setAttribute("data-index", index);
    listItem.innerHTML = `
                    <div class="col-md-4">
                        <img src="${product.image}" class="img-fluid rounded-start" alt="${product.title}">
                    </div>
                    <div class="col-md-8">
                        <h5>${product.title}</h5>
                        <p>Price: $${product.price}</p>
                        <p class="product-quantity">Quantity: ${product.quantity}</p>
                        <div class="quantity-controls">
                            <button class="btn btn-sm btn-danger minus" aria-label="Decrease quantity">-</button>
                            <span class="quantity badge badge-dar">${product.quantity}</span>
                            <button class="btn btn-sm btn-success plus" aria-label="Increase quantity">+</button>
                        </div>
                    </div>
                `;
    cartList.appendChild(listItem);
  });
  updateCartCount();
  updateTotalAmount();
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCountElement = document.getElementById("cart-count");
  if (cartCountElement) {
    cartCountElement.textContent = totalQuantity;
  }
}

function updateTotalAmount() {
  let totalAmount = 0;
  document.querySelectorAll(".list-group-item").forEach((item) => {
    const quantity = parseInt(item.querySelector(".quantity").textContent);
    const price = parseFloat(
      item.querySelector("p:nth-child(2)").textContent.replace("Price: $", "")
    );
    totalAmount += quantity * price;
  });
  const totalAmountElement = document.getElementById("total-amount");
  if (totalAmountElement) {
    totalAmountElement.textContent = totalAmount.toFixed(2);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadCartItems();
  document.querySelectorAll(".plus").forEach((button) => {
    button.addEventListener("click", () => {
      const listItem = button.closest(".list-group-item");
      const index = listItem.getAttribute("data-index");
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart[index].quantity += 1;
      localStorage.setItem("cart", JSON.stringify(cart));
      listItem.querySelector(".quantity").textContent = cart[index].quantity;
      listItem.querySelector(
        ".product-quantity"
      ).textContent = `Quantity: ${cart[index].quantity}`;
      updateTotalAmount();
      updateCartCount();
    });
  });

  document.querySelectorAll(".minus").forEach((button) => {
    button.addEventListener("click", () => {
      const listItem = button.closest(".list-group-item");
      const index = listItem.getAttribute("data-index");
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        listItem.querySelector(".quantity").textContent = cart[index].quantity;
        listItem.querySelector(
          ".product-quantity"
        ).textContent = `Quantity: ${cart[index].quantity}`;
        updateTotalAmount();
        updateCartCount();
      }
    });
  });

  const buyNowButton = document.getElementById("buy-now");
  if (buyNowButton) {
    buyNowButton.addEventListener("click", () => {
      localStorage.removeItem("cart");
      localStorage.removeItem("cartCount");
      loadCartItems();
      updateCartCount();
      updateTotalAmount();
      window.location.href = "last_page.html"; 
    });
  }
});

function logout() {
  window.location.href = "index.html";
}


function BackToHome() {
  window.location.href = "Home_Page.html";
}

function updateUserName() {
  const username = sessionStorage.getItem("username");
  const userLink = document.getElementById("user-link");
  if (username && userLink) {
    userLink.textContent = username;
  }
}

window.onload = updateUserName;

let scrollToTopButton = document.getElementById("scrollToTop");

window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
};

if (scrollToTopButton) {
  scrollToTopButton.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
}
