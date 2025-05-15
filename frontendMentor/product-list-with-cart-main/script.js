fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const productContent = document.querySelector(".product-content");
    let productHTML = "";
    let count = 0;
    let cartQuantity = 0;

    // const cartItem = document.querySelector('.cart-item')
    // let selectedProductHTML = "";

    data.forEach((product, index) => {
      // Start a new group every 3 products
      if (index % 3 === 0) {
        if (index !== 0) productHTML += "</div>"; // close previous group
        productHTML += `<div class="product-group">`;
      }

      productHTML += `
        <div class="product-card">
          <div class="product-thumbnail">
            <img src="${product.image.desktop}" alt="${product.name}" />

            <div class="cart-wrapper">
              <button class="add-to-cart">
                <img src="./assets/images/icon-add-to-cart.svg" alt="add-to-cart-icon" />
                <span>Add to Cart</span>
              </button>

              <div class="quantity-controls">
                <button class="minus">-</button>
                <span class="qty">1</span>
                <button class="plus">+</button>
              </div>
            </div>
          </div>

          <div class="product-details">
            <p class="category">${product.category}</p>
            <p class="name">${product.name}</p>
            <p class="price">$${product.price}</p>
          </div>
        </div>
      `;
    });

    productHTML += "</div>"; // close last group
    productContent.innerHTML = productHTML;

    document.querySelectorAll(".plus").forEach((button) => {
      button.addEventListener("click", () => {
        cartQuantity += 1;
        document.querySelector(
          ".cart-quantity"
        ).innerHTML = `Your Cart (${cartQuantity})`;
      });
    });

    document.querySelectorAll(".minus").forEach((button) => {
      button.addEventListener("click", () => {
       
        if (cartQuantity > 0) {
          cartQuantity -= 1;
          document.querySelector(
            ".cart-quantity"
          ).innerHTML = `Your Cart (${cartQuantity})`;
        } else {
          alert("Your cart is empty!");
        }
      });
    });
  })
  .catch((error) => {
    console.error("Error loading JSON:", error);
  });
