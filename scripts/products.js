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
  const productCount = document.getElementById("products-count");
  fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products")
    .then((res) => res.json())
    .then((data) => {
      productCount.innerText = data.length;
      data.forEach((row) => createOrderTableBodyRow(row, tBody));
    });
};

const createOrderTableBodyRow = (row, tbody) => {
  const { id, medicineName, medicineBrand, expiryDate, unitPrice, stock } = row;
  const tableRow = `<tr>
    <td class="secondary-text">${id}</td>
    <td class="primary-text">${medicineName}</td>
    <td class="secondary-text">${medicineBrand}</td>
    <td class="primary-text">${expiryDate}</td>
    <td class="secondary-text">${unitPrice}</td>
    <td class="primary-text">${stock}</td>
  </tr>`;
  tbody.innerHTML += tableRow;
};

const expiredCheckBox = document.getElementById("expired");
expiredCheckBox.addEventListener("change", function (e) {
  e.preventDefault();
  let tablebody = document.getElementById("order-table-body");
  let tr = tablebody.getElementsByTagName("tr");
  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      let textValue = dateParser(td.textContent || td.innerHTML);
      if (new Date(textValue).getTime() < new Date().getTime()) {
        if (this.checked === true) {
          tr[i].style.display = "";
          document.getElementById("products-count").innerText =
            parseInt(document.getElementById("products-count").innerText) + 1;
        } else {
          tr[i].style.display = "none";
          document.getElementById("products-count").innerText =
            parseInt(document.getElementById("products-count").innerText) - 1;
        }
      }
    }
  }
});

const lowStockCheckBox = document.getElementById("low-stock");
lowStockCheckBox.addEventListener("change", function (e) {
  e.preventDefault();
  let tablebody = document.getElementById("table-body");
  let tr = tablebody.getElementsByTagName("tr");
  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[5];
    if (td) {
      let textValue = td.textContent || td.innerHTML;
      if (textValue < 100) {
        if (this.checked === true) {
          tr[i].style.display = "";
          document.getElementById("products-count").innerText =
            parseInt(document.getElementById("products-count").innerText) + 1;
        } else {
          tr[i].style.display = "none";
          document.getElementById("products-count").innerText =
            parseInt(document.getElementById("products-count").innerText) + 1;
        }
      }
    }
  }
});

function dateParser(date) {
  let arr = date.split("-");
  return arr.join(" ");
}
