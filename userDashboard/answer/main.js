document
  .getElementById("button-reviews")
  .addEventListener("click", function () {
    var overlay = document.createElement("div");
    overlay.classList.add("overlay");

    var popup = document.createElement("div");
    popup.classList.add("popup");
    var content = document.createElement("p");
    content.textContent = "câu 1: 1 + 1 = ?";
    popup.appendChild(content);
    var content = document.createElement("p");
    content.textContent = "câu 1: 1 + 1 = ?";
    popup.appendChild(content);
    var content = document.createElement("p");
    content.textContent = "câu 1: 1 + 1 = ?";
    popup.appendChild(content);
    var content = document.createElement("p");
    content.textContent = "câu 1: 1 + 1 = ?";
    popup.appendChild(content);
    var content = document.createElement("p");
    content.textContent = "câu 1: 1 + 1 = ?";
    popup.appendChild(content);
    var content = document.createElement("p");
    content.textContent = "câu 1: 1 + 1 = ?";
    popup.appendChild(content);
    var content = document.createElement("p");
    content.textContent = "câu 1: 1 + 1 = ?";
    popup.appendChild(content);
    var content = document.createElement("p");
    content.textContent = "câu 1: 1 + 1 = ?";
    popup.appendChild(content);
    var content = document.createElement("p");
    content.textContent = "câu 1: 1 + 1 = ?";
    popup.appendChild(content);
    var content = document.createElement("p");
    content.textContent = "câu 1: 1 + 1 = ?";
    popup.appendChild(content);

    overlay.appendChild(popup);
    document.body.appendChild(overlay);
  });

function goBack() {
  window.history.back();
}
