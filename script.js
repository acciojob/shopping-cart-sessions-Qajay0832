const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];
document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  const cartList = document.getElementById("cart-list");
  const clearCartBtn = document.getElementById("clear-cart-btn");
  // Load cart from session storage
  const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  // Render products
  products.forEach(product => {
    const li = document.createElement("li");
    li.textContent = `${product.name} - $${product.price}`;
    const addButton = document.createElement("button");
    addButton.textContent = "Add to Cart";
    addButton.addEventListener("click", () => addToCart(product));
    li.appendChild(addButton);
    productList.appendChild(li);
  });
// Render cart
  function renderCart() {
    cartList.innerHTML = "";
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - $${item.price}`;
      cartList.appendChild(li);
    });
  }
  function addToCart(product) {
    cart.push(product);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
  clearCartBtn.addEventListener("click", () => {
    cart.length = 0;
    sessionStorage.removeItem("cart");
    renderCart();
  });
  renderCart();
});