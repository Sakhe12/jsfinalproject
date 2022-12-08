// Sample data: example
let products = JSON.parse(localStorage.getItem('products')) ? 
JSON.parse(localStorage.getItem('products ')) : [
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
];

function displayProducts() {
    let tbody = document.querySelector('tbody');
    tbody.innerHTML = ''
    products = JSON.parse(localStorage.getItem('products'))

    products.forEach( shoes=>{
        shoes.id = products.indexOf(shoes) + 1
        if(products.length){
            // console.log((`${shoes}: ${shoes}`));
            tbody.innerHTML +=
            `
            <tr>
            <td>${shoes.id}</td>
            <td>${shoes.product}</td>
            <td>R${shoes.price}</td>
            <td><button id="" onclick="">edit</button></td>
            <td><button onclick="deleteProduct(${shoes.id})" id='${shoes.id}' >delete</button></td>
          </tr>
            `}
    })
}
displayProducts()
// displayProducts()
// function remove() {
//     const element = document.querySelector('id');
//     element.remove();
// }
//delete
function deleteProduct(itemId) {
    console.log(itemId)
    try {
        let newProducts = products.filter(product => {
            return itemId !== product.id
        });
        console.log(newProducts);
        
        localStorage.setItem('products', JSON.stringify(newProducts));
        console.log(JSON.parse(localStorage.getItem('products')));
        displayProducts()
    }
    catch(error){
        console.log(error);
    } 
}

// let btnSave = document.querySelector('.btnSave')
// btnSave.addEventListener('click', (e)=> {
//     e.preventDefault,
//     let id =
//     let product =
//     let price =
// })
//submit button
// let addItem = document.querySelector('#addItem');
// // let display = document.querySelector('#display');

// //add event listener
// addItem.addEventListener('click', (e)=> {
//     e.preventDefault();
//     let id = document.querySelector('#id').value;
//     let product = document.querySelector('#product').value;
//     let price = document.querySelector('#price').value;

//     //push an object into an array
//     products.push(
//         {
//             id,
//             product,
//             price
//         }
//     )
//     console.log(products);
//     localStorage.setItem('products', JSON.stringify(product));
// })  
