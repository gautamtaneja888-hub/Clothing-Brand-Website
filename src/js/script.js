
const products = [
  {
    name: "Elegant Red Dress",
    category: "Women",
    price: "₹499",
    image: "./images/red.png",
    link: "./personal_pages/red_dress.html"
  },
  {
    name: "Classic Black Dress",
    category: "Women",
    price: "₹499",
    image: "./images/black.png",
    link: "./personal_pages/black_dress.html"

  },
  {
    name: "Elegant gray Dress",
    category: "Women",
    price: "₹799",
    image: "./images/gray.png",
    link: "./personal_pages/gray.html"

  },
  {
    name: "light Color Dress",
    category: "Women",
    price: "₹499",
    image: "./images/light.png",
    link: "./personal_pages/light.html"

  }
];

const container = document.getElementById("productContainer");

products.forEach(product => {
  container.innerHTML += `
    <div class="card" onclick="goToProduct('${product.link}')">
      <img src="${product.image}" alt="${product.name}">
      <div class="card-content">
        <h3>${product.name}</h3>
        <p>${product.category}</p>
        <div class="price">${product.price}</div>
      </div>
    </div>
  `;
});

function goToProduct(link) {
  window.location.href = link;
}
