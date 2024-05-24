document.addEventListener("DOMContentLoaded", function () {
  function rotateAnimation() {
    var image = document.getElementById("Hjärta");
    var button = document.getElementById("animation");
    if (image && button) {
      image.style.transform = "rotate(360deg)";
      button.style.display = "none";
    }
  }

  var button = document.getElementById("animation");
  if (button) {
    button.addEventListener("click", rotateAnimation);
  }
});
