function toggleInfo() {
  var adminCard = document.getElementById("adminCard");
  adminCard.classList.toggle("show_card");
}
document.getElementById("svBtn").addEventListener("click", function () {
  window.location.href = "/svManage/general-result.html";
});

document.getElementById("tracuuBtn").addEventListener("click", function () {
  window.location.href = "/svManage/student-result.html";
});

document.getElementById("ktBtn").addEventListener("click", function () {
  window.location.href = "/adminDashboard/index.html";
});
