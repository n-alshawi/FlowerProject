$(document).ready(function () {
    var cartbtn = document.getElementById("addcart")
    cartbtn.addEventListener("click", function () {
        var message = "cart";
        window.parent.postMessage(message, "*");
    });

})
