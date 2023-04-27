// // Khai báo biến
let productItem = [];

// // API for getting Products list
function getProductPageAPI() {
  return axios.get("/all-product"); // => luôn trả về promise
}

// // Getting the Cats list
async function getProductsPage() {
  try {
    const resProductItem = await getProductPageAPI();
    productItem = resProductItem.data;

    // Render ra ngoài giao diện
    renderProducts(productItem);
    // searchProductFunc();
  } catch (error) {
    console.log(error);
  }
}

const productList = document.querySelector(".product-list .row");

// Render UI - Hiển thị danh sách card ra ngoài giao diện
function renderProducts(arr) {
  let htmlCode = ``;
  for (let i = 0; i < arr.length; i++) {
    const t = arr[i];
    htmlCode += `
         <div class="col-12 col-sm-12 col-md-4 my-2">
         <a  href="./detail-product.html?id=${t.id}">
                <div class="item-card">
                  <div class="item-content">
                    <div class="card-thumbnail">
                      <img
                        src="${t.image}"
                        alt=""
                      />
                    </div>
                    <div class="card-content">
                      <div class="card-name">${t.name}</div>
                      <div class="card-price">${t.price} ₫</div>
                      <div class="card-meta">
                        <div class="card-rate">
                          ${t.rate}<svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                            />
                          </svg>
                        </div>
                        <div class="card-sale">${t.sale} lượt mua</div>
                      </div>
                    </div>
                    <div class="buy">
                      <button class="buy-btn">Thêm vào giỏ</button>
                    </div>
                  </div>
                </div>
                </a>
              </div>
        `;
    productList.innerHTML = htmlCode;
  }
}

// Search sản phẩm theo tên
// let productSearch = document.querySelector(".product-search-input");
// let productSearchBtn = document.querySelector(".product-search");
// let clearBtn = document.querySelector(".clear");
// let value = productSearch.value;

// function searchProductFunc() {
//   //Dùng async-await để đợi render ra list sản phẩm
//    renderProducts(arr);
//   let productCards = document.querySelectorAll(".item-card");
//   productSearch.addEventListener("keyup", function () {
//     Array.from(productCards).forEach((product) => {
//       let value = this.value;
//       let productTitle = product.querySelector(".card-name").innerText;
//       // console.log(product);
//       productSearchBtn.addEventListener("click", function () {
//         console.log("a");
//         if (productTitle.toLowerCase().includes(value.toLowerCase())) {
//           product.style.display = "block";
//           // console.log("hiện");
//           // console.log(product);
//           // console.log("hiện" + product);
//         } else {
//           product.style.display = "none";
//           // console.log("ẩn");
//           // console.log(product);
//         }
//       });
//     });

//     function clearFunc() {
//       if (productSearch.value != "") {
//         clearBtn.style.display = "block";
//       } else {
//         clearBtn.style.display = "none";
//       }
//       clearBtn.addEventListener("click", function () {
//         productSearch.value = "";
//         // Ẩn nút clear khi ô tìm kiếm trống
//         clearBtn.style.display = "none";
//         // Hiển thị lại product list khi ô tìm kiếm trống
//         Array.from(productCards).forEach((product) => {
//           product.style.display = "block";
//         });
//       });
//     }
//     clearFunc();
//   });
// }
// searchProductFunc();

// let url = window.location.href;
// console.log(url);
// var searchParams = new URLSearchParams(paramsString);
// searchParams.get("place"); // quan-net
// searchParams.getAll("place"); // ["quan-net", "rung"]

window.onload = () => {
  getProductsPage();
};
