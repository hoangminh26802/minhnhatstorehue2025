document.addEventListener("DOMContentLoaded", () => {
  const orderTableBody = document.querySelector("#orderTable tbody");

  function loadOrders() {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orderTableBody.innerHTML = "";

    orders.forEach((order, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${order.name}</td>
        <td>${order.product}</td>
        <td>${order.quantity}</td>
        <td>${order.phone}</td>
        <td>${order.address}</td>
        <td><button onclick="deleteOrder(${index})">🗑️ Xóa</button></td>
      `;
      orderTableBody.appendChild(row);
    });
  }

  window.deleteOrder = function(index) {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.splice(index, 1);
    localStorage.setItem("orders", JSON.stringify(orders));
    loadOrders();
  };

  loadOrders();
});
