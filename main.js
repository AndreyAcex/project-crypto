document.addEventListener("DOMContentLoaded", function () {
  let dropdownToggle = document.querySelector(".dropdown-toggle");
  let dropdownMenu = document.querySelector(".dropdown-menu");
  let menuIcon = document.querySelector(".menu-icon");
  let closeIcon = document.querySelector(".close-icon");

  dropdownToggle.addEventListener("click", function () {
    if (dropdownMenu.style.display === "block") {
      dropdownMenu.style.display = "none";
      menuIcon.style.display = "inline";
      closeIcon.style.display = "none";
    } else {
      dropdownMenu.style.display = "block";
      menuIcon.style.display = "none";
      closeIcon.style.display = "inline";
    }
  });

  // Закрытие меню, если клик был вне его
  window.addEventListener("click", function (e) {
    if (
      !dropdownToggle.contains(e.target) &&
      dropdownMenu.style.display === "block"
    ) {
      dropdownMenu.style.display = "none";
      menuIcon.style.display = "inline";
      closeIcon.style.display = "none";
    }
  });
});

function toggleText(index) {
  let hiddenText = document.getElementById("hidden-text-" + index);
  hiddenText.style.display =
    hiddenText.style.display === "block" ? "none" : "block";
}

document.querySelectorAll(".dropdown-button-basic").forEach((button) => {
  button.addEventListener("click", function () {
    const content = this.nextElementSibling; // Получаем следующий элемент (контент)
    content.style.display =
      content.style.display === "block" ? "none" : "block";
    this.classList.toggle("active");
  });
});
