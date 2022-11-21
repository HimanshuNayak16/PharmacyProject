window.onload = () => {
  if (localStorage.getItem("loginStatus") !== "true") {
    location.assign("./index.html");
  }

  const logoutButton = document.getElementById("logout-button");
  logoutButton.onclick = function (e) {
    e.preventDefault();
    localStorage.setItem("loginStatus", false);
    location.assign("./index.html");
  };
  const tBody = document.getElementById("order-table-body");
  const orderCount = document.getElementById("orders-count");
  fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders")
    .then((res) => res.json())
    .then((data) => {
      orderCount.innerText = data.length;
      data.forEach((row) => createOrderTableBodyRow(row, tBody));
    });
};

const createOrderTableBodyRow = (row, tbody) => {
  const { id, customerName, orderDate, amount, orderStatus } = row;
  const tableRow = `<tr>
        <td class="secondary-text">${id}</td>
        <td class="primary-text">${customerName}</td>
        <td class="primary-text">${orderDate}</td>
        <td class="secondary-text">$${amount}</td>
        <td class="primary-text">${orderStatus}</td>
      </tr>`;
  tbody.innerHTML += tableRow;
};

const newCheckBox = document.getElementById("new");
newCheckBox.addEventListener("change", function (e) {
  e.preventDefault();
  let tablebody = document.getElementById("order-table-body");
  let tr = tablebody.getElementsByTagName("tr");
  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[4];
    if (td) {
      let textValue = td.textContent || td.innerHTML;
      if (textValue === "New") {
        if (this.checked === true) {
          tr[i].style.display = "";
          document.getElementById("orders-count").innerText =
            parseInt(document.getElementById("orders-count").innerText) + 1;
        } else {
          tr[i].style.display = "none";
          document.getElementById("orders-count").innerText =
            parseInt(document.getElementById("orders-count").innerText) - 1;
        }
      }
    }
  }
});

const packedCheckBox = document.getElementById("packed");
packedCheckBox.addEventListener("change", function (e) {
  e.preventDefault();
  let tablebody = document.getElementById("order-table-body");
  let tr = tablebody.getElementsByTagName("tr");
  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[4];
    if (td) {
      let textValue = td.textContent || td.innerHTML;
      if (textValue === "Packed") {
        if (this.checked === true) {
          tr[i].style.display = "";
          document.getElementById("orders-count").innerText =
            parseInt(document.getElementById("orders-count").innerText) + 1;
        } else {
          tr[i].style.display = "none";
          document.getElementById("orders-count").innerText =
            parseInt(document.getElementById("orders-count").innerText) - 1;
        }
      }
    }
  }
});

const inTransitCheckBox = document.getElementById("intransit");
inTransitCheckBox.addEventListener("change", function (e) {
  e.preventDefault();
  let tablebody = document.getElementById("order-table-body");
  let tr = tablebody.getElementsByTagName("tr");
  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[4];
    if (td) {
      let textValue = td.textContent || td.innerHTML;
      if (textValue === "InTransit") {
        if (this.checked === true) {
          tr[i].style.display = "";
          document.getElementById("orders-count").innerText =
            parseInt(document.getElementById("orders-count").innerText) + 1;
        } else {
          tr[i].style.display = "none";
          document.getElementById("orders-count").innerText =
            parseInt(document.getElementById("orders-count").innerText) - 1;
        }
      }
    }
  }
});

const deliveredCheckBox = document.getElementById("delivered");
deliveredCheckBox.addEventListener("change", function (e) {
  e.preventDefault();
  let tablebody = document.getElementById("order-table-body");
  let tr = tablebody.getElementsByTagName("tr");
  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[4];
    if (td) {
      let textValue = td.textContent || td.innerHTML;
      if (textValue === "Delivered") {
        if (this.checked === true) {
          tr[i].style.display = "";
          document.getElementById("orders-count").innerText =
            parseInt(document.getElementById("orders-count").innerText) + 1;
        } else {
          tr[i].style.display = "none";
          document.getElementById("orders-count").innerText =
            parseInt(document.getElementById("orders-count").innerText) - 1;
        }
      }
    }
  }
});
