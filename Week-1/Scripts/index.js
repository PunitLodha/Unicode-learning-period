const addToCart = document.querySelectorAll(".price button");
const cart = document.getElementById("cart");
const cartModal = document.getElementById("cart-modal");
const yourCart = cartModal.firstElementChild.firstElementChild;
const buyNow = document.getElementById("buy-now");
const paymentModal = document.getElementById("payment-modal");
const company1 = document.getElementById("company-1");
const company2 = document.getElementById("company-2");
const company3 = document.getElementById("company-3");
const next = document.getElementById("next");
const congratsModal = document.getElementById("congrats-modal");

cart.addEventListener("click", () => {
  cartModal.style.display = "block";
});

buyNow.addEventListener("click", () => {
  paymentModal.style.display = "block";
  cartModal.style.display = "none";
});

next.addEventListener("click", () => {
  congratsModal.style.display = "block";
  paymentModal.style.display = "none";
  cartModal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === cartModal) {
    cartModal.style.display = "none";
  } else if (e.target === paymentModal) {
    paymentModal.style.display = "none";
    cartModal.style.display = "none";
  } else if (e.target === congratsModal) {
    congratsModal.style.display = "none";
    paymentModal.style.display = "none";
    cartModal.style.display = "none";
  }
});

function addInCart(e) {
  const price = e.target.previousElementSibling.innerHTML;
  const name =
    e.target.parentElement.previousElementSibling.firstElementChild.innerHTML;
  const itemName = document.createElement("p");
  itemName.innerHTML = name;
  itemName.classList.add("item-name");
  const itemPrice = document.createElement("p");
  itemPrice.innerHTML = price;
  itemPrice.classList.add("item-price");
  const item = document.createElement("div");
  item.classList.add("item");
  item.appendChild(itemName);
  item.appendChild(itemPrice);
  yourCart.parentNode.insertBefore(item, yourCart.nextSibling);
}

function activateCompany(e) {
  company1.lastElementChild.style.display = "none";
  company2.lastElementChild.style.display = "none";
  company3.lastElementChild.style.display = "none";
  if (
    e.target.classList.contains("company-img") ||
    e.target.classList.contains("company-name")
  ) {
    e.target.parentElement.lastElementChild.style.display = "block";
  } else {
    e.target.lastElementChild.style.display = "block";
  }
}

const { length } = addToCart;

for (let i = 0; i < length; i++) {
  addToCart[i].addEventListener("click", addInCart);
}

company1.addEventListener("click", activateCompany);
company2.addEventListener("click", activateCompany);
company3.addEventListener("click", activateCompany);
