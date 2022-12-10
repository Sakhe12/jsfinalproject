let products = JSON.parse(localStorage.getItem('addCheckout'));

function showProducts () {
    products.forEach((sports)=> {
        let wrapper = document.querySelector(".wrapper")
        wrapper.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="${sports.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${sports.product}</h5>
          <p class="card-text">R${sports.price}</p>
        </div>
      </div>`
    });
}
showProducts()
