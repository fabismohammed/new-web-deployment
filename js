// Shopping Cart

let cartCount = 0;

const cartDisplay = document.getElementById("cart-count");
const buttons = document.querySelectorAll(".add-cart");

buttons.forEach(button => {
  button.addEventListener("click", () => {

    cartCount++;

    cartDisplay.textContent = cartCount;

    button.textContent = "Added ✓";

    button.style.background = "#00aaff";

    setTimeout(() => {
      button.textContent = "Add to Cart";
      button.style.background = "";
    }, 1200);
  });
});


// Product Search

const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const products = document.querySelectorAll(".product-card");

function filterProducts() {

  const searchText = searchInput.value.toLowerCase();
  const selectedCategory = categorySelect.value;

  products.forEach(product => {

    const productName =
      product.dataset.name.toLowerCase();

    const productCategory =
      product.dataset.category;

    const matchesSearch =
      productName.includes(searchText);

    const matchesCategory =
      selectedCategory === "all" ||
      productCategory === selectedCategory;

    if (matchesSearch && matchesCategory) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

searchInput.addEventListener("input", filterProducts);
categorySelect.addEventListener("change", filterProducts);
