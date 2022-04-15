// Navbar toggler button js functionionality applied
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("navbar-toggler-icon")) {
    document.getElementById("navbarResponsive").classList.toggle("show");
  } else if (event.target.classList.contains("nav-link")) {
    document.getElementById("navbarResponsive").classList.remove("show");
  }
});
