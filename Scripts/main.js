function showProductList() {
  window.parent.postMessage("search", "*");
}

function showCart() {
  window.parent.postMessage("cart", "*");
}

function showHome() {
  window.parent.postMessage("home", "*");
}

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("message", function (event) {
    switch (event.data) {
      case "search":
        $("#discount").hide();
        $("#result").show();
        $("#productdetail").hide();
        $("#cartview").hide();
        break;
      case "product":
        $("#discount").hide();
        $("#result").hide();
        $("#productdetail").show();
        $("#cartview").hide();
        break;
      case "cart":
        $("#discount").hide();
        $("#result").hide();
        $("#productdetail").hide();
        $("#cartview").show();
        break;
      case "home":
        $("#discount").show();
        $("#result").hide();
        $("#productdetail").hide();
        $("#cartview").hide();
        break;
    }
  });

  var searchbutton = document.getElementById("searchbtn");
  searchbutton.addEventListener("click", function () {
    window.parent.postMessage("search", "*");
  });

  var searchBar = document.getElementById("searchInput");
  searchBar.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("searchbtn").click();
    }
  }); 
});
