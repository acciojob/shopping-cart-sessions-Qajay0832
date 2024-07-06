// This is the boilerplate code given for you
// You can modify this code
// Product data

cart=document.querySelector('#cart-list');
clear=document.querySelector('#clear-cart-btn');
clear.setAttribute("onclick",'clearCart()')

      
const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
    { id: 4, name: "Product 4", price: 40 },
    { id: 5, name: "Product 5", price: 50 },
  ];
let cartList=[];  
  // DOM elements
  const productList = document.getElementById("product-list");
  function fun(productId){
    products.forEach(e=>
        {
            if(e.id==productId){
                addToCart(e)
                return;
            }
            })
  }
  
  // Render product list
  function renderProducts() {
    products.forEach((product) => {
      const li = document.createElement("li");
      li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}" onclick="fun(${product.id})">Add to Cart</button>`;
      productList.appendChild(li);
    });
  }
  
  // Render cart list
  function renderCart() {
    cartList=JSON.parse(sessionStorage.getItem("cart data")) || [];
    cart.innerHTML=``
    cartList.forEach((e,index)=>{
    cart.innerHTML+=`<li>${e.name} $${e.price} <button class="add-to-cart-btn" onclick="removeFromCart(${index})">Remove</button></li>`
})
  }
  
  // Add item to cart
  function addToCart(e) {
    console.log("add",e,cartList);
    cartList.push(e);
    sessionStorage.setItem("cart data",JSON.stringify(cartList))
    renderCart()
  }
  
  // Remove item from cart
  function removeFromCart(index) {
    cartList.splice(index,1);
    sessionStorage.setItem("cart data",JSON.stringify(cartList))
    renderCart();
  }
  
  // Clear cart
  function clearCart() {
    cartList=[];
    sessionStorage.removeItem("cart data")
    renderCart();
  }
  
  // Initial render
  renderProducts();
  renderCart();
  