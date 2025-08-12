
function logout() {
  window.location.href = "index.html";
}

// function AllToPageDetails
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
  window.location.href = "product_Details4.html"; 
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
/////////////////////////////////////////////////////////////////////
///function updateCartCount
  function updateCartCount() {
    let totalQuantity = 0;
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.forEach(item => {
      totalQuantity += item.quantity;
    });
    const cartCountElement = document.getElementById("cart-count");
    cartCountElement.innerText = totalQuantity;
  }
  
  document.addEventListener("DOMContentLoaded", updateCartCount); 
  
  function addToCart(button) {
    const productCard = button.closest('.menu-item');
    if (!productCard) return;
  
    const product = {
        title: productCard.querySelector('.card-title') ? productCard.querySelector('.card-title').textContent : 'Unknown',
        image: productCard.querySelector('img').src,
        price: productCard.querySelector('.price') ? parseFloat(productCard.querySelector('.price').getAttribute('data-price').replace('$', '')) : 0,
        category: productCard.querySelector('.category') ? productCard.querySelector('.category').getAttribute('data-category') : 'Unknown',
        quantity: 1
    };
  
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(item => item.title === product.title);
  
    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += 1;
    } else {
        cart.push(product);
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();  
  }
  
////////////////////////////////////////////////////////////////////////
// Function to Slide the images
let currentIndex = 0;
const images = document.querySelectorAll(".slider-image");
const totalImages = images.length;
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

function updateSlider() {
  const offset = -currentIndex * 100;
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}

if (nextButton) {
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateSlider();
  });
}

if (prevButton) {
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateSlider();
  });
}
/////////////////////////////////////////////////////////////////////
// function scrollToTop
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
/////////////////////////////////////////////////////////////////////////////
// select Category
document.querySelectorAll(".category-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");
    document.querySelectorAll(".category-item").forEach((item) => {
      if (
        category === "all" ||
        item.classList.contains(`category-${category}`)
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

function updateUserName() {
  const username = sessionStorage.getItem("username");
  const userLink = document.getElementById("user-link");
  if (username && userLink) {
    userLink.textContent = username;
  }
}

window.onload = updateUserName;




