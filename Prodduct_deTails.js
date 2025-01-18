function logout() {
  window.location.href = "index.html";
}

  
 
  function ToCart() {
    window.location.href = "cart.html";
  }
  
  function ToPageDetails() {
    window.location.href = "Product_Details.html"; 
    }
    function ToPageDetailsproOne() {
    window.location.href = "Product_Details1.html"; 
    }
    function ToPageDetailsproTwo() {
    window.location.href = "Product_Details2.html"; 
    }
    function ToPageDetailsproThree() {
    window.location.href = "Product_Details3.html"; 
    }
    function ToPageDetailss() {
    window.location.href = "Product_Detailss.html"; 
    }
    function ToPageDetailsprofour() {
    window.location.href = "Product_Details4.html"; 
    }
    function ToPageDetailsproFive() {
    window.location.href = "Product_Details5.html"; 
    }
    function ToPageDetailsproSix() {
    window.location.href = "Product_Details6.html"; 
    }
    function ToPageDetailsproSeven() {
    window.location.href = "Product_Details7.html"; 
    }
    function ToPageDetailsproEight() {
    window.location.href = "Product_Details8.html"; 
    }
    function ToPageDetailsproNine() {
    window.location.href = "Product_Details9.html"; 
    }
    /////////////////////////////////////////////////////
    function updateUserName() {
        const username = sessionStorage.getItem("username");
        const userLink = document.getElementById("user-link");
        if (username && userLink) {
          userLink.textContent = username;
        }
      }
      
      window.onload = updateUserName;

      /////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////



function addToCart(button) {
    const productCard = button.closest('.col-4.card');
    if (!productCard) return;
  
    const product = {
      id: productCard.dataset.id,
      title: productCard.querySelector('.card-title') ? productCard.querySelector('.card-title').textContent : 'Unknown',
      image: productCard.querySelector('.card-img-top').src,
      price: productCard.querySelector('.price') ? parseFloat(productCard.querySelector('.price').getAttribute('data-price')) : 0,
      category: productCard.querySelector('.category') ? productCard.querySelector('.category').getAttribute('data-category') : 'Unknown',
      quantity: 1
    };
  
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
  
    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push(product);
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
  }
  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
      cartCountElement.textContent = totalQuantity;
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', function() {
        addToCart(this);
      });
    });
  
    updateCartCount(); 
  });
  

  
  function updateUserName() {
    const username = sessionStorage.getItem("username");
    const userLink = document.getElementById("user-link");
    if (username && userLink) {
      userLink.textContent = username;
    }
  }
  
  function loadProductDetails() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length > 0) {
      const product = cart[cart.length - 1]; 
      const cardTitle = document.querySelector(".card-title");
      const cardImage = document.querySelector(".card-img-top");
      const cardText = document.querySelector(".card-text");
  
      if (cardTitle && cardImage && cardText) {
        cardTitle.textContent = product.title;
        cardImage.src = product.image;
        cardText.innerHTML = `
          Price: $${product.price}<br>
          Category: ${product.category}<br>
          Quantity: ${product.quantity}
        `;
      }
    }
  }
  
  window.onload = function () {
    loadProductDetails();
    updateCartCount();
    updateUserName();
  };
  
  