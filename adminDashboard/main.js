function toggleInfo() {
  var adminCard = document.getElementById("adminCard");
  adminCard.classList.toggle("show_card");
}

var danhSachKyThi = [
  {
    ID: "KT1",
    tenMon: "Giải Tích 1",
    ngayThi: "2024-3-1",
    kyThi: "Cuối kỳ 1",
    cachThuc: "tự luận",
    soLuongNguoiThamGia: 42,
    tyLeHoanThanh: "90.36",
    diemTrungBinh: "6.72",
  },
  {
    ID: "KT2",
    tenMon: "Đại Số",
    ngayThi: "2024-3-2",
    kyThi: "Cuối Kỳ 2",
    cachThuc: "tự luận",
    soLuongNguoiThamGia: 38,
    tyLeHoanThanh: "88.75",
    diemTrungBinh: "7.43",
  },
  {
    ID: "KT3",
    tenMon: "Giải Tích 2",
    ngayThi: "2024-3-3",
    kyThi: "15p",
    cachThuc: "tự luận",
    soLuongNguoiThamGia: 41,
    tyLeHoanThanh: "91.28",
    diemTrungBinh: "5.99",
  },
  {
    ID: "KT4",
    tenMon: "Tiếng Anh",
    ngayThi: "2024-3-4",
    kyThi: "Cuối Kỳ 2",
    cachThuc: "tự luận",
    soLuongNguoiThamGia: 37,
    tyLeHoanThanh: "86.57",
    diemTrungBinh: "6.82",
  },
  {
    ID: "KT5",
    tenMon: "Đại Số",
    ngayThi: "2024-3-5",
    kyThi: "Cuối kỳ 1",
    cachThuc: "trắc nghiệm",
    soLuongNguoiThamGia: 44,
    tyLeHoanThanh: "92.64",
    diemTrungBinh: "7.12",
  },
  {
    ID: "KT6",
    tenMon: "Đại Số",
    ngayThi: "2024-3-6",
    kyThi: "15p",
    cachThuc: "trắc nghiệm",
    soLuongNguoiThamGia: 35,
    tyLeHoanThanh: "87.92",
    diemTrungBinh: "5.73",
  },
  {
    ID: "KT7",
    tenMon: "Giải Tích 2",
    ngayThi: "2024-3-7",
    kyThi: "Cuối kỳ 1",
    cachThuc: "tự luận",
    soLuongNguoiThamGia: 39,
    tyLeHoanThanh: "89.43",
    diemTrungBinh: "6.34",
  },
  {
    ID: "KT8",
    tenMon: "Giải Tích 1",
    ngayThi: "2024-3-8",
    kyThi: "15p",
    cachThuc: "trắc nghiệm",
    soLuongNguoiThamGia: 40,
    tyLeHoanThanh: "90.84",
    diemTrungBinh: "7.89",
  },
  {
    ID: "KT9",
    tenMon: "Đại Số",
    ngayThi: "2024-3-9",
    kyThi: "15p",
    cachThuc: "tự luận",
    soLuongNguoiThamGia: 43,
    tyLeHoanThanh: "93.12",
    diemTrungBinh: "5.45",
  },
  {
    ID: "KT10",
    tenMon: "Tiếng Anh",
    ngayThi: "2024-3-10",
    kyThi: "Giữa kỳ",
    cachThuc: "tự luận",
    soLuongNguoiThamGia: 36,
    tyLeHoanThanh: "88.99",
    diemTrungBinh: "6.67",
  },
];

console.log(danhSachKyThi);

// console.log(danhSachKyThi);

const tbodyElement = document.getElementById("Table");
displayTable();
function displayTable() {
  tbodyElement.innerHTML = "";
  danhSachKyThi.forEach((item) => {
    const row = tbodyElement.insertRow();

    for (let key in item) {
      if (
        key !== "soLuongNguoiThamGia" &&
        key !== "tyLeHoanThanh" &&
        key !== "diemTrungBinh"
      ) {
        const cell = row.insertCell();
        if (key === "ID") {
          const link = document.createElement("a");
          link.href = "#";
          link.addEventListener("click", () => getKyThi(item.ID));
          link.textContent = item[key];
          cell.appendChild(link);
        } else {
          cell.textContent = item[key];
        }
      }
    }
    const iconCell = row.insertCell();
    const icon = document.createElement("button");
    icon.className = "delete";
    icon.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    icon.addEventListener("click", () => deleteRow(item.ID));
    iconCell.appendChild(icon);
  });
}

function deleteRow(ID) {
  const index = danhSachKyThi.findIndex((obj) => obj.ID === ID);
  danhSachKyThi.splice(index, 1);
  // console.log(index);
  displayTable();
}

function getKyThi(ID) {
  const index = danhSachKyThi.findIndex((obj) => obj.ID === ID);
  const kythi = danhSachKyThi[index];
  var model = document.getElementById("kythi_info");
  console.log("model", model);
  model.innerHTML = `
    <h2>${kythi.ID}</h2>
    <h3>Tên môn học: ${kythi.tenMon}</h3>
    <p>Ngày thi: ${kythi.ngayThi}</p>
    <p>Kỳ thi: ${kythi.kyThi}</p>
    <p>Cách thức thi: ${kythi.cachThuc}</p>
    <p>Số lượng người tham gia: ${kythi.soLuongNguoiThamGia}</p>
    <p>Tỷ lệ hoàn thành: ${kythi.tyLeHoanThanh}%</p>
    <p>Điểm trung bình: ${kythi.diemTrungBinh}</p>
  `;

  var overlay = document.getElementById("overlay");

  overlay.style.display = "block";
  model.style.display = "block";

  window.onclick = function (event) {
    if (event.target == overlay) {
      model.style.display = "none";
      overlay.style.display = "none";
    }
  };

  // console.log(kythi);
}

function goBack() {
  window.history.back();
}

document.getElementById("svBtn").addEventListener("click", function () {
  window.location.href = "../svManage/general-result.html";
});

document.getElementById("tracuuBtn").addEventListener("click", function () {
  window.location.href = "../svManage/student-result.html";
});
