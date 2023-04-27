// Lấy URL của trang
const queryString = window.location.search;
// Tách lấy parameter ID
let as = new URLSearchParams(queryString);
const urlId = as.get("id");
console.log(urlId);

let allProduct = [
  {
    type: 0,
    id: 1,
    name: "Mèo Anh lông ngắn Silver",
    price: "15.000.000 VNĐ",
    des: "Mèo Anh lông ngắn Silver xuất sứ Thái Lan. Đã tiêm phòng và có chứng từ đầy đủ",
    quantity: 10,
    rate: 4,
    image: "/img/cat-thumbnail/1.jpg",
    about:
      "Mèo Anh lông ngắn là giống mèo dễ chăm sóc. Chúng không có vấn đề sức khỏe bẩm sinh, không có yêu cầu chế độ ăn uống đặc biệt và là vật nuôi vui vẻ, hòa đồng. Chúng khỏe mạnh, thông minh, tình cảm và là những con mèo nhà lý tưởng.Mèo Anh lông ngắn trưởng thành thường nặng từ 11 – 15 pound đối với con đực và 8 – 12 pound đối với con cái. Sẽ không mất nhiều thời gian để giữ cho mèo hoặc mèo con của bạn hạnh phúc – rất nhiều tình yêu thương, thức ăn ngon, nước sạch, môi trường an toàn và chăm sóc sức khỏe tốt.",
    warranty:
      "Trả góp LS 0% trong 12 tháng (Chi tiết) Bảo hành lên tới 365 ngày. Bảo hiểm sức khỏe lên tới 1,000,000đ Miễn phí vận chuyển toàn quốc (Chi tiết) Giảm 500,000đ khi mua bé thứ 2. Giảm trọn đời 5% khi mua phụ kiện. Giảm trọn đời 20% Spa cắt tỉa – Áp dụng với KH khu vực Hà Nội.",
    sale: 8,
  },
  {
    type: 0,
    id: 2,
    name: "Mèo Anh lông ngắn Xanh Xám",
    price: "14.500.000",
    des: "Mèo Anh lông ngắn Silver xuất sứ Thái Lan. Đã tiêm phòng và có chứng từ đầy đủ",
    quantity: 9,
    rate: 4.5,
    image: "/img/cat-thumbnail/2.jpg",
    about:
      "Mèo Anh lông ngắn là giống mèo dễ chăm sóc. Chúng không có vấn đề sức khỏe bẩm sinh, không có yêu cầu chế độ ăn uống đặc biệt và là vật nuôi vui vẻ, hòa đồng. Chúng khỏe mạnh, thông minh, tình cảm và là những con mèo nhà lý tưởng.Mèo Anh lông ngắn trưởng thành thường nặng từ 11 – 15 pound đối với con đực và 8 – 12 pound đối với con cái. Sẽ không mất nhiều thời gian để giữ cho mèo hoặc mèo con của bạn hạnh phúc – rất nhiều tình yêu thương, thức ăn ngon, nước sạch, môi trường an toàn và chăm sóc sức khỏe tốt.",
    warranty:
      "Trả góp LS 0% trong 12 tháng (Chi tiết) Bảo hành lên tới 365 ngày. Bảo hiểm sức khỏe lên tới 1,000,000đ Miễn phí vận chuyển toàn quốc (Chi tiết) Giảm 500,000đ khi mua bé thứ 2. Giảm trọn đời 5% khi mua phụ kiện. Giảm trọn đời 20% Spa cắt tỉa – Áp dụng với KH khu vực Hà Nội.",
    sale: 3,
  },
  {
    type: 0,
    id: 3,
    name: "Mèo Anh lông ngắn Bicolor",
    price: "16.500.000",
    des: "Mèo Anh lông ngắn Silver xuất sứ Thái Lan. Đã tiêm phòng và có chứng từ đầy đủ",
    quantity: 9,
    rate: 4.7,
    image: "/img/cat-thumbnail/3.jpg",
    about:
      "Mèo Anh lông ngắn là giống mèo dễ chăm sóc. Chúng không có vấn đề sức khỏe bẩm sinh, không có yêu cầu chế độ ăn uống đặc biệt và là vật nuôi vui vẻ, hòa đồng. Chúng khỏe mạnh, thông minh, tình cảm và là những con mèo nhà lý tưởng.Mèo Anh lông ngắn trưởng thành thường nặng từ 11 – 15 pound đối với con đực và 8 – 12 pound đối với con cái. Sẽ không mất nhiều thời gian để giữ cho mèo hoặc mèo con của bạn hạnh phúc – rất nhiều tình yêu thương, thức ăn ngon, nước sạch, môi trường an toàn và chăm sóc sức khỏe tốt.",
    warranty:
      "Trả góp LS 0% trong 12 tháng (Chi tiết) Bảo hành lên tới 365 ngày. Bảo hiểm sức khỏe lên tới 1,000,000đ Miễn phí vận chuyển toàn quốc (Chi tiết) Giảm 500,000đ khi mua bé thứ 2. Giảm trọn đời 5% khi mua phụ kiện. Giảm trọn đời 20% Spa cắt tỉa – Áp dụng với KH khu vực Hà Nội.",
    sale: 5,
  },
  {
    type: 0,
    id: 4,
    name: "Mèo Anh lông ngắn Black Gold",
    price: "17.500.000",
    des: "Mèo Anh lông ngắn Silver xuất sứ Thái Lan. Đã tiêm phòng và có chứng từ đầy đủ",
    quantity: 9,
    rate: 4.3,
    image: "/img/cat-thumbnail/4.jpg",
    about:
      "Mèo Anh lông ngắn là giống mèo dễ chăm sóc. Chúng không có vấn đề sức khỏe bẩm sinh, không có yêu cầu chế độ ăn uống đặc biệt và là vật nuôi vui vẻ, hòa đồng. Chúng khỏe mạnh, thông minh, tình cảm và là những con mèo nhà lý tưởng.Mèo Anh lông ngắn trưởng thành thường nặng từ 11 – 15 pound đối với con đực và 8 – 12 pound đối với con cái. Sẽ không mất nhiều thời gian để giữ cho mèo hoặc mèo con của bạn hạnh phúc – rất nhiều tình yêu thương, thức ăn ngon, nước sạch, môi trường an toàn và chăm sóc sức khỏe tốt.",
    warranty:
      "Trả góp LS 0% trong 12 tháng (Chi tiết) Bảo hành lên tới 365 ngày. Bảo hiểm sức khỏe lên tới 1,000,000đ Miễn phí vận chuyển toàn quốc (Chi tiết) Giảm 500,000đ khi mua bé thứ 2. Giảm trọn đời 5% khi mua phụ kiện. Giảm trọn đời 20% Spa cắt tỉa – Áp dụng với KH khu vực Hà Nội.",
    sale: 5,
  },
  {
    type: 0,
    id: 5,
    name: "Mèo Anh lông ngắn Xanh Xám",
    price: "13.600.000",
    des: "Mèo Anh lông ngắn Silver xuất sứ Thái Lan. Đã tiêm phòng và có chứng từ đầy đủ",
    quantity: 2,
    rate: 4.1,
    image: "/img/cat-thumbnail/5.jpg",
    about:
      "Mèo Anh lông ngắn là giống mèo dễ chăm sóc. Chúng không có vấn đề sức khỏe bẩm sinh, không có yêu cầu chế độ ăn uống đặc biệt và là vật nuôi vui vẻ, hòa đồng. Chúng khỏe mạnh, thông minh, tình cảm và là những con mèo nhà lý tưởng.Mèo Anh lông ngắn trưởng thành thường nặng từ 11 – 15 pound đối với con đực và 8 – 12 pound đối với con cái. Sẽ không mất nhiều thời gian để giữ cho mèo hoặc mèo con của bạn hạnh phúc – rất nhiều tình yêu thương, thức ăn ngon, nước sạch, môi trường an toàn và chăm sóc sức khỏe tốt.",
    warranty:
      "Trả góp LS 0% trong 12 tháng (Chi tiết) Bảo hành lên tới 365 ngày. Bảo hiểm sức khỏe lên tới 1,000,000đ Miễn phí vận chuyển toàn quốc (Chi tiết) Giảm 500,000đ khi mua bé thứ 2. Giảm trọn đời 5% khi mua phụ kiện. Giảm trọn đời 20% Spa cắt tỉa – Áp dụng với KH khu vực Hà Nội.",
    sale: 7,
  },
  {
    type: 0,
    id: 6,
    name: "Mèo Anh lông ngắn Tabi",
    price: "16.200.000",
    des: "Mèo Anh lông ngắn Silver xuất sứ Thái Lan. Đã tiêm phòng và có chứng từ đầy đủ",
    quantity: 2,
    rate: 4.8,
    image: "/img/cat-thumbnail/6.jpg",
    about:
      "Mèo Anh lông ngắn là giống mèo dễ chăm sóc. Chúng không có vấn đề sức khỏe bẩm sinh, không có yêu cầu chế độ ăn uống đặc biệt và là vật nuôi vui vẻ, hòa đồng. Chúng khỏe mạnh, thông minh, tình cảm và là những con mèo nhà lý tưởng.Mèo Anh lông ngắn trưởng thành thường nặng từ 11 – 15 pound đối với con đực và 8 – 12 pound đối với con cái. Sẽ không mất nhiều thời gian để giữ cho mèo hoặc mèo con của bạn hạnh phúc – rất nhiều tình yêu thương, thức ăn ngon, nước sạch, môi trường an toàn và chăm sóc sức khỏe tốt.",
    warranty:
      "Trả góp LS 0% trong 12 tháng (Chi tiết) Bảo hành lên tới 365 ngày. Bảo hiểm sức khỏe lên tới 1,000,000đ Miễn phí vận chuyển toàn quốc (Chi tiết) Giảm 500,000đ khi mua bé thứ 2. Giảm trọn đời 5% khi mua phụ kiện. Giảm trọn đời 20% Spa cắt tỉa – Áp dụng với KH khu vực Hà Nội.",
    sale: 1,
  },
  {
    type: 0,
    id: 7,
    name: "Munchkin Bicolor",
    price: "20.200.000",
    des: "Mèo Anh lông ngắn Silver xuất sứ Thái Lan. Đã tiêm phòng và có chứng từ đầy đủ",
    quantity: 2,
    rate: 4.8,
    image: "/img/cat-thumbnail/7.jpg",
    about:
      "Mèo Anh lông ngắn là giống mèo dễ chăm sóc. Chúng không có vấn đề sức khỏe bẩm sinh, không có yêu cầu chế độ ăn uống đặc biệt và là vật nuôi vui vẻ, hòa đồng. Chúng khỏe mạnh, thông minh, tình cảm và là những con mèo nhà lý tưởng.Mèo Anh lông ngắn trưởng thành thường nặng từ 11 – 15 pound đối với con đực và 8 – 12 pound đối với con cái. Sẽ không mất nhiều thời gian để giữ cho mèo hoặc mèo con của bạn hạnh phúc – rất nhiều tình yêu thương, thức ăn ngon, nước sạch, môi trường an toàn và chăm sóc sức khỏe tốt.",
    warranty:
      "Trả góp LS 0% trong 12 tháng (Chi tiết) Bảo hành lên tới 365 ngày. Bảo hiểm sức khỏe lên tới 1,000,000đ Miễn phí vận chuyển toàn quốc (Chi tiết) Giảm 500,000đ khi mua bé thứ 2. Giảm trọn đời 5% khi mua phụ kiện. Giảm trọn đời 20% Spa cắt tỉa – Áp dụng với KH khu vực Hà Nội.",
    sale: 2,
  },
  {
    type: 0,
    id: 8,
    name: "Munchkin Xanh Xám",
    price: "19.700.000",
    des: "Mèo Anh lông ngắn Silver xuất sứ Thái Lan. Đã tiêm phòng và có chứng từ đầy đủ",
    quantity: 4,
    rate: 4.3,
    image: "/img/cat-thumbnail/8.jpg",
    about:
      "Mèo Anh lông ngắn là giống mèo dễ chăm sóc. Chúng không có vấn đề sức khỏe bẩm sinh, không có yêu cầu chế độ ăn uống đặc biệt và là vật nuôi vui vẻ, hòa đồng. Chúng khỏe mạnh, thông minh, tình cảm và là những con mèo nhà lý tưởng.Mèo Anh lông ngắn trưởng thành thường nặng từ 11 – 15 pound đối với con đực và 8 – 12 pound đối với con cái. Sẽ không mất nhiều thời gian để giữ cho mèo hoặc mèo con của bạn hạnh phúc – rất nhiều tình yêu thương, thức ăn ngon, nước sạch, môi trường an toàn và chăm sóc sức khỏe tốt.",
    warranty:
      "Trả góp LS 0% trong 12 tháng (Chi tiết) Bảo hành lên tới 365 ngày. Bảo hiểm sức khỏe lên tới 1,000,000đ Miễn phí vận chuyển toàn quốc (Chi tiết) Giảm 500,000đ khi mua bé thứ 2. Giảm trọn đời 5% khi mua phụ kiện. Giảm trọn đời 20% Spa cắt tỉa – Áp dụng với KH khu vực Hà Nội.",
    sale: 5,
  },
  {
    type: 0,
    id: 9,
    name: "Scottish Tabi",
    price: "19.100.000",
    des: "Mèo Anh lông ngắn Silver xuất sứ Thái Lan. Đã tiêm phòng và có chứng từ đầy đủ",
    quantity: 4,
    rate: 5,
    image: "/img/cat-thumbnail/9.jpg",
    about:
      "Mèo Anh lông ngắn là giống mèo dễ chăm sóc. Chúng không có vấn đề sức khỏe bẩm sinh, không có yêu cầu chế độ ăn uống đặc biệt và là vật nuôi vui vẻ, hòa đồng. Chúng khỏe mạnh, thông minh, tình cảm và là những con mèo nhà lý tưởng.Mèo Anh lông ngắn trưởng thành thường nặng từ 11 – 15 pound đối với con đực và 8 – 12 pound đối với con cái. Sẽ không mất nhiều thời gian để giữ cho mèo hoặc mèo con của bạn hạnh phúc – rất nhiều tình yêu thương, thức ăn ngon, nước sạch, môi trường an toàn và chăm sóc sức khỏe tốt.",
    warranty:
      "Trả góp LS 0% trong 12 tháng (Chi tiết) Bảo hành lên tới 365 ngày. Bảo hiểm sức khỏe lên tới 1,000,000đ Miễn phí vận chuyển toàn quốc (Chi tiết) Giảm 500,000đ khi mua bé thứ 2. Giảm trọn đời 5% khi mua phụ kiện. Giảm trọn đời 20% Spa cắt tỉa – Áp dụng với KH khu vực Hà Nội.",
    sale: 2,
  },
  {
    type: 0,
    id: 10,
    name: "Scottish Bicolor",
    price: "19.300.000",
    des: "Mèo Anh lông ngắn Silver xuất sứ Thái Lan. Đã tiêm phòng và có chứng từ đầy đủ",
    quantity: 2,
    rate: 4.9,
    image: "/img/cat-thumbnail/10.jpg",
    about:
      "Mèo Anh lông ngắn là giống mèo dễ chăm sóc. Chúng không có vấn đề sức khỏe bẩm sinh, không có yêu cầu chế độ ăn uống đặc biệt và là vật nuôi vui vẻ, hòa đồng. Chúng khỏe mạnh, thông minh, tình cảm và là những con mèo nhà lý tưởng.Mèo Anh lông ngắn trưởng thành thường nặng từ 11 – 15 pound đối với con đực và 8 – 12 pound đối với con cái. Sẽ không mất nhiều thời gian để giữ cho mèo hoặc mèo con của bạn hạnh phúc – rất nhiều tình yêu thương, thức ăn ngon, nước sạch, môi trường an toàn và chăm sóc sức khỏe tốt.",
    warranty:
      "Trả góp LS 0% trong 12 tháng (Chi tiết) Bảo hành lên tới 365 ngày. Bảo hiểm sức khỏe lên tới 1,000,000đ Miễn phí vận chuyển toàn quốc (Chi tiết) Giảm 500,000đ khi mua bé thứ 2. Giảm trọn đời 5% khi mua phụ kiện. Giảm trọn đời 20% Spa cắt tỉa – Áp dụng với KH khu vực Hà Nội.",
    sale: 2,
  },
  {
    type: 1,
    id: 11,
    name: "Maxim Cá hồi 400g",
    price: "40.000 VNĐ",
    des: "Mèo Anh lông ngắn Silver xuất sứ Thái Lan. Đã tiêm phòng và có chứng từ đầy đủ",
    quantity: 10,
    rate: 4,
    image: "/img/food-thumbnail/1.jpg",
    about:
      "Mèo Anh lông ngắn là giống mèo dễ chăm sóc. Chúng không có vấn đề sức khỏe bẩm sinh, không có yêu cầu chế độ ăn uống đặc biệt và là vật nuôi vui vẻ, hòa đồng. Chúng khỏe mạnh, thông minh, tình cảm và là những con mèo nhà lý tưởng.Mèo Anh lông ngắn trưởng thành thường nặng từ 11 – 15 pound đối với con đực và 8 – 12 pound đối với con cái. Sẽ không mất nhiều thời gian để giữ cho mèo hoặc mèo con của bạn hạnh phúc – rất nhiều tình yêu thương, thức ăn ngon, nước sạch, môi trường an toàn và chăm sóc sức khỏe tốt.",
    warranty:
      "Trả góp LS 0% trong 12 tháng (Chi tiết) Bảo hành lên tới 365 ngày. Bảo hiểm sức khỏe lên tới 1,000,000đ Miễn phí vận chuyển toàn quốc (Chi tiết) Giảm 500,000đ khi mua bé thứ 2. Giảm trọn đời 5% khi mua phụ kiện. Giảm trọn đời 20% Spa cắt tỉa – Áp dụng với KH khu vực Hà Nội.",
    sale: 58,
  },
  {
    type: 1,
    id: 12,
    name: "Maxim Cá ngừ 1.2kg",
    price: "120.000 VNĐ",
    des: "Mèo Anh lông ngắn Silver xuất sứ Thái Lan. Đã tiêm phòng và có chứng từ đầy đủ",
    quantity: 10,
    rate: 4,
    image: "/img/food-thumbnail/2.jpg",
    about:
      "Mèo Anh lông ngắn là giống mèo dễ chăm sóc. Chúng không có vấn đề sức khỏe bẩm sinh, không có yêu cầu chế độ ăn uống đặc biệt và là vật nuôi vui vẻ, hòa đồng. Chúng khỏe mạnh, thông minh, tình cảm và là những con mèo nhà lý tưởng.Mèo Anh lông ngắn trưởng thành thường nặng từ 11 – 15 pound đối với con đực và 8 – 12 pound đối với con cái. Sẽ không mất nhiều thời gian để giữ cho mèo hoặc mèo con của bạn hạnh phúc – rất nhiều tình yêu thương, thức ăn ngon, nước sạch, môi trường an toàn và chăm sóc sức khỏe tốt.",
    warranty:
      "Trả góp LS 0% trong 12 tháng (Chi tiết) Bảo hành lên tới 365 ngày. Bảo hiểm sức khỏe lên tới 1,000,000đ Miễn phí vận chuyển toàn quốc (Chi tiết) Giảm 500,000đ khi mua bé thứ 2. Giảm trọn đời 5% khi mua phụ kiện. Giảm trọn đời 20% Spa cắt tỉa – Áp dụng với KH khu vực Hà Nội.",
    sale: 25,
  },
  {
    type: 1,
    id: 13,
    name: "Catsrang 5kg",
    price: "400.000 VNĐ",
    des: "Mèo Anh lông ngắn Silver xuất sứ Thái Lan. Đã tiêm phòng và có chứng từ đầy đủ",
    quantity: 10,
    rate: 3.9,
    image: "/img/food-thumbnail/3.jpg",
    about:
      "Mèo Anh lông ngắn là giống mèo dễ chăm sóc. Chúng không có vấn đề sức khỏe bẩm sinh, không có yêu cầu chế độ ăn uống đặc biệt và là vật nuôi vui vẻ, hòa đồng. Chúng khỏe mạnh, thông minh, tình cảm và là những con mèo nhà lý tưởng.Mèo Anh lông ngắn trưởng thành thường nặng từ 11 – 15 pound đối với con đực và 8 – 12 pound đối với con cái. Sẽ không mất nhiều thời gian để giữ cho mèo hoặc mèo con của bạn hạnh phúc – rất nhiều tình yêu thương, thức ăn ngon, nước sạch, môi trường an toàn và chăm sóc sức khỏe tốt.",
    warranty:
      "Trả góp LS 0% trong 12 tháng (Chi tiết) Bảo hành lên tới 365 ngày. Bảo hiểm sức khỏe lên tới 1,000,000đ Miễn phí vận chuyển toàn quốc (Chi tiết) Giảm 500,000đ khi mua bé thứ 2. Giảm trọn đời 5% khi mua phụ kiện. Giảm trọn đời 20% Spa cắt tỉa – Áp dụng với KH khu vực Hà Nội.",
    sale: 15,
  },
  {
    type: 1,
    id: 14,
    name: "Me-O Adult Cá ngừ 1.2kg",
    price: "120.000 VNĐ",
    des: "Mèo Anh lông ngắn Silver xuất sứ Thái Lan. Đã tiêm phòng và có chứng từ đầy đủ",
    quantity: 10,
    rate: 4.1,
    image: "/img/food-thumbnail/4.jpg",
    about:
      "Mèo Anh lông ngắn là giống mèo dễ chăm sóc. Chúng không có vấn đề sức khỏe bẩm sinh, không có yêu cầu chế độ ăn uống đặc biệt và là vật nuôi vui vẻ, hòa đồng. Chúng khỏe mạnh, thông minh, tình cảm và là những con mèo nhà lý tưởng.Mèo Anh lông ngắn trưởng thành thường nặng từ 11 – 15 pound đối với con đực và 8 – 12 pound đối với con cái. Sẽ không mất nhiều thời gian để giữ cho mèo hoặc mèo con của bạn hạnh phúc – rất nhiều tình yêu thương, thức ăn ngon, nước sạch, môi trường an toàn và chăm sóc sức khỏe tốt.",
    warranty:
      "Trả góp LS 0% trong 12 tháng (Chi tiết) Bảo hành lên tới 365 ngày. Bảo hiểm sức khỏe lên tới 1,000,000đ Miễn phí vận chuyển toàn quốc (Chi tiết) Giảm 500,000đ khi mua bé thứ 2. Giảm trọn đời 5% khi mua phụ kiện. Giảm trọn đời 20% Spa cắt tỉa – Áp dụng với KH khu vực Hà Nội.",
    sale: 67,
  },
  {
    type: 1,
    id: 15,
    name: "Me-O Adult Hải sản 1.2kg",
    price: "120.000 VNĐ",
    des: "Mèo Anh lông ngắn Silver xuất sứ Thái Lan. Đã tiêm phòng và có chứng từ đầy đủ",
    quantity: 10,
    rate: 4.2,
    image: "/img/food-thumbnail/5.jpg",
    about:
      "Mèo Anh lông ngắn là giống mèo dễ chăm sóc. Chúng không có vấn đề sức khỏe bẩm sinh, không có yêu cầu chế độ ăn uống đặc biệt và là vật nuôi vui vẻ, hòa đồng. Chúng khỏe mạnh, thông minh, tình cảm và là những con mèo nhà lý tưởng.Mèo Anh lông ngắn trưởng thành thường nặng từ 11 – 15 pound đối với con đực và 8 – 12 pound đối với con cái. Sẽ không mất nhiều thời gian để giữ cho mèo hoặc mèo con của bạn hạnh phúc – rất nhiều tình yêu thương, thức ăn ngon, nước sạch, môi trường an toàn và chăm sóc sức khỏe tốt.",
    warranty:
      "Trả góp LS 0% trong 12 tháng (Chi tiết) Bảo hành lên tới 365 ngày. Bảo hiểm sức khỏe lên tới 1,000,000đ Miễn phí vận chuyển toàn quốc (Chi tiết) Giảm 500,000đ khi mua bé thứ 2. Giảm trọn đời 5% khi mua phụ kiện. Giảm trọn đời 20% Spa cắt tỉa – Áp dụng với KH khu vực Hà Nội.",
    sale: 69,
  },
  {
    type: 1,
    id: 16,
    name: "Me-O Adult Cá thu 1.2kg",
    price: "120.000 VNĐ",
    des: "Mèo Anh lông ngắn Silver xuất sứ Thái Lan. Đã tiêm phòng và có chứng từ đầy đủ",
    quantity: 10,
    rate: 4,
    image: "/img/food-thumbnail/6.jpg",
    about:
      "Mèo Anh lông ngắn là giống mèo dễ chăm sóc. Chúng không có vấn đề sức khỏe bẩm sinh, không có yêu cầu chế độ ăn uống đặc biệt và là vật nuôi vui vẻ, hòa đồng. Chúng khỏe mạnh, thông minh, tình cảm và là những con mèo nhà lý tưởng.Mèo Anh lông ngắn trưởng thành thường nặng từ 11 – 15 pound đối với con đực và 8 – 12 pound đối với con cái. Sẽ không mất nhiều thời gian để giữ cho mèo hoặc mèo con của bạn hạnh phúc – rất nhiều tình yêu thương, thức ăn ngon, nước sạch, môi trường an toàn và chăm sóc sức khỏe tốt.",
    warranty:
      "Trả góp LS 0% trong 12 tháng (Chi tiết) Bảo hành lên tới 365 ngày. Bảo hiểm sức khỏe lên tới 1,000,000đ Miễn phí vận chuyển toàn quốc (Chi tiết) Giảm 500,000đ khi mua bé thứ 2. Giảm trọn đời 5% khi mua phụ kiện. Giảm trọn đời 20% Spa cắt tỉa – Áp dụng với KH khu vực Hà Nội.",
    sale: 46,
  },
  {
    type: 1,
    id: 17,
    name: "Royal Canin 2kg",
    price: "500.000 VNĐ",
    des: "Mèo Anh lông ngắn Silver xuất sứ Thái Lan. Đã tiêm phòng và có chứng từ đầy đủ",
    quantity: 10,
    rate: 4.7,
    image: "/img/food-thumbnail/7.jpg",
    about:
      "Mèo Anh lông ngắn là giống mèo dễ chăm sóc. Chúng không có vấn đề sức khỏe bẩm sinh, không có yêu cầu chế độ ăn uống đặc biệt và là vật nuôi vui vẻ, hòa đồng. Chúng khỏe mạnh, thông minh, tình cảm và là những con mèo nhà lý tưởng.Mèo Anh lông ngắn trưởng thành thường nặng từ 11 – 15 pound đối với con đực và 8 – 12 pound đối với con cái. Sẽ không mất nhiều thời gian để giữ cho mèo hoặc mèo con của bạn hạnh phúc – rất nhiều tình yêu thương, thức ăn ngon, nước sạch, môi trường an toàn và chăm sóc sức khỏe tốt.",
    warranty:
      "Trả góp LS 0% trong 12 tháng (Chi tiết) Bảo hành lên tới 365 ngày. Bảo hiểm sức khỏe lên tới 1,000,000đ Miễn phí vận chuyển toàn quốc (Chi tiết) Giảm 500,000đ khi mua bé thứ 2. Giảm trọn đời 5% khi mua phụ kiện. Giảm trọn đời 20% Spa cắt tỉa – Áp dụng với KH khu vực Hà Nội.",
    sale: 94,
  },
  {
    type: 1,
    id: 18,
    name: "Royal Canin kitten 2kg",
    price: "500.000 VNĐ",
    des: "Mèo Anh lông ngắn Silver xuất sứ Thái Lan. Đã tiêm phòng và có chứng từ đầy đủ",
    quantity: 10,
    rate: 4.7,
    image: "/img/food-thumbnail/8.jpg",
    about:
      "Mèo Anh lông ngắn là giống mèo dễ chăm sóc. Chúng không có vấn đề sức khỏe bẩm sinh, không có yêu cầu chế độ ăn uống đặc biệt và là vật nuôi vui vẻ, hòa đồng. Chúng khỏe mạnh, thông minh, tình cảm và là những con mèo nhà lý tưởng.Mèo Anh lông ngắn trưởng thành thường nặng từ 11 – 15 pound đối với con đực và 8 – 12 pound đối với con cái. Sẽ không mất nhiều thời gian để giữ cho mèo hoặc mèo con của bạn hạnh phúc – rất nhiều tình yêu thương, thức ăn ngon, nước sạch, môi trường an toàn và chăm sóc sức khỏe tốt.",
    warranty:
      "Trả góp LS 0% trong 12 tháng (Chi tiết) Bảo hành lên tới 365 ngày. Bảo hiểm sức khỏe lên tới 1,000,000đ Miễn phí vận chuyển toàn quốc (Chi tiết) Giảm 500,000đ khi mua bé thứ 2. Giảm trọn đời 5% khi mua phụ kiện. Giảm trọn đời 20% Spa cắt tỉa – Áp dụng với KH khu vực Hà Nội.",
    sale: 94,
  },
  {
    type: 1,
    id: 19,
    name: "Whiskas Adult Cá thu 1.2kg",
    price: "115.000 VNĐ",
    des: "Mèo Anh lông ngắn Silver xuất sứ Thái Lan. Đã tiêm phòng và có chứng từ đầy đủ",
    quantity: 10,
    rate: 4.2,
    image: "/img/food-thumbnail/9.jpg",
    about:
      "Mèo Anh lông ngắn là giống mèo dễ chăm sóc. Chúng không có vấn đề sức khỏe bẩm sinh, không có yêu cầu chế độ ăn uống đặc biệt và là vật nuôi vui vẻ, hòa đồng. Chúng khỏe mạnh, thông minh, tình cảm và là những con mèo nhà lý tưởng.Mèo Anh lông ngắn trưởng thành thường nặng từ 11 – 15 pound đối với con đực và 8 – 12 pound đối với con cái. Sẽ không mất nhiều thời gian để giữ cho mèo hoặc mèo con của bạn hạnh phúc – rất nhiều tình yêu thương, thức ăn ngon, nước sạch, môi trường an toàn và chăm sóc sức khỏe tốt.",
    warranty:
      "Trả góp LS 0% trong 12 tháng (Chi tiết) Bảo hành lên tới 365 ngày. Bảo hiểm sức khỏe lên tới 1,000,000đ Miễn phí vận chuyển toàn quốc (Chi tiết) Giảm 500,000đ khi mua bé thứ 2. Giảm trọn đời 5% khi mua phụ kiện. Giảm trọn đời 20% Spa cắt tỉa – Áp dụng với KH khu vực Hà Nội.",
    sale: 56,
  },
  {
    type: 1,
    id: 20,
    name: "Zenith Cat 1.2kg",
    price: "220.000 VNĐ",
    des: "Mèo Anh lông ngắn Silver xuất sứ Thái Lan. Đã tiêm phòng và có chứng từ đầy đủ",
    quantity: 10,
    rate: 4.1,
    image: "/img/food-thumbnail/10.jpg",
    about:
      "Mèo Anh lông ngắn là giống mèo dễ chăm sóc. Chúng không có vấn đề sức khỏe bẩm sinh, không có yêu cầu chế độ ăn uống đặc biệt và là vật nuôi vui vẻ, hòa đồng. Chúng khỏe mạnh, thông minh, tình cảm và là những con mèo nhà lý tưởng.Mèo Anh lông ngắn trưởng thành thường nặng từ 11 – 15 pound đối với con đực và 8 – 12 pound đối với con cái. Sẽ không mất nhiều thời gian để giữ cho mèo hoặc mèo con của bạn hạnh phúc – rất nhiều tình yêu thương, thức ăn ngon, nước sạch, môi trường an toàn và chăm sóc sức khỏe tốt.",
    warranty:
      "Trả góp LS 0% trong 12 tháng (Chi tiết) Bảo hành lên tới 365 ngày. Bảo hiểm sức khỏe lên tới 1,000,000đ Miễn phí vận chuyển toàn quốc (Chi tiết) Giảm 500,000đ khi mua bé thứ 2. Giảm trọn đời 5% khi mua phụ kiện. Giảm trọn đời 20% Spa cắt tỉa – Áp dụng với KH khu vực Hà Nội.",
    sale: 44,
  },
  {
    type: 2,
    id: 21,
    name: "Bát gắn chuồng inox",
    price: "80.000 VNĐ",
    des: "Mèo Anh lông ngắn Silver xuất sứ Thái Lan. Đã tiêm phòng và có chứng từ đầy đủ",
    quantity: 10,
    rate: 4,
    image: "/img/accessories-thumbnail/1.jpg",
    about:
      "Mèo Anh lông ngắn là giống mèo dễ chăm sóc. Chúng không có vấn đề sức khỏe bẩm sinh, không có yêu cầu chế độ ăn uống đặc biệt và là vật nuôi vui vẻ, hòa đồng. Chúng khỏe mạnh, thông minh, tình cảm và là những con mèo nhà lý tưởng.Mèo Anh lông ngắn trưởng thành thường nặng từ 11 – 15 pound đối với con đực và 8 – 12 pound đối với con cái. Sẽ không mất nhiều thời gian để giữ cho mèo hoặc mèo con của bạn hạnh phúc – rất nhiều tình yêu thương, thức ăn ngon, nước sạch, môi trường an toàn và chăm sóc sức khỏe tốt.",
    warranty:
      "Trả góp LS 0% trong 12 tháng (Chi tiết) Bảo hành lên tới 365 ngày. Bảo hiểm sức khỏe lên tới 1,000,000đ Miễn phí vận chuyển toàn quốc (Chi tiết) Giảm 500,000đ khi mua bé thứ 2. Giảm trọn đời 5% khi mua phụ kiện. Giảm trọn đời 20% Spa cắt tỉa – Áp dụng với KH khu vực Hà Nội.",
    sale: 58,
  },
  {
    type: 2,
    id: 22,
    name: "Bát ốc sên đơn lõi inox",
    price: "60.000 VNĐ",
    des: "Mèo Anh lông ngắn Silver xuất sứ Thái Lan. Đã tiêm phòng và có chứng từ đầy đủ",
    quantity: 10,
    rate: 4,
    image: "/img/accessories-thumbnail/2.jpg",
    about:
      "Mèo Anh lông ngắn là giống mèo dễ chăm sóc. Chúng không có vấn đề sức khỏe bẩm sinh, không có yêu cầu chế độ ăn uống đặc biệt và là vật nuôi vui vẻ, hòa đồng. Chúng khỏe mạnh, thông minh, tình cảm và là những con mèo nhà lý tưởng.Mèo Anh lông ngắn trưởng thành thường nặng từ 11 – 15 pound đối với con đực và 8 – 12 pound đối với con cái. Sẽ không mất nhiều thời gian để giữ cho mèo hoặc mèo con của bạn hạnh phúc – rất nhiều tình yêu thương, thức ăn ngon, nước sạch, môi trường an toàn và chăm sóc sức khỏe tốt.",
    warranty:
      "Trả góp LS 0% trong 12 tháng (Chi tiết) Bảo hành lên tới 365 ngày. Bảo hiểm sức khỏe lên tới 1,000,000đ Miễn phí vận chuyển toàn quốc (Chi tiết) Giảm 500,000đ khi mua bé thứ 2. Giảm trọn đời 5% khi mua phụ kiện. Giảm trọn đời 20% Spa cắt tỉa – Áp dụng với KH khu vực Hà Nội.",
    sale: 25,
  },
  {
    type: 2,
    id: 23,
    name: "Găng tay cào lông",
    price: "50.000 VNĐ",
    des: "Mèo Anh lông ngắn Silver xuất sứ Thái Lan. Đã tiêm phòng và có chứng từ đầy đủ",
    quantity: 10,
    rate: 3.9,
    image: "/img/accessories-thumbnail/3.jpg",
    about:
      "Mèo Anh lông ngắn là giống mèo dễ chăm sóc. Chúng không có vấn đề sức khỏe bẩm sinh, không có yêu cầu chế độ ăn uống đặc biệt và là vật nuôi vui vẻ, hòa đồng. Chúng khỏe mạnh, thông minh, tình cảm và là những con mèo nhà lý tưởng.Mèo Anh lông ngắn trưởng thành thường nặng từ 11 – 15 pound đối với con đực và 8 – 12 pound đối với con cái. Sẽ không mất nhiều thời gian để giữ cho mèo hoặc mèo con của bạn hạnh phúc – rất nhiều tình yêu thương, thức ăn ngon, nước sạch, môi trường an toàn và chăm sóc sức khỏe tốt.",
    warranty:
      "Trả góp LS 0% trong 12 tháng (Chi tiết) Bảo hành lên tới 365 ngày. Bảo hiểm sức khỏe lên tới 1,000,000đ Miễn phí vận chuyển toàn quốc (Chi tiết) Giảm 500,000đ khi mua bé thứ 2. Giảm trọn đời 5% khi mua phụ kiện. Giảm trọn đời 20% Spa cắt tỉa – Áp dụng với KH khu vực Hà Nội.",
    sale: 15,
  },
  {
    type: 2,
    id: 24,
    name: "Bộ giáng sinh",
    price: "80.000 VNĐ",
    des: "Mèo Anh lông ngắn Silver xuất sứ Thái Lan. Đã tiêm phòng và có chứng từ đầy đủ",
    quantity: 10,
    rate: 4.1,
    image: "/img/accessories-thumbnail/4.jpg",
    about:
      "Mèo Anh lông ngắn là giống mèo dễ chăm sóc. Chúng không có vấn đề sức khỏe bẩm sinh, không có yêu cầu chế độ ăn uống đặc biệt và là vật nuôi vui vẻ, hòa đồng. Chúng khỏe mạnh, thông minh, tình cảm và là những con mèo nhà lý tưởng.Mèo Anh lông ngắn trưởng thành thường nặng từ 11 – 15 pound đối với con đực và 8 – 12 pound đối với con cái. Sẽ không mất nhiều thời gian để giữ cho mèo hoặc mèo con của bạn hạnh phúc – rất nhiều tình yêu thương, thức ăn ngon, nước sạch, môi trường an toàn và chăm sóc sức khỏe tốt.",
    warranty:
      "Trả góp LS 0% trong 12 tháng (Chi tiết) Bảo hành lên tới 365 ngày. Bảo hiểm sức khỏe lên tới 1,000,000đ Miễn phí vận chuyển toàn quốc (Chi tiết) Giảm 500,000đ khi mua bé thứ 2. Giảm trọn đời 5% khi mua phụ kiện. Giảm trọn đời 20% Spa cắt tỉa – Áp dụng với KH khu vực Hà Nội.",
    sale: 67,
  },
  {
    type: 2,
    id: 25,
    name: "Cần câu mèo",
    price: "50.000 VNĐ",
    des: "Mèo Anh lông ngắn Silver xuất sứ Thái Lan. Đã tiêm phòng và có chứng từ đầy đủ",
    quantity: 10,
    rate: 4.2,
    image: "/img/accessories-thumbnail/5.jpg",
    about:
      "Mèo Anh lông ngắn là giống mèo dễ chăm sóc. Chúng không có vấn đề sức khỏe bẩm sinh, không có yêu cầu chế độ ăn uống đặc biệt và là vật nuôi vui vẻ, hòa đồng. Chúng khỏe mạnh, thông minh, tình cảm và là những con mèo nhà lý tưởng.Mèo Anh lông ngắn trưởng thành thường nặng từ 11 – 15 pound đối với con đực và 8 – 12 pound đối với con cái. Sẽ không mất nhiều thời gian để giữ cho mèo hoặc mèo con của bạn hạnh phúc – rất nhiều tình yêu thương, thức ăn ngon, nước sạch, môi trường an toàn và chăm sóc sức khỏe tốt.",
    warranty:
      "Trả góp LS 0% trong 12 tháng (Chi tiết) Bảo hành lên tới 365 ngày. Bảo hiểm sức khỏe lên tới 1,000,000đ Miễn phí vận chuyển toàn quốc (Chi tiết) Giảm 500,000đ khi mua bé thứ 2. Giảm trọn đời 5% khi mua phụ kiện. Giảm trọn đời 20% Spa cắt tỉa – Áp dụng với KH khu vực Hà Nội.",
    sale: 69,
  },
  {
    type: 2,
    id: 26,
    name: "Chuột cào móng",
    price: "110.000 VNĐ",
    des: "Mèo Anh lông ngắn Silver xuất sứ Thái Lan. Đã tiêm phòng và có chứng từ đầy đủ",
    quantity: 10,
    rate: 4,
    image: "/img/accessories-thumbnail/6.jpg",
    about:
      "Mèo Anh lông ngắn là giống mèo dễ chăm sóc. Chúng không có vấn đề sức khỏe bẩm sinh, không có yêu cầu chế độ ăn uống đặc biệt và là vật nuôi vui vẻ, hòa đồng. Chúng khỏe mạnh, thông minh, tình cảm và là những con mèo nhà lý tưởng.Mèo Anh lông ngắn trưởng thành thường nặng từ 11 – 15 pound đối với con đực và 8 – 12 pound đối với con cái. Sẽ không mất nhiều thời gian để giữ cho mèo hoặc mèo con của bạn hạnh phúc – rất nhiều tình yêu thương, thức ăn ngon, nước sạch, môi trường an toàn và chăm sóc sức khỏe tốt.",
    warranty:
      "Trả góp LS 0% trong 12 tháng (Chi tiết) Bảo hành lên tới 365 ngày. Bảo hiểm sức khỏe lên tới 1,000,000đ Miễn phí vận chuyển toàn quốc (Chi tiết) Giảm 500,000đ khi mua bé thứ 2. Giảm trọn đời 5% khi mua phụ kiện. Giảm trọn đời 20% Spa cắt tỉa – Áp dụng với KH khu vực Hà Nội.",
    sale: 46,
  },
  {
    type: 2,
    id: 27,
    name: "Vương miện công chúa",
    price: "50.000 VNĐ",
    des: "Mèo Anh lông ngắn Silver xuất sứ Thái Lan. Đã tiêm phòng và có chứng từ đầy đủ",
    quantity: 10,
    rate: 4.7,
    image: "/img/accessories-thumbnail/7.jpg",
    about:
      "Mèo Anh lông ngắn là giống mèo dễ chăm sóc. Chúng không có vấn đề sức khỏe bẩm sinh, không có yêu cầu chế độ ăn uống đặc biệt và là vật nuôi vui vẻ, hòa đồng. Chúng khỏe mạnh, thông minh, tình cảm và là những con mèo nhà lý tưởng.Mèo Anh lông ngắn trưởng thành thường nặng từ 11 – 15 pound đối với con đực và 8 – 12 pound đối với con cái. Sẽ không mất nhiều thời gian để giữ cho mèo hoặc mèo con của bạn hạnh phúc – rất nhiều tình yêu thương, thức ăn ngon, nước sạch, môi trường an toàn và chăm sóc sức khỏe tốt.",
    warranty:
      "Trả góp LS 0% trong 12 tháng (Chi tiết) Bảo hành lên tới 365 ngày. Bảo hiểm sức khỏe lên tới 1,000,000đ Miễn phí vận chuyển toàn quốc (Chi tiết) Giảm 500,000đ khi mua bé thứ 2. Giảm trọn đời 5% khi mua phụ kiện. Giảm trọn đời 20% Spa cắt tỉa – Áp dụng với KH khu vực Hà Nội.",
    sale: 94,
  },
  {
    type: 2,
    id: 28,
    name: "Cát vệ sinh Yuki 15l",
    price: "115.000 VNĐ",
    des: "Mèo Anh lông ngắn Silver xuất sứ Thái Lan. Đã tiêm phòng và có chứng từ đầy đủ",
    quantity: 10,
    rate: 4.2,
    image: "/img/accessories-thumbnail/8.jpg",
    about:
      "Mèo Anh lông ngắn là giống mèo dễ chăm sóc. Chúng không có vấn đề sức khỏe bẩm sinh, không có yêu cầu chế độ ăn uống đặc biệt và là vật nuôi vui vẻ, hòa đồng. Chúng khỏe mạnh, thông minh, tình cảm và là những con mèo nhà lý tưởng.Mèo Anh lông ngắn trưởng thành thường nặng từ 11 – 15 pound đối với con đực và 8 – 12 pound đối với con cái. Sẽ không mất nhiều thời gian để giữ cho mèo hoặc mèo con của bạn hạnh phúc – rất nhiều tình yêu thương, thức ăn ngon, nước sạch, môi trường an toàn và chăm sóc sức khỏe tốt.",
    warranty:
      "Trả góp LS 0% trong 12 tháng (Chi tiết) Bảo hành lên tới 365 ngày. Bảo hiểm sức khỏe lên tới 1,000,000đ Miễn phí vận chuyển toàn quốc (Chi tiết) Giảm 500,000đ khi mua bé thứ 2. Giảm trọn đời 5% khi mua phụ kiện. Giảm trọn đời 20% Spa cắt tỉa – Áp dụng với KH khu vực Hà Nội.",
    sale: 56,
  },
  {
    type: 2,
    id: 29,
    name: "Cát vệ sinh Yuki",
    price: "60.000 VNĐ",
    des: "Mèo Anh lông ngắn Silver xuất sứ Thái Lan. Đã tiêm phòng và có chứng từ đầy đủ",
    quantity: 10,
    rate: 4.1,
    image: "/img/accessories-thumbnail/8.jpg",
    about:
      "Mèo Anh lông ngắn là giống mèo dễ chăm sóc. Chúng không có vấn đề sức khỏe bẩm sinh, không có yêu cầu chế độ ăn uống đặc biệt và là vật nuôi vui vẻ, hòa đồng. Chúng khỏe mạnh, thông minh, tình cảm và là những con mèo nhà lý tưởng.Mèo Anh lông ngắn trưởng thành thường nặng từ 11 – 15 pound đối với con đực và 8 – 12 pound đối với con cái. Sẽ không mất nhiều thời gian để giữ cho mèo hoặc mèo con của bạn hạnh phúc – rất nhiều tình yêu thương, thức ăn ngon, nước sạch, môi trường an toàn và chăm sóc sức khỏe tốt.",
    warranty:
      "Trả góp LS 0% trong 12 tháng (Chi tiết) Bảo hành lên tới 365 ngày. Bảo hiểm sức khỏe lên tới 1,000,000đ Miễn phí vận chuyển toàn quốc (Chi tiết) Giảm 500,000đ khi mua bé thứ 2. Giảm trọn đời 5% khi mua phụ kiện. Giảm trọn đời 20% Spa cắt tỉa – Áp dụng với KH khu vực Hà Nội.",
    sale: 44,
  },
  {
    type: 2,
    id: 30,
    name: "Đệm bông Doraemon",
    price: "310.000 VNĐ",
    des: "Mèo Anh lông ngắn Silver xuất sứ Thái Lan. Đã tiêm phòng và có chứng từ đầy đủ",
    quantity: 10,
    rate: 4.1,
    image: "/img/accessories-thumbnail/10.jpg",
    about:
      "Mèo Anh lông ngắn là giống mèo dễ chăm sóc. Chúng không có vấn đề sức khỏe bẩm sinh, không có yêu cầu chế độ ăn uống đặc biệt và là vật nuôi vui vẻ, hòa đồng. Chúng khỏe mạnh, thông minh, tình cảm và là những con mèo nhà lý tưởng.Mèo Anh lông ngắn trưởng thành thường nặng từ 11 – 15 pound đối với con đực và 8 – 12 pound đối với con cái. Sẽ không mất nhiều thời gian để giữ cho mèo hoặc mèo con của bạn hạnh phúc – rất nhiều tình yêu thương, thức ăn ngon, nước sạch, môi trường an toàn và chăm sóc sức khỏe tốt.",
    warranty:
      "Trả góp LS 0% trong 12 tháng (Chi tiết) Bảo hành lên tới 365 ngày. Bảo hiểm sức khỏe lên tới 1,000,000đ Miễn phí vận chuyển toàn quốc (Chi tiết) Giảm 500,000đ khi mua bé thứ 2. Giảm trọn đời 5% khi mua phụ kiện. Giảm trọn đời 20% Spa cắt tỉa – Áp dụng với KH khu vực Hà Nội.",
    sale: 44,
  },
];

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
      console.log(t.id);
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

renderDetail(allProduct);
