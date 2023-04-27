$(document).ready(function () {
  $(".owl-1").owlCarousel();
  $(".owl-2").owlCarousel();
  $(".owl-3").owlCarousel();
});

$(".owl-1").owlCarousel({
  loop: true, // loop function
  margin: 10, // Khoảng cách giữa các phần tử
  nav: false, // Thanh điều hướng
  center: true,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 1500,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
$(".owl-2").owlCarousel({
  loop: true, // loop function
  margin: 24, // Khoảng cách giữa các phần tử
  nav: true, // Thanh điều hướng
  center: false,
  dots: false,
  autoplay: false,
  smartSpeed: 500,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 4,
    },
  },
});

$(".owl-3").owlCarousel({
  loop: true, // loop function
  margin: 20, // Khoảng cách giữa các phần tử
  nav: false, // Thanh điều hướng
  dots: false,
  center: false,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 1500,
  responsive: {
    0: {
      items: 1,
    },

    1200: {
      items: 2,
    },
  },
});

// Testimotional JS
const testiomationalList = [
  {
    name: "hà anh tuấn",
    gender: "Anh",
    quote:
      "Tôi cảm thấy chất lượng cũng như dịch vụ tại Catpaw rất tốt. Bé mèo tôi mua tại đây rất khỏe mạnh và đáng yêu.",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },

  {
    name: "ngọc trinh",
    gender: "Chị",
    quote:
      "Tôi rất ấn tượng với chất lượng dịch vụ tại Catpaw. Các bạn nhân viên rất nhiệt tình tư vấn giúp tôi chọn được sản phẩm ưng ý. Chắc chắn tôi sẽ ủng hộ Catpaw",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },

  {
    name: "thành nguyễn",
    gender: "Anh",
    quote:
      "Catpaw có rất nhiều khuyến mãi, giá cả ở đây cũng rẻ nữa. Lần tới khi cần tôi sẽ lại đến Catpaw",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },

  {
    name: "Jolly",
    gender: "Chị",
    quote:
      "Delivery service of Catpaw is so amazing. I live in Singapore but I still can buy the product of Catpaw. Thank you so much.",
    image: "https://randomuser.me/api/portraits/women/76.jpg",
  },
];

let background = document.querySelector(".testimonials");
let quote = document.querySelector(".text");
let authorName = document.querySelector(".name");
let author = document.getElementsByClassName("author");

// Default testimotional
function defaultInfor() {
  quote.textContent = testiomationalList[0].quote;
  authorName.innerHTML = `${
    "<span>" +
    testiomationalList[0].gender +
    "</span>" +
    "&nbsp" +
    testiomationalList[0].name
  }`;
}

// Render customer testimotional
function showInfo() {
  let arr = Array.from(author);
  for (let i = 0; i < arr.length; i++) {
    author[i].addEventListener("click", function () {
      quote.textContent = testiomationalList[i].quote;
      authorName.innerHTML = `${
        "<span>" +
        testiomationalList[i].gender +
        "</span>" +
        "&nbsp" +
        testiomationalList[i].name
      }`;
      for (let j = 0; j < arr.length; j++) {
        if (author[j].classList.contains("selected")) {
          author[j].classList.remove("selected");
          author[i].classList.add("selected");
        } else {
          author[i].classList.add("selected");
        }
      }
    });
  }
}
defaultInfor();
showInfo();

// API for getting Products list
function getAllProductAPI() {
  return axios.get("/all-product"); // => luôn trả về promise
}
function getNewAPI() {
  return axios.get("/new-items"); // => luôn trả về promise
}

// // Khai báo biến
let product = [];

// Getting the Cats list
async function getProducts() {
  try {
    const resProduct = await getAllProductAPI();
    product = resProduct.data;

    // const resNewItems = await getNewAPI();
    // newItems = resNewItems.data;

    // Render ra ngoài giao diện
    renderUI(product, catEle, 0, 4);
    renderUI(product, foodEle, 1, 4);
    renderUI(product, accessEle, 2, 4);
  } catch (error) {
    console.log(error);
  }
}

// let newItems = [];

const catEle = document.querySelector(".cat-listing .row");
const foodEle = document.querySelector(".food-listing .row");
const accessEle = document.querySelector(".access-listing .row");
// const newEle = document.querySelector(
//   ".new-product .owl-2 .owl-stage-outer .owl-stage .owl-item"
// );

// Render UI - Hiển thị danh sách card ra ngoài giao diện
function renderUI(arr, renderEle, type, qty) {
  let htmlCode = ``;
  switch (type) {
    case 0:
      for (let i = 0; i < qty; i++) {
        const t = arr[i];
        // console.log(t);
        if (t.type == type) {
          htmlCode += `
         <div class="col-12 col-sm-6 col-md-3">
         <a href="./detail-product.html?id=${t.id}">
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
        }

        renderEle.innerHTML = htmlCode;
      }
      break;

    case 1:
      for (let i = 0; i < qty + 10; i++) {
        const t = arr[i];

        if (t.type == type) {
          htmlCode += `
         <div class="col-12 col-sm-6 col-md-3">
         <a href="./detail-product.html?id=${t.id}">
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
        }

        renderEle.innerHTML = htmlCode;
      }
      break;
    case 2:
      for (let i = 0; i < qty + 20; i++) {
        const t = arr[i];
        if (t.type == type) {
          htmlCode += `
         <div class="col-12 col-sm-6 col-md-3">
         <a href="./detail-product.html?id=${t.id}">
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
        }

        renderEle.innerHTML = htmlCode;
      }
      break;
    default:
      break;
  }
}

function renderSlider(arr, renderEle) {
  let htmlCode = ``;
  for (let i = 0; i < arr.length; i++) {
    const t = arr[i];
    htmlCode += ` <div class="item-card">
                    <div class="item-content">
                      <div class="card-thumbnail">
                        <img
                          src="${t.image}"
                          alt=""
                        />
                      </div>
                      <div class="card-content">
                        <div class="card-name">${t.name}</div>
                        <div class="card-price">${t.price}</div>
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
        `;
    renderEle.innerHTML = htmlCode;
  }
}

window.onload = () => {
  getProducts();
};
