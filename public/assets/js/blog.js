// // Khai báo biến
let blogItem = [];

// // API for getting Products list
function getBlogAPI() {
  return axios.get("/all-blog"); // => luôn trả về promise
}

// // Getting the Cats list
async function getBlogPage() {
  try {
    const resBlogItem = await getBlogAPI();
    blogItem = resBlogItem.data;

    // Render ra ngoài giao diện
    renderBlogs(blogItem);
    // searchProductFunc();
  } catch (error) {
    console.log(error);
  }
}
console.log("a");
const blogList = document.querySelector(".blog-list .row");
console.log(blogList);

// // Render UI - Hiển thị danh sách card ra ngoài giao diện
function renderBlogs(arr) {
  let htmlCode = ``;
  for (let i = 0; i < arr.length; i++) {
    const t = arr[i];
    htmlCode += `
        <div class="col-12 col-sm-6 col-md-4">
                    <div class="post-card">
                      <div class="post-card-thumbnail">
                        <img src="${t.thumbnail}" alt="" />
                      </div>
                      <div class="post-card-content">
                        <div class="post-card-title">
                          ${t.title}
                        </div>
                        <div class="post-card-des">
                          ${t.description}
                        </div>
                        <div class="post-card-footer">
                          <div class="post-card-love">
                            <span>${t.love}</span
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              fill="currentColor"
                              class="bi bi-heart"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                              />
                            </svg>
                          </div>
                          <div class="post-card-comemnt">
                            <span>${t.comment}</span
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              fill="currentColor"
                              class="bi bi-chat-dots"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                              />
                              <path
                                d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"
                              />
                            </svg>
                          </div>
                          <div class="post-card-view">
                            <span>${t.view}</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-eye"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                              />
                              <path
                                d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
        `;
    blogList.innerHTML = htmlCode;
  }
}

// Search sản phẩm theo tên
// let productSearch = document.querySelector(".product-search-input");
// let productSearchBtn = document.querySelector(".product-search");
// let clearBtn = document.querySelector(".clear");
// let value = productSearch.value;

async function searchProductFunc() {
  //Dùng async-await để đợi render ra list sản phẩm
  await renderProducts(arr);
  let productCards = document.querySelectorAll(".item-card");
  productSearch.addEventListener("keyup", function () {
    Array.from(productCards).forEach((product) => {
      let value = this.value;
      let productTitle = product.querySelector(".card-name").innerText;
      // console.log(product);
      productSearchBtn.addEventListener("click", function () {
        console.log("a");
        if (productTitle.toLowerCase().includes(value.toLowerCase())) {
          product.style.display = "block";
          // console.log("hiện");
          // console.log(product);
          // console.log("hiện" + product);
        } else {
          product.style.display = "none";
          // console.log("ẩn");
          // console.log(product);
        }
      });
    });

    function clearFunc() {
      if (productSearch.value != "") {
        clearBtn.style.display = "block";
      } else {
        clearBtn.style.display = "none";
      }
      clearBtn.addEventListener("click", function () {
        productSearch.value = "";
        // Ẩn nút clear khi ô tìm kiếm trống
        clearBtn.style.display = "none";
        // Hiển thị lại product list khi ô tìm kiếm trống
        Array.from(productCards).forEach((product) => {
          product.style.display = "block";
        });
      });
    }
    clearFunc();
  });
}
// searchProductFunc();

window.onload = () => {
  getBlogPage();
};
