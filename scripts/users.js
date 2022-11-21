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
  fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((row) => createOrderTableBodyRow(row, tBody));
    });
};

const searchFormUser = document.getElementById("users-search-form");
searchFormUser.onsubmit = function (e) {
  let searchValue = document.getElementById("user-search").value.toUpperCase();
  e.preventDefault();
  if (searchValue.length < 2) {
    alert("Please enter atleast 2 characters");
    const rows = document.getElementById("order-table-body").children;
    Array.from(rows).forEach((row) => (row.style.display = ""));
  } else {
    fetch(
      `https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users?fullName=${searchValue}`
    )
      .then((res) => res.json())
      .then((data) => {
        let tablebody = document.getElementById("order-table-body");
        let tr = tablebody.getElementsByTagName("tr");
        for (let i = 0; i < tr.length; i++) {
          let td = tr[i].getElementsByTagName("td")[2];
          if (td) {
            let textValue = td.textContent || td.innerHTML;

            if (textValue.toUpperCase().indexOf(searchValue) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
        }
      });
  }
};

const createOrderTableBodyRow = (row, tbody) => {
  const { id, profilePic, fullName, dob, gender, currentCity, currentCountry } =
    row;
  const tableRow = `<tr>
        <td class="secondary-text">${id}</td>
        <td class="primary-text"><img src="${profilePic}"/></td>
        <td class="secondary-text">${fullName}</td>
        <td class="primary-text">${dob}</td>
        <td class="secondary-text">${gender}</td>
        <td class="secondary-text">${currentCity}, ${currentCountry}</td>
      </tr>`;
  tbody.innerHTML += tableRow;
};
