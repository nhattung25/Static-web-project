$(document).ready(function () {
  $(".owl-1").owlCarousel();
  $(".owl-2").owlCarousel();
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
const list = [
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
      "Delivery service of Catpaw is so amazing. I live in Singapore but I still can buy the product of Catpaw. Thank you Catpaw so much.",
    image: "https://randomuser.me/api/portraits/women/76.jpg",
  },
];

let background = document.querySelector(".testimonials");
let quote = document.querySelector(".text");
let authorName = document.querySelector(".name");
let author = document.getElementsByClassName("author");

// Default testimotional
function defaultInfor() {
  quote.textContent = list[0].quote;
  authorName.textContent = list[0].name;
}
// Render customer testimotional
function showInfo() {
  let arr = Array.from(author);
  for (let i = 0; i < arr.length; i++) {
    author[i].addEventListener("click", function () {
      quote.textContent = list[i].quote;
      authorName.textContent =
        list[i].gender + "<span>&nbsp</span>" + list[i].name;
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
