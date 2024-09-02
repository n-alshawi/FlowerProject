$(document).ready(function () {
  var product = document.getElementById("single-product");
  product.addEventListener("click", function () {
    var message = "product";
    window.parent.postMessage(message, "*");
  });
});

let sortBtn = document.querySelector('.filter-menu').children;
let sortItem = $('[data-item]')

for(let i = 0; i < sortBtn.length; i++){
    sortBtn[i].addEventListener('click', function(){
        for(let j = 0; j< sortBtn.length; j++){
            sortBtn[j].classList.remove('activeFilter');
        }

        this.classList.add('activeFilter');
        

        let targetData = this.getAttribute('data-target');

        for(let k = 0; k < sortItem.length; k++){
            sortItem[k].classList.remove('d-block');
            sortItem[k].classList.add('d-none');

            if(sortItem[k].getAttribute('data-item') == targetData || targetData == "all"){
                sortItem[k].classList.remove('d-none');
                sortItem[k].classList.add('d-block');
            }
        }
    });
}
