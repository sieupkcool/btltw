function toggleInfo() {
  var adminCard = document.getElementById("adminCard");
  adminCard.classList.toggle("show_card");
}
document.getElementById("svBtn").addEventListener("click", function () {
  window.location.href = "./general-result.html";
});

document.getElementById("tracuuBtn").addEventListener("click", function () {
  window.location.href = "./student-result.html";
});

document.getElementById("ktBtn").addEventListener("click", function () {
  window.location.href = "../adminDashboard/index.html";
});
