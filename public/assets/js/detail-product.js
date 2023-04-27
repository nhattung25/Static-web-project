// Lấy URL của trang
const queryString = window.location.search;
// Tách lấy parameter ID
let as = new URLSearchParams(queryString);
const urlId = as.get("id");

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
    console.log(productItem);
    // Render ra ngoài giao diện
    renderDetail(productItem);
  } catch (error) {
    console.log(error);
  }
}

// Lấy các element
const productEle = document.querySelector(".row");
const tabEle = document.querySelector(".tab-content");

// Render UI - Hiển thị chi tiết sản phẩm ra ngoài giao diện
function renderDetail(arr) {
  let productInfo = ``;
  let tabInfo = ``;
  for (let i = 0; i < arr.length; i++) {
    const t = arr[i];
    if (t.id == urlId) {
      productInfo += `
        <div class="col-12 col-sm-6 col-md-4 ">
              <img class="product-img" src="${t.image}" alt="${t.name}" />
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <div class="product-info">
                <div class="product-name">${t.name}</div>
                <div class="product-price">${t.price}</div>
                <div class="short-des">
                  ${t.des}
                </div>
                <div class="product-qty">
                  <span>Số lượng:</span>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-dash-square-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 7.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z"
                      />
                    </svg>
                  </button>
                  <input type="text" value="1" />
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-plus-square-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"
                      />
                    </svg>
                  </button>
                </div>
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
                <div class="buy">
                  <button class="buy-btn">Thêm vào giỏ</button>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-4">
              <div class="promotion-code">
                <div class="promo-title">Mã khuyến mãi cho sản phẩm</div>
                <div class="promo-item">
                  <span>CATPAW10</span> - Giảm giá 10%
                </div>
                <div class="promo-item">
                  <span>CATPAW20</span> - Giảm giá 20%
                </div>
                <div class="promo-item">
                  <span>CATPAW30</span> - Giảm giá 30%
                </div>
              </div>
            </div>
        `;
      tabInfo += `
        <div role="tabpanel" class="tab-pane active" id="home">
              <div class="container">
                <div class="col-12 new-product">
                 ${t.about}
                </div>
              </div>
            </div>
            <div role="tabpanel" class="tab-pane" id="profile">
              <div class="container">
                ${t.warranty}
              </div>
            </div>
            <div role="tabpanel" class="tab-pane" id="contact">
              <div class="container">
                <div class="comment-title">
                  Để lại đánh giá và nhận xét của bạn về sản phẩm
                </div>
              </div>
            </div>
        `;
      productEle.innerHTML = productInfo;
      tabEle.innerHTML = tabInfo;
    }
  }
}

window.onload = () => {
  getProductsPage();
};
