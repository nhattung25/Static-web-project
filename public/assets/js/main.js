// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   direction: "vertical",
//   loop: false,
//   speed: 500,
//   slidesPerView: 3,
//   spaceBetween: 15,
//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".btn-next",
//     prevEl: ".btn-prev",
//   },
// });

/**Sign-up button */

const sign_up_btn = document.querySelector(".nav-item.sign-up");
const sign_up = document.querySelector(".sign-up-button");
const sign_up_close_btn = document.querySelector(".close-btn");
const sign_up_alert = document.querySelector(".sign-up-alert");
const sign_up_fb = document.querySelector(".sign-up-fnc.fb");
const sign_up_crt = document.querySelector(".sign-up-fnc.crt");

// sign_up_btn.addEventListener("click", function () {
//   sign_up.style.display = "block";
// });

// function handleClickbtn(e) {
//   e.target.innerHTML = `<div class="back">
//       <div class="back-title">Bước 1/2</div>
//     </div>
//     <div class="alert-title">TẠO TÀI KHOẢN</div>
//     <div class="sign-up-alert-form">
//       <div class="sign-up-acc">
//         <div class="sign-up-label">Tài khoản</div>
//         <input class="input sign-up" type="text" />
//       </div>
//       <div class="sign-up-pass">
//         <div class="sign-up-label">Mật khẩu</div>
//         <input class="input sign-up" type="password" />
//       </div>
//       <div class="sign-up-pass">
//         <div class="sign-up-label">Nhập lại mật khẩu</div>
//         <input class="input sign-up" type="password" />
//       </div>
//         <input class="submit-btn" type="submit" value="Tiếp" />
//     </div>`;
// }
sign_up_crt.addEventListener("click", function () {
  sign_up_alert.innerHTML = `<div class="back">
      <div class="back-title">Bước 1/2</div>
    </div>
    <div class="alert-title">TẠO TÀI KHOẢN</div>
    <div class="sign-up-alert-form">
      <div class="sign-up-acc">
        <div class="sign-up-label">Tài khoản</div>
        <input class="input sign-up" type="text" />
      </div>
      <div class="sign-up-pass">
        <div class="sign-up-label">Mật khẩu</div>
        <input class="input sign-up" type="password" />
      </div>
      <div class="sign-up-pass">
        <div class="sign-up-label">Nhập lại mật khẩu</div>
        <input class="input sign-up" type="password" />
      </div>
        <input class="submit-btn" type="submit" value="Tiếp" /> 
    </div>`;

  const next_btn = document.querySelector(".submit-btn");
  next_btn.addEventListener("click", function () {
    sign_up_alert.innerHTML = `  <div class="back">
    <div class="back-title">
      <button class="back-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
      </button>
      Bước 2/2
    </div>
  </div>
  <div class="alert-title">TẠO TÀI KHOẢN</div>
  <div class="sign-up-alert-form stp2">
    <div class="sign-up-nickname">
      <div class="sign-up-label">Tên hiển thị trong bài viết</div>
      <div class="sub-label">
        (Nếu để trống, tên hiển thị của bạn sẽ là tên tài khoản)
      </div>
      <input class="input sign-up" type="text" />
    </div>
    <div class="sign-up-avatar">
      <div class="sign-up-label">Chọn avatar</div>
      <div class="sample-avatar">
        <button><img src="./img/avatar/avatar-1.png" alt="" /></button>
        <button><img src="./img/avatar/avatar-2.png" alt="" /></button>
        <button><img src="./img/avatar/avatar-3.png" alt="" /></button>
        <button><img src="./img/avatar/avatar-4.png" alt="" /></button>
        <button><img src="./img/avatar/avatar-5.png" alt="" /></button>
        <button><img src="./img/avatar/avatar-6.png" alt="" /></button>
      </div>
    </div>
    <div class="sign-up-upload">
      <div class="sign-up-label">Hoặc tải ảnh của bạn</div>
      <div class="upload-avatar">
        <input class="userFile" type="file" value="tai" />
      </div>
    </div>
    <input class="submit-btn" type="submit" value="ĐĂNG KÝ" />
  </div>`;
  });
});
sign_up_close_btn.addEventListener("click", function () {
  sign_up.style.display = "none";
  sign_up_alert.innerHTML = ` <img src="./img/logo-brand/logo-brand.png" alt="" />
            <div class="alert-title">ĐĂNG NHẬP</div>
            <div class="sign-up-alert-form">
              <button class="sign-up-fnc fb">
                <div class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                    />
                  </svg>
                </div>
                <span>Đăng nhập với Facebook</span>
              </button>

              <button class="sign-up-fnc crt">
                <img src="./img/icon/cat-icon.png" alt="" />
                <span>Tạo tài khoản trên Catpaw</span>
              </button>
            </div>`;
});

/**Filter-dropdow */

const filter_cat = document.querySelector(".filter-icon.cat");
const cat_dropdown = document.querySelector(".cat-dropdown");

filter_cat.addEventListener("click", function () {
  cat_dropdown.style.display = "block";
});


