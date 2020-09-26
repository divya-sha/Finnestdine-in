var modal = document.getElementById("myPopup");
var btn = document.getElementById("myBtn");
var closeBox = document.getElementsByClassName("close__box")[0];
// modal.style.display = "block";

btn.onclick = function() {
  window.setTimeout(function() {
    modal.style.display = "block";
  }, 100);

};

closeBox.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};