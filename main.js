document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search-bar input");
  const searchBtn = document.querySelector(".search-bar button");
  const products = document.querySelectorAll(".products .product");
  const userButtonsDiv = document.querySelector(".user-buttons");
  const modal = document.getElementById("orderModal");
  const closeBtn = modal ? modal.querySelector(".close-btn") : null;
  const orderForm = document.getElementById("orderForm");
  const productInput = document.getElementById("product");
  const addToCartButtons = document.querySelectorAll(".order-btn");
  const cartItemsUl = document.getElementById("cartItems");
  const totalPriceSpan = document.getElementById("totalPrice");
  const checkoutBtn = document.getElementById("checkoutBtn");

  // --- MỞ ĐÓNG GIỎ HÀNG ---
  const cartDiv = document.getElementById("cart");
  const openCartBtn = document.getElementById("open-cart-btn");
  const closeCartBtn = document.getElementById("close-cart-btn");

  if (openCartBtn && cartDiv) {
    openCartBtn.addEventListener("click", () => {
      cartDiv.style.display = "block";
    });
  }

  if (closeCartBtn && cartDiv) {
    closeCartBtn.addEventListener("click", () => {
      cartDiv.style.display = "none";
    });
  }

  // Modal chi tiết sản phẩm
  const productDetailModal = document.getElementById("productDetailModal");
  const closeDetailBtn = productDetailModal
    ? productDetailModal.querySelector(".close-detail-btn")
    : null;
  const detailProductName = document.getElementById("detailProductName");
  const detailProductImage = document.getElementById("detailProductImage");
  const detailProductPrice = document.getElementById("detailProductPrice");
  const detailProductDescription = document.getElementById(
    "detailProductDescription"
  );

  const productDetails = {
    "iPhone 13 Pro": {
      price: "20.000.000đ",
      image: "./anh/ip13.jpg",
      description:
        "iPhone 13 Pro với màn hình Super Retina XDR, chip A15 Bionic, camera chuyên nghiệp, hiệu năng mạnh mẽ.",
    },
    "Samsung Galaxy S22": {
      price: "18.000.000đ",
      image: "./anh/s22.jpg",
      description:
        "Samsung Galaxy S22 với màn hình Dynamic AMOLED 2X, camera đa năng, pin lâu dài, hỗ trợ 5G.",
    },
    "Xiaomi Mi 12": {
      price: "12.000.000đ",
      image: "./anh/xiaomi.jpg",
      description:
        "Xiaomi Mi 12 hiệu năng cao, camera chất lượng, thiết kế hiện đại, giá cạnh tranh.",
    },
    "Oppo Find X5": {
      price: "15.000.000đ",
      image: "./anh/oppo.jpg",
      description:
        "Oppo Find X5 với camera Hasselblad, chip Snapdragon 888, sạc nhanh 80W.",
    },
    "Realme GT 2": {
      price: "11.000.000đ",
      image: "./anh/readme.jpg",
      description:
        "Realme GT 2: Mạnh mẽ, giá tốt, màn hình AMOLED 120Hz, pin 5000mAh.",
    },
    "Vivo X80": {
      price: "14.000.000đ",
      image: "./anh/vivo.webp",
      description:
        "Vivo X80 với camera Zeiss, chip Snapdragon 8 Gen 1, thiết kế sang trọng.",
    },
    "Iphone 11": {
      price: "10.650.000 ₫",
      image: "./anh/ip11.jpg",
      description:
        "iPhone 11 Pro Max cũ, hiệu năng ổn định, màn hình Liquid Retina, camera kép.",
    },
    "Sạc nhanh Anker 20W": {
      price: "400000",
      image: "./anh/sac.png",
      description:
        "Sạc nhanh Anker 20W, hỗ trợ sạc nhanh an toàn và hiệu quả.",
    },
    "Tai nghe Bluetooth JBL": {
      price: "1500000",
      image: "./anh/jbl-tune-500bt-768x768.jpg",
      description:
        "Tai nghe Bluetooth JBL với âm thanh chất lượng và thiết kế tiện dụng.",
    },
    "iPhone 14 Pro Max": {
      price: "31.000.000đ",
      image: "./anh/ip14promax.jpg",
      description:
        "iPhone 14 Pro Max với màn hình Super Retina XDR, chip A15 Bionic, camera chuyên nghiệp, hiệu năng mạnh mẽ.",
    },
    "iPhone 13 Mini": {
      price: "19.000.000đ",
      image: "./anh/ip13mini.jpg",
      description:
        "iPhone 13 Mini nhỏ gọn, hiệu năng tốt, pin lâu, camera sắc nét.",
    },
    "Samsung Galaxy S23 Ultra": {
      price: "28.000.000đ",
      image: "./anh/s23ultra.jpg",
      description:
        "Samsung Galaxy S23 Ultra với màn hình Dynamic AMOLED 2X, camera cao cấp, pin trâu, hỗ trợ 5G.",
    },
    "Samsung Galaxy A73": {
      price: "9.000.000đ",
      image: "./anh/galaxya73.jpg",
      description:
        "Samsung Galaxy A73 thiết kế đẹp, hiệu năng ổn, pin lâu, giá hợp lý.",
    },
    "Oppo Reno8 Pro": {
      price: "13.000.000đ",
      image: "./anh/reno8pro.jpg",
      description:
        "Oppo Reno8 Pro với camera sắc nét, chip mạnh, sạc nhanh.",
    },
    "Oppo A96": {
      price: "7.500.000đ",
      image: "./anh/oppoa96.jpg",
      description:
        "Oppo A96 giá rẻ, pin khỏe, thiết kế hiện đại.",
    },
    "Realme 11x": {
      price: "8.500.000đ",
      image: "./anh/realme11x.jpg",
      description:
        "Realme 11x hiệu năng tốt, màn hình mượt mà, pin lớn.",
    },
    "Realme GT Neo 5": {
      price: "9.000.000đ",
      image: "./anh/realmegtneo5.jpg",
      description:
        "Realme GT Neo 5 mạnh mẽ, chơi game tốt, sạc nhanh.",
    },
    "Xiaomi Redmi Note 12 Pro": {
      price: "9.000.000đ",
      image: "./anh/redminote12pro.jpg",
      description:
        "Xiaomi Redmi Note 12 Pro màn hình đẹp, camera tốt, giá hợp lý.",
    },
    "Xiaomi Poco X5 Pro": {
      price: "8.500.000đ",
      image: "./anh/pocox5pro.jpg",
      description:
        "Xiaomi Poco X5 Pro hiệu năng cao, pin trâu, màn hình sắc nét.",
    },
    "Tai nghe Bluetooth Samsung Buds2 Pro": {
      price: "3.200.000đ",
      image: "./anh/buds2pro.jpg",
      description:
        "Tặng hộp sạc chính hãng Samsung.",
    },
    "Ốp lưng MagSafe iPhone 14": {
      price: "490.000đ",
      image: "./anh/opmagsafe.jpg",
      description:
        "Tương thích sạc không dây MagSafe.",
    },
    "Sạc nhanh Apple 20W USB-C": {
      price: "550.000đ",
      image: "./anh/sacapple20w.jpg",
      description:
        "Chính hãng Apple, bảo hành 1 năm.",
    },
    "Cáp Type-C Anker Powerline+ II 1m": {
      price: "390.000đ",
      image: "./anh/capan1m.jpg",
      description:
        "Chống rối, chống gãy đầu cáp.",
    },
    "Pin dự phòng Xiaomi 10000mAh Gen 3": {
      price: "590.000đ",
      image: "./anh/xiaomi-powerbank.jpg",
      description:
        "Sạc nhanh 18W, siêu nhẹ, tiện lợi.",
    },
    "Kính cường lực Samsung S23 Ultra": {
      price: "250.000đ",
      image: "./anh/cuongluc-s23.jpg",
      description:
        "Chống vân tay, chống trầy xước cực tốt.",
    },
    "Giá đỡ điện thoại để bàn": {
      price: "180.000đ",
      image: "./anh/giadodienthoai.jpg",
      description:
        "Có thể điều chỉnh độ cao và góc xoay.",
    },
    "Đồng hồ thông minh Amazfit Bip U": {
      price: "1.290.000đ",
      image: "./anh/amazfit.jpg",
      description:
        "Theo dõi nhịp tim, giấc ngủ, thể thao.",
    },
    "Quạt tản nhiệt điện thoại MEMO DL05": {
      price: "350.000đ",
      image: "./anh/quatmemo.jpg",
      description:
        "Hỗ trợ chơi game mượt, không nóng máy.",
    },
    "Chuột không dây Logitech M331 Silent": {
      price: "490.000đ",
      image: "./anh/logitech-m331.jpg",
      description:
        "Click êm ái, pin 24 tháng, chính hãng Logitech.",
    },
    "Loa Bluetooth JBL Go 3": {
      price: "890.000đ",
      image: "./anh/jblgo3.jpg",
      description:
        "Âm thanh mạnh mẽ, chống nước IP67.",
    },
    "Balo Laptop Lenovo B210": {
      price: "590.000đ",
      image: "./anh/balo-lenovo.jpg",
      description:
        "Chống nước, bảo vệ laptop 15.6 inch.",
    },
    "Miếng lót chuột RGB gaming": {
      price: "320.000đ",
      image: "./anh/lotchuotrgb.jpg",
      description:
        "Nhiều màu LED, hỗ trợ sạc không dây.",
    },
    "Webcam Logitech C270 HD": {
      price: "750.000đ",
      image: "./anh/webcam-c270.jpg",
      description:
        "Video HD 720p, mic chống ồn tích hợp.",
    },
    "USB Sandisk 64GB 3.1": {
      price: "250.000đ",
      image: "./anh/usb64gb.jpg",
      description:
        "Tốc độ đọc 130MB/s, bảo hành 5 năm.",
    },
  };

  let cart = [];

  // -- Phần lọc hãng --
  const brandFilters = document.querySelectorAll(".brand-filter");

  // 1. Tìm kiếm và lọc sản phẩm theo hãng
  function filterProducts() {
    const keyword = searchInput.value.trim().toLowerCase();
    const activeBrandLink = document.querySelector(".brand-filter.active");
    const brand = activeBrandLink ? activeBrandLink.dataset.brand.toLowerCase() : "all";

    products.forEach((product) => {
      const name = product.querySelector("h3").textContent.toLowerCase();
      const productBrand = (product.dataset.brand || "").toLowerCase();

      const matchKeyword = name.includes(keyword);
      const matchBrand = brand === "all" || productBrand === brand;

      product.style.display = matchKeyword && matchBrand ? "block" : "none";
    });
  }

  // Gán sự kiện tìm kiếm
  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", filterProducts);
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") filterProducts();
    });
  }

  // Gán sự kiện click cho các brand-filter
  brandFilters.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      brandFilters.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      filterProducts();
    });
  });

  // 2. Kiểm tra trạng thái đăng nhập, cập nhật giao diện
  function checkLoginStatus() {
    const email = sessionStorage.getItem("userEmail");
    const name = sessionStorage.getItem("userName");
    if (email && userButtonsDiv) {
      userButtonsDiv.innerHTML = `
        <span class="username">👋 Xin chào, ${name || email.split("@")[0]}</span>
        <button class="logout-btn">Đăng xuất</button>
      `;

      userButtonsDiv.querySelector(".logout-btn").onclick = () => {
        sessionStorage.removeItem("userEmail");
        sessionStorage.removeItem("userName");
        checkLoginStatus();
      };
    } else if (userButtonsDiv) {
      userButtonsDiv.innerHTML = `
        <button class="login-btn"><i class="fas fa-user"></i> Đăng nhập</button>
        <button class="register-btn"><i class="fas fa-user-plus"></i> Đăng ký</button>
      `;
      userButtonsDiv.querySelector(".login-btn").onclick = showLoginForm;
      userButtonsDiv.querySelector(".register-btn").onclick = showRegisterForm;
    }
  }

  // 3. Yêu cầu đăng nhập trước thao tác
  function requireLogin(callback) {
    const email = sessionStorage.getItem("userEmail");
    if (!email) {
      alert("Vui lòng đăng nhập để tiếp tục.");
      showLoginForm();
      return false;
    }
    callback();
    return true;
  }

  // 4. Bấm nút Thêm vào giỏ hàng (order-btn)
  addToCartButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      requireLogin(() => {
        const productDiv = btn.closest(".product");
        if (!productDiv) return;

        const name = productDiv.querySelector("h3").textContent;
        const priceStr = productDiv.querySelector("p strong")?.textContent || "0";
        const price = Number(priceStr.replace(/\D/g, ""));

        cart.push({ name, price });
        updateCartUI();

        if (cartDiv) cartDiv.style.display = "block";
      });
    });
  });

  // 5. Cập nhật giao diện giỏ hàng
  function updateCartUI() {
    if (!cartItemsUl || !totalPriceSpan || !checkoutBtn) return;
    cartItemsUl.innerHTML = "";
    if (cart.length === 0) {
      cartItemsUl.innerHTML = "<li>Chưa có sản phẩm nào trong giỏ.</li>";
      checkoutBtn.disabled = true;
      totalPriceSpan.textContent = "0đ";
      return;
    }
    cart.forEach(({ name, price }, index) => {
      const li = document.createElement("li");
      li.textContent = `${name} - ${price.toLocaleString("vi-VN")}đ`;

      // Nút xóa sản phẩm
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "×";
      removeBtn.style.marginLeft = "10px";
      removeBtn.style.color = "#b30000";
      removeBtn.style.border = "none";
      removeBtn.style.background = "transparent";
      removeBtn.style.cursor = "pointer";
      removeBtn.style.fontWeight = "bold";
      removeBtn.onclick = () => {
        cart.splice(index, 1);
        updateCartUI();
      };

      li.appendChild(removeBtn);
      cartItemsUl.appendChild(li);
    });
    const total = cart.reduce((sum, p) => sum + p.price, 0);
    totalPriceSpan.textContent = total.toLocaleString("vi-VN") + "đ";
    checkoutBtn.disabled = false;
  }
  updateCartUI();

  // 6. Nút Thanh toán mở popup đặt hàng với toàn bộ sản phẩm trong giỏ
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      requireLogin(() => {
        if (cart.length === 0) {
          alert("Giỏ hàng của bạn đang trống!");
          return;
        }
        const productNames = cart.map((p) => p.name).join(", ");
        if (productInput) productInput.value = productNames;
        if (modal) modal.style.display = "flex";
      });
    });
  }

  // 7. Đóng popup đặt hàng
  if (closeBtn && modal && orderForm) {
    closeBtn.onclick = () => {
      modal.style.display = "none";
      orderForm.reset();
    };
    window.onclick = (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        orderForm.reset();
      }
    };
    window.onkeydown = (e) => {
      if (e.key === "Escape" && modal.style.display === "flex") {
        modal.style.display = "none";
        orderForm.reset();
      }
    };
  }

  // 8. Gửi form đặt hàng
  if (orderForm) {
    orderForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(orderForm);

      fetch(orderForm.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            alert(
              `Cảm ơn ${orderForm.name.value}! Đơn hàng "${orderForm.product.value}" đã được ghi nhận.`
            );
            if (modal) modal.style.display = "none";
            orderForm.reset();
            cart = [];
            updateCartUI();
          } else {
            alert("Có lỗi xảy ra khi gửi đơn hàng. Vui lòng thử lại.");
          }
        })
        .catch(() => {
          alert("Lỗi kết nối. Vui lòng thử lại sau.");
        });
    });
  }

  // 9. Hiện popup đăng nhập
  function showLoginForm() {
    if (document.querySelector(".popup-overlay")) return;
    const html = `
      <div style="background:white; padding:20px; border-radius:6px; width:300px; position:relative;">
        <h2>Đăng nhập</h2>
        <form id="loginForm">
          <input type="email" placeholder="Email" required style="width:100%; margin-bottom:10px; padding:8px;" />
          <input type="password" placeholder="Mật khẩu" required style="width:100%; margin-bottom:10px; padding:8px;" />
          <button type="submit" style="width:100%; padding:10px; background:#e74c3c; color:white; border:none; border-radius:4px;">Đăng nhập</button>
        </form>
        <button id="closeLogin" style="position:absolute; top:10px; right:10px; border:none; background:none; font-size:18px; cursor:pointer;">×</button>
      </div>
    `;
    const overlay = document.createElement("div");
    overlay.classList.add("popup-overlay");
    overlay.style.position = "fixed";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.innerHTML = html;
    document.body.appendChild(overlay);

    const loginForm = document.getElementById("loginForm");
    const closeLogin = document.getElementById("closeLogin");

    closeLogin.onclick = () => {
      document.body.removeChild(overlay);
    };

    loginForm.onsubmit = (e) => {
      e.preventDefault();
      const email = loginForm.querySelector('input[type="email"]').value.trim();
      const password = loginForm.querySelector('input[type="password"]').value.trim();

      if (email === "" || password === "") {
        alert("Vui lòng nhập đủ thông tin!");
        return;
      }

      // Giả lập đăng nhập thành công
      sessionStorage.setItem("userEmail", email);
      sessionStorage.setItem("userName", email.split("@")[0]);
      alert(`Chào mừng ${email.split("@")[0]} đã đăng nhập!`);

      document.body.removeChild(overlay);
      checkLoginStatus();
    };
  }

  // 10. Hiện popup đăng ký (đơn giản)
  function showRegisterForm() {
    alert("Chức năng đăng ký chưa được triển khai.");
  }

  checkLoginStatus();
  filterProducts();

  // 11. Hiển thị chi tiết sản phẩm khi click vào hình ảnh hoặc tên sản phẩm
  products.forEach((product) => {
    const img = product.querySelector("img");
    const title = product.querySelector("h3");

    [img, title].forEach((element) => {
      if (element) {
        element.style.cursor = "pointer";
        element.addEventListener("click", () => {
          const name = product.querySelector("h3").textContent;
          if (!productDetails[name]) {
            alert("Không có thông tin chi tiết cho sản phẩm này.");
            return;
          }
          detailProductName.textContent = name;
          detailProductImage.src = productDetails[name].image;
          detailProductPrice.textContent = productDetails[name].price;
          detailProductDescription.textContent = productDetails[name].description;
          productDetailModal.style.display = "flex";
        });
      }
    });
  });

  // Đóng modal chi tiết sản phẩm
  if (closeDetailBtn && productDetailModal) {
    closeDetailBtn.onclick = () => {
      productDetailModal.style.display = "none";
    };
    window.onclick = (e) => {
      if (e.target === productDetailModal) {
        productDetailModal.style.display = "none";
      }
    };
    window.onkeydown = (e) => {
      if (e.key === "Escape" && productDetailModal.style.display === "flex") {
        productDetailModal.style.display = "none";
      }
    };
  }
});
