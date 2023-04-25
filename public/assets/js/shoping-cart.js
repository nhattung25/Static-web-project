let cart = [
  {
    id: 1,
    name: "Mèo Anh lông ngắn Silver",
    price: 15000000,
    quantity: 10,
    rate: 4,
    image: "/img/cat-thumbnail/1.jpg",
    sale: 8,
    count: 1,
  },
  {
    id: 2,
    name: "Maxim Cá hồi 400g",
    price: 40000,
    quantity: 10,
    rate: 4,
    image: "/img/food-thumbnail/1.jpg",
    sale: 58,
    count: 1,
  },
  {
    id: 3,
    name: "Bát gắn chuồng inox",
    price: 80000,
    quantity: 10,
    rate: 4,
    image: "/img/accessories-thumbnail/1.jpg",
    sale: 58,
    count: 1,
  },
  {
    id: 4,
    name: "Găng tay cào lông",
    price: 50000,
    quantity: 10,
    rate: 3.9,
    image: "/img/accessories-thumbnail/3.jpg",
    sale: 15,
    count: 1,
  },
];

let voucher = {
  CATPAW10: 10,
  CATPAW20: 20,
  CATPAW30: 30,
};

const cartItemList = document.querySelector(".cart-item-list");
const cartAlert = document.querySelector(".shoping-cart-alert");
const cartQty = document.querySelector(".shoping-cart-alert span");
const addItem = document.querySelector(".add");
const subTotal = document.querySelector(".sub-total span");
const tax = document.querySelector(".tax span");
const discountPrice = document.querySelector(".discount-price span");
const totalPrice = document.querySelector(".total span");
let btnPromotion = document.querySelector(".discount-btn");
const discountPercent = document.querySelector(".percent");

// Convert number to money VND
function convertMoney(num) {
  return num.toLocaleString("it-IT", { style: "currency", currency: "VND" });
}

// Cập nhật số lượng sản phẩm trong cart
function updateTotalItem(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    const p = arr[i];
    total += p.count;
  }
  return total;
}

// Remove item trong cart
function removeItem(id) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == id) {
      cart.splice(i, 1);
    }
  }
  renderShopingCart(cart);
}

// Thêm sản phẩm
function changeTotalItem(id, e) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == id) {
      cart[i].count = Number(e.target.value);
    }
  }
  renderShopingCart(cart);
}

// Add button
function addButton(id) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == id) {
      cart[i].count += 1;
    }
  }

  renderShopingCart(cart);
}

// Minus button
function minusButton(id) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == id && cart[i].count) {
      cart[i].count -= 1;
    }
  }

  renderShopingCart(cart);
}

// Kiểm tra mã giảm giá
let inputPromotion = document.querySelector(".promo-code");

inputPromotion.addEventListener("keyup", checkCode);

function checkCode() {
  if (inputPromotion.val != "") {
    btnPromotion.createAttribute("class");

    console.log(" Có mã");
  }
}

function checkPromotion() {
  let value = inputPromotion.value;
  if (voucher[value]) {
    return voucher[value];
  }
  return 0;
}

// Tính tiền trong giỏ hàng
function updateTotalMoney(arr) {
  // Tính tổng tiền cart
  let totalMoney = 0;
  let discountMoney = 0;

  for (let i = 0; i < arr.length; i++) {
    const p = arr[i];
    totalMoney += p.count * p.price;
  }

  // Có mã giảm giá hay không?
  // Mã giảm giá có hợp lệ hay không?
  let data = checkPromotion();

  if (data) {
    discountMoney = (totalMoney * data) / 100;
    console.log("có mã");
  } else {
    console.log("ko mã");
  }

  // Cập nhật tiền lên trên giao diện
  discountPercent.innerText = data + "%";
  discountPrice.innerText = convertMoney(discountMoney);
  subTotal.innerText = convertMoney(totalMoney);
  tax.innerText = convertMoney(totalMoney * 0.08);
  // console.log(totalMoney);
  totalPrice.innerText = convertMoney(totalMoney * 1.08 - discountMoney);
}

btnPromotion.addEventListener("click", function () {
  updateTotalMoney(cart);
});

// Render item trong cart
function renderShopingCart(arr) {
  cartItemList.innerHTML = "";
  let htmlCode = ``;
  if (arr.length == 0) {
    cartAlert.innerHTML = `Không có sản phẩm trong giỏ hàng.
<a href="./products.html"
  ><svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-arrow-return-left"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
    ></path></svg
  >Quay lại trang sản phẩm</a
>`;
  } else {
    for (let i = 0; i < arr.length; i++) {
      const t = arr[i];
      htmlCode += `
         <div class="cart-item">
                <div class="row">
                  <div
                    class="col-12 col-lg-5 d-flex justify-content-center item-left"
                  >
                    <div class="cart-thumbnai">
                      <img src="${t.image}" alt="" />
                    </div>
                    <div class="item-info">
                      <div class="item-name">${t.name}</div>
                      <div class="item-des">
                        Mèo Anh lông ngắn Silver xuất sứ Thái Lan.
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-12 col-lg-7 d-flex justify-content-center item-qty"
                  >
                    <div class="item-price">${t.price}</div>
                    <div class="qty-form">
                      <button class="add" onclick="minusButton(${t.id})">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="currentColor"
                          class="bi bi-dash-square-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 7.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z"
                          ></path>
                        </svg>
                      </button>
                      <input type="text" step="1" value="${t.count}" onchange="changeTotalItem(${t.id}, event)" />
                      <button onclick="addButton(${t.id})">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="currentColor"
                          class="bi bi-plus-square-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div class="item-price">15.000.000 đ</div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <button class="del-item-btn" onclick="removeItem(${t.id})">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="#888888"
                        class="bi bi-trash3-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
        `;
      cartItemList.innerHTML = htmlCode;
    }
  }
  cartQty.innerText = `${updateTotalItem(arr)}`;
  updateTotalMoney(arr);
}

window.onload = renderShopingCart(cart);
