// Sample data: example
let products = JSON.parse(localStorage.getItem('products')) ? 
JSON.parse(localStorage.getItem('products ')) : localStorage.setItem('products',JSON.stringify(
    [
        {
            id: 1,
            product: "Puma Jomo Sono King Senior Soccer Boots",
            price: "749",
            image: "https://i.postimg.cc/pdn3WmVN/1162213-DPBLACKWHITEBLACK-1-w-WI.jpg"
        },
        {
            id: 2,
            product: "Adidas X Speedflow Messi 4 FxG Junior Soccer Boots",
            price: "899",
            image: "https://i.postimg.cc/W1G3f1rn/1157472-SOLARGOLDCOREBLKBRIGHTYELL-1-6ra.jpg"
        },
        {
            id: 3,
            product: "Adidas PREDATOR FS Football Gloves",
            price: "999",
            image: "https://i.postimg.cc/VNrdWP19/1156867-BLUE-1-u-EX.jpg"
        },
        {
            id: 4,
            product: "Nike Phantom GT2 Academy Dynamic Fit MG Senior Soccer Boots",
            price: "1699",
            image: "https://i.postimg.cc/HxH1sFY4/1159798-GLACIERICEBLACKYELSTRIKE-1-9-Gd.jpg"
        },
        {
            id: 5,
            product: "Nike Mecurial Zoom Vapor 15 Academy MG Senior Soccer Boots",
            price: "1599",
            image: "https://res.cloudinary.com/moresport/image/upload/a_0,c_fill,f_auto,q_auto:good,w_690/v1575961299/uploads/assets/1162298-BLKDKSMKGREYSUMMITWHTVOL-1-sDa.jpg"
        },
        {
            id: 6,
            product: "Nike Phantom GT2 Academy DF FG/MG Junior Soccer Boots",
            price: "1299",
            image: "https://i.postimg.cc/SQ6WrYDS/1162307-METALICCOPPERMETALICCOPPER-1-S8c.jpg"
        }
    ]
)); 

function showProducts () {
    products = JSON.parse(localStorage.getItem('products'))
    products.forEach((sports)=> {
        let wrapper = document.querySelector(".wrapper")
        wrapper.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="${sports.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${sports.product}</h5>
          <p class="card-text">R${sports.price}</p>
          <a href="#" id="btnCheckout" class="btn  btn-primary" onclick='addToCheckout(${JSON.stringify(sports)})'>checkout item</a>
        </div>
      </div>`
    });
}

showProducts();
localStorage.setItem('products', JSON.stringify(products));

let checkout = [];
// localStorage.setItem('addCheckout', JSON.stringify(checkout));
// let checkBtn = [...document.querySelectorAll("#btnCheckout")];
// console.log(checkBtn);

// Object.keys(checkBtn).forEach((boots) => {
//     checkBtn[boots].addEventListener("click", (e) => {
//         e.preventDefault();
//         console.log(checkBtn[boots]);
//         console.log(products[boots]);
//         checkout.push(products[boots]);
//         console.log(checkout);
//         localStorage.setItem('addCheckout', JSON.stringify(checkout));
//     });
// });

function addToCheckout(item) {
    console.log(item);
    checkout.push(item);
    localStorage.setItem('addCheckout', JSON.stringify(checkout));

}